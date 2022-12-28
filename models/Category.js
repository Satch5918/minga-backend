import mongoose from "mongoose";


const categorySchema = new mongoose.Schema({
    name: {type: String, require: true},
    ranking: {type: Number} ,
    examples: [{type: String},],
    detail:   {type: String, require: true},
    user_id:   {type: String, require: true}
}, {timestamps: true})

export const Category =mongoose.model('category', categorySchema)