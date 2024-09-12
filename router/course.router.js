import express from 'express';
import getcourse from '../Controller/course.controller.js';

const courserouter = express.Router();

// Define the route and attach the handler
courserouter.get('/', getcourse);

export default courserouter;
