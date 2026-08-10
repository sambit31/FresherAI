import User from "../../services/auth/models/user.model";


export const getCurrentUser = async (req, res) => {
    try {
      res.status(200).json({success: true, user: req.user });
    } catch (error) {
        console.error("Error fetching user profile:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};