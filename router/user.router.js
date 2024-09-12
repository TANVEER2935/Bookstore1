import express from 'express';
import {login, signup} from '../Controller/user.controller.js';
const userrouter=express.Router();
const userrouter1=express.Router();

userrouter.post('/',signup);
userrouter1.post('/',login);

export default userrouter;
export {userrouter1};