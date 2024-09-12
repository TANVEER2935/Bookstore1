import express from 'express';
import getbook from '../Controller/book.controller.js';

const router = express.Router();

// Define the route and attach the handler
router.get('/', getbook);

export default router;
