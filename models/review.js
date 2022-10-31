// import dependencies
const mongoose = require('./connection')

// import user model for populate
const User = require('./user')

// destructure the schema and model constructors from mongoose
// Nit: can remove unused `model`
const { Schema, model } = mongoose

const reviewSchema = new Schema(
	{
		title: { type: String, required: true },
		note: { type: String, required: true },
        stars: {
            type: Number, 
            required: true, 
            min: 0 , 
            max: 10
        },
		owner: {
			type: Schema.Types.ObjectID,
			ref: 'User',
		}
	},
	{ timestamps: true }
)

//If this needs to be a model, export as 'Review'
//const Review = model('Review', reviewSchema)

/////////////////////////////////
// Export our Model
/////////////////////////////////
module.exports = reviewSchema
