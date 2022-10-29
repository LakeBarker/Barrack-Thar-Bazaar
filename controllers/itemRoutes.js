// Import Dependencies
const express = require('express')
const Item = require('../models/items')

// Create router
const router = express.Router()

// Router Middleware
// Authorization middleware
// If you have some resources that should be accessible to everyone regardless of loggedIn status, this middleware can be moved, commented out, or deleted. 
router.use((req, res, next) => {
	// checking the loggedIn boolean of our session
	if (req.session.loggedIn) {
		// if they're logged in, go to the next thing(thats the controller)
		next()
	} else {
		// if they're not logged in, send them to the login page
		res.redirect('/auth/login')
	}
})
////////////////////////
// Routes
////////////////////////

// index ALL
router.get('/', (req, res) => {
	Item.find({})
		.then(items => {
			const username = req.session.username
			const loggedIn = req.session.loggedIn
			
			res.render('items/index', { items, username, loggedIn })
		})
		.catch(error => {
			res.redirect(`/error?error=${error}`)
		})
})

// index that shows only the user's items
router.get('/mine', (req, res) => {
    // destructure user info from req.session
    const { username, userId, loggedIn } = req.session
	Item.find({ owner: userId })
		.then(items => {
			res.render('items/index', { items, username, loggedIn })
		})
		.catch(error => {
			res.redirect(`/error?error=${error}`)
		})
})

// new route -> GET route that renders our page with the form
router.get('/new', (req, res) => {
	const { username, userId, loggedIn } = req.session
	res.render('items/new', { username, loggedIn })
})

// create -> POST route that actually calls the db and makes a new document
router.post('/', (req, res) => {
	req.body.ready = req.body.ready === 'on' ? true : false

	req.body.owner = req.session.userId
	Item.create(req.body)
		.then(item => {
			console.log('this was returned from create', item)
			res.redirect('/items')
		})
		.catch(error => {
			res.redirect(`/error?error=${error}`)
		})
})

// edit route -> GET that takes us to the edit form view
router.get('/:id/edit', (req, res) => {
	// we need to get the id
	const itemId = req.params.id
	Item.findById(itemId)
		.then(item => {
			res.render('items/edit', { item })
		})
		.catch((error) => {
			res.redirect(`/error?error=${error}`)
		})
})

// update route
router.put('/:id', (req, res) => {
	const itemId = req.params.id
	req.body.ready = req.body.ready === 'on' ? true : false

	Item.findByIdAndUpdate(itemId, req.body, { new: true })
		.then(item => {
			res.redirect(`/items/${item.id}`)
		})
		.catch((error) => {
			res.redirect(`/error?error=${error}`)
		})
})

// show route
router.get('/:id', (req, res) => {
	const itemId = req.params.id
	Item.findById(itemId)
		.then(item => {
            const {username, loggedIn, userId} = req.session
			res.render('items/show', { item, username, loggedIn, userId })
		})
		.catch((error) => {
			res.redirect(`/error?error=${error}`)
		})
})

// delete route
router.delete('/:id', (req, res) => {
	const itemId = req.params.id
	Item.findByIdAndRemove(itemId)
		.then(item => {
			res.redirect('/items')
		})
		.catch(error => {
			res.redirect(`/error?error=${error}`)
		})
})

// Export the Router
module.exports = router
