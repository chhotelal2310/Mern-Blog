import express from 'express';
import DBconnect from './config/database.js';
import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.route.js'

const app=express();

//Database Connection
DBconnect();


//middleware
app.use(express.json());


app.listen(process.env.PORT,()=>{
    console.log(`server run on the port ${process.env.PORT}`);
})

app.use('/api/user',userRoutes);
app.use('/api/auth',authRoutes);

