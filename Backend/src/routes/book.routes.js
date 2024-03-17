import {Router } from 'express';
import {deleteBook, updateBook, addBook, getBookById, getBooks } from '../controllers/book.controller.js'

const router =  Router();

router.get('/' , getBooks)
router.get('/:id', getBookById )
router.post('/', addBook)
router.put('/:id', updateBook)
router.delete('/:id', deleteBook)

export default router