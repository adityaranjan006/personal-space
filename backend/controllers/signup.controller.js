import {User} from "../models/user.models.js"

export const signup = async (req,res)=>{
    const data=req.body;

    try {
        const newUser= new User({
            username:data.username,
            email:data.email,
            password:data.password
        });
        
        await newUser.save();
        res.status(200).send({
            "Message":"User Registered Succesfully!!"
        });
    } catch (error) {
        console.log("Cannot Save",error);
    }
};