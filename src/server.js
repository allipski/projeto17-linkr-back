import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import authRouter from './routers/authRouter.js'
import likeRouter from "./routers/likeRoutes.js"

dotenv.config();

const server = express();
server.use(express.json());
server.use(cors());

server.use(authRouter);
server.use(likeRouter);


server.listen(process.env.PORT,()=>{
    console.log(`Server listening on port ${process.env.PORT}`);
});
