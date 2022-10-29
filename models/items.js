// import dependencies
const mongoose = require('./connection')

// import user model for populate
const User = require('./user')
const Review = require('./review')
const reviewSchema = require('./review')

// destructure the schema and model constructors from mongoose
const { Schema, model } = mongoose

//item schema
const itemSchema = new Schema(
	{
		title: { type: String, required: true },
		description: { type: String, required: true },
        price: { type: Number, required: true },
		rarity: { type: Number },
		available: { type: Boolean },
		owner: {
			type: Schema.Types.ObjectID,
			ref: 'User',
		},
		reviews: [reviewSchema]
	},
	{ timestamps: true }
)

const Item = model('Item', itemSchema)

/////////////////////////////////
// Export our Model
/////////////////////////////////
module.exports = Item
