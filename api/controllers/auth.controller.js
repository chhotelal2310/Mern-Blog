import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';

const signup = async (req, res) => {
    const { username, email, password } = req.body;
    if (!username ||!email ||!password ||username === "" ||email === "" ||password === "") {
        return res.status(400).json({ message: "All field are required" });
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
        res.status(500).json({message:error.message});

    }
};

export default signup;
