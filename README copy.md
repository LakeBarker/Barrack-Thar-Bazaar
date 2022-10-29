[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Barrack Thar Bazaar

A collection of wares to be used by Game Masters and players, essentially there to act as a storefront for a Dwarf named Barrack-Thar

## Installation

1. Fork and Clone the repo
2. You must have an instance of MongoDB, make sure one is running on your machine
3. In the terminal, inside the Barrack_Thar_Bazaar directory, run 
4. npm install
5. npm run seed in a seperate terminal window
6. open localhost:3000
7. Enjoy!


## Structure
There are a few different models to look at and use

## Tasks


### Authentication

| Verb   | URI Pattern            | Controller#Action |
|--------|------------------------|-------------------|
| POST   | `/auth/signup`             | `user#signup`    |
| POST   | `/auth/login`             | `user#login`    |
| DELETE | `/auth/logout/`        | `user#logout`   |

### Error Handling

Errors are handled with a default view, and should be called as seen in this example:
```js
router.delete('/:id', (req, res) => {
	const exampleId = req.params.id
	Example.findByIdAndRemove(exampleId)
		.then(example => {
			res.redirect('/examples')
		})
		.catch(error => {
			res.redirect(`/error?error=${error}`)
		})
})
```



## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
