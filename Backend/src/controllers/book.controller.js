
import { Book } from "../model/book.model.js";

// Get all books
export const getBooks = async (req, res) => {
    try {
        const books = await Book.find({});
        res.status(200).json({
            success: true,
            message: "Books retrieved successfully",
            books: books
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Get a single book by ID
export const getBookById = async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findById(id);
        if (!book) {
            res.status(404).json({
                success: false,
                message: "Book not found"
            });
        } else {
            res.status(200).json({
                success: true,
                message: "Book retrieved successfully",
                book: book
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Add a new book
export const addBook = async (req, res) => {
    try {
        const newBook = await Book.create(req.body);
        res.status(201).json({
            success: true,
            message: "Book created successfully",
            book: newBook
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Update an existing book
export const updateBook = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedBook = await Book.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedBook) {
            res.status(404).json({
                success: false,
                message: "Book not found"
            });
        } else {
            res.status(200).json({
                success: true,
                message: "Book updated successfully",
                book: updatedBook
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Delete a book by ID
export const deleteBook = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedBook = await Book.findByIdAndDelete(id);
        if (!deletedBook) {
            res.status(404).json({
                success: false,
                message: "Book not found"
            });
        } else {
            res.status(200).json({
                success: true,
                message: "Book deleted successfully",
                book: deletedBook
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
