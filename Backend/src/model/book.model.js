import mongoose, { Schema } from "mongoose";

const bookSchema = new Schema({
    bookName: {
        type: String,
        required: [true, "Book Name is required."]
    },
    author: {
        type: String,
        required: [true, "Book Name is required."]
    },
    publishYear: {
        type: Number,
        required: [true, "Book Name is required."]
    }
},{timestamps: true});

export const Book = mongoose.model('Book', bookSchema)