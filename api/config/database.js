import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const DBconnect = () => {
    mongoose.connect(process.env.DATABASE_URL)
        .then(() => {
            console.log("mongoDB commect sucessfully");
        })
        .catch((error) => {
            console.log(`mongoDB connection error ${error}`);
        });
};

export default DBconnect;    





