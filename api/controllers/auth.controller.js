import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import errorHandler from "../utils/error.js";

const signup = async (req, res, next) => {
    const { username, email, password } = req.body;
    if (!username ||!email ||!password ||username === "" ||email === "" ||password === "") {
        //return res.status(400).json({ message: "All field are required" });
        next(errorHandler(400, 'All field are required'))
    }

    const hashedpassword=bcryptjs.hashSync(password,10);

    const newUser = new User({
        username,
        email,
        password:hashedpassword,
    });

    try {
        const newuser = await newUser.save();

        res.status(200).json({
            sucesses: true,
            post: {
                newuser,
            },
            message: "signup sucessfully",
        });
    } catch (error) { 
       // res.status(500).json({message:error.message});
       next(error);

    }
};

export default signup;
