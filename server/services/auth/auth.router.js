import Router from 'express';
import { login, register, updateUserController } from './auth.controller.js';

import { upload } from '../../globals.js';
const authRouter = Router();

authRouter
    .post('/login', login)
    .post('/register', upload.single('file'), register)
    .put('/update', upload.single('file'), updateUserController); 


export default authRouter;

/*
    Model --> Functions & Data
    View --> React
    Controller --> Router + Controller
*/
