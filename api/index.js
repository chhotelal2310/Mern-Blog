import express from 'express';
import DBconnect from './config/database.js';

const app=express();

//Database Connection
DBconnect();




app.listen(process.env.PORT,()=>{
    console.log(`server run on the port ${process.env.PORT}`);
})

