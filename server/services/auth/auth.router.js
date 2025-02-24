import Router from 'express';
import { login, register } from './auth.controller.js';
import { upload } from '../../globals.js';
const authRouter = Router();

authRouter
    .post('/login', login)
    .post('/register', upload.single('file'), (req, res, next) => { 
        console.log("📥 Received request to /register");
        next(); // מעביר הלאה לפונקציה register
    }, register);

export default authRouter;

/*
    Model --> Functions & Data
    View --> React
    Controller --> Router + Controller
*/
