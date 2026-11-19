import genToken from "../config/token.js";
import User from "../models/user.model.js";

export const googleAuth = async (req, res) => {
    try {
        const {name, email} = req.body;
        //find user in database if not create new user and generate token
        let user = await User.findOne({ email });
        //create new user if not found
        if (!user) {
            user = new User({ name, email });   //data create hoga
            await user.save();  //save user in database
        }
        //generate token
        const token = await genToken(user._id);

        res.cookie("token", token, {
            httpOnly: true,
            secure: false,
            sameSite: "strict", // Set to true in production with HTTPS
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        });
        res.status(200).json(user);
    } catch (error) {
        console.error("Error in googleAuth:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

//logout user
export const logOut = async (req, res) => {
    try {
        await res.clearCookie("token");  
        return res.status(200).json({ message: "Logged out successfully" });
    } catch (error) {
        console.error("Error in logout:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}