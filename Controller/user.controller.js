import User from "../model/user.model.js";
import bcryptjs from 'bcryptjs';
export const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if user already exists
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }
       const ps= await bcryptjs.hash(password,10);
        // Create new user
        const createUser = new User({
            name,
            email,
            password:ps
        });

        // Save user to database
        await createUser.save();
        res.status(201).json({ message: "New user created successfully" });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const login=async(req,res)=>{
    try{
        const{email,password}=req.body;
        const user = await User.findOne({ email });
        const ismatch=await bcryptjs.compare(password,user.password);
        if(!ismatch||!user){
            res.status(500).json({message:"invalid user"});
        }
        else{
            res.status(200).json({message:"valid user"})
        }
    }
    catch(err){
        console.log(err);
        res.status(200).json({message:"internal error"});
    }
}