import mongoose from 'mongoose'

const itemSchema = new mongoose.Schema({
    /*_id: {
        type: ObjectId,
        unique: true
    },*/
    title: String,
    imageURL: String
})

const Item = mongoose.model('Item', itemSchema)

export default Item