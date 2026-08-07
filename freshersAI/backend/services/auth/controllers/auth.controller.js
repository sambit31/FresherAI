import { app } from "../configs/firebase.js";
import { getAuth } from "firebase-admin/auth";
import User from "../models/user.model.js";

export const googleAuth = async (req, res) => {
    try {
        const { token } = req.body;

        const decoded = await getAuth(app).verifyIdToken(token);
        console.log("Decoded Token:", decoded);

        let user = await User.findOne({ firebaseId: decoded.uid });
        if (!user) {
            user = await User.create({
                firebaseId: decoded.uid,
                email: decoded.email,
                name: decoded.name
            });
        }

        const sessionToken = crypto.randomUUID();
        await redis.set(`session:${sessionToken}`, JSON.stringify({
            userId: user._id,
            name: user.name,
            email: user.email,
            interviewCoin: user.interviewCoin
        }), 'EX', 60 * 60 * 24 * 5); // 5 days expiration


        res.cookie("session", sessionToken, { httpOnly: true, secure: true, maxAge: 60 * 60 * 24 * 5 * 1000 }); // 5 days
        res.status(200).json({ user });
    } catch (err) {
        console.error("Error in googleAuth:", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
}



export const logout = async (req, res) => {
    try {
        const sessionToken = req.cookies?.session;
        if (sessionToken) {
            await redis.del(`session:${sessionToken}`);
        }
        res.clearCookie("session", {
            httpOnly: true,
            secure: false,
            sameSite: "strict"
        });
        res.status(200).json({ message: "Logged out successfully" });
    } catch (err) {
        console.error("Error in logout:", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
}