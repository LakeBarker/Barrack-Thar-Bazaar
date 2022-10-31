// Import Dependencies
const express = require('express')
// This is imported as `items` but you are using `Item` in the rest of the file. Change this at the top and this should now work for your Item model
const items = require('../models/items')

// Create router
const router = express.Router()

// only loggedIn users can post comments
router.post("/:itemId", (req, res) => {
    const itemId = req.params.itemId

    if (req.session.loggedIn) {
        // we want to adjust req.body so that the author is automatically assigned
        req.body.author = req.session.userId
    } else {
        res.sendStatus(401)
    }
    // find a specific item
    // Just linking the comment on line 3 that I left to the Item that I am meaning
    Item.findById(itemId)
        // do something if it works
        //  --> send a success response status and maybe the review? maybe the item?
        .then(item => {
            // push the comment into the item.reviews array
            item.comments.push(req.body)
            // we need to save the item
            return item.save()
        })
        .then(item => {
            // res.status(200).json({ item: item })
            res.redirect(`/items/${item.id}`)
        })
        // do something else if it doesn't work
        //  --> send some kind of error depending on what went wrong
        .catch(err => res.redirect(`/error?error=${err}`))
})

// DELETE
// only the author of the comment can delete it
router.delete('/delete/:itemId/:revId', (req, res) => {
    // isolate the ids and save to vars for easy ref
    const itemId = req.params.itemId 
    const revId = req.params.revId
    // get the item
    Item.findById(itemId)
        .then(item => {
            // get the comment
            // subdocs have a built in method that you can use to access specific subdocuments when you need to.
            // this built in method is called .id()
            const theReview = item.reviews.id(revId)
            // Nit: remove console.logs
            console.log('this is the review that was found', theReview)
            // make sure the user is logged in
            if (req.session.loggedIn) {
                // only let the author of the comment delete it
                if (theReview.author == req.session.userId) {
                    // find some way to remove the comment
                    // here's another built in method
                    theReview.remove()
                    item.save()
                    res.redirect(`/items/${item.id}`)
                    // return the saved item
                    // return item.save()
                } else {
                    const err = 'you%20are%20not%20authorized%20for%20this%20action'
                    res.redirect(`/error?error=${err}`)
                }
            } else {
                const err = 'you%20are%20not%20authorized%20for%20this%20action'
                res.redirect(`/error?error=${err}`)
            }
        })
        // send an error if error
        .catch(err => res.redirect(`/error?error=${err}`))

})

//////////////////////////////////////////
// Export the Router
//////////////////////////////////////////
module.exports = router