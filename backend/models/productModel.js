import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
    name: { type: String, required: true, unquie: true },
    image: { type: String, required: true },
    brand: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    countInStock: { type: Number, require: true },
    rating: { type: Number, require: true },
    numReviews: { type: Number, required: true }
}, {
    timestamps: true
})
const Product = mongoose.model('Product', productSchema)

export default Product