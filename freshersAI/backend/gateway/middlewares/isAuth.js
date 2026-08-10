import redis from "../../shared/redis/redis.js";


export const isAuth = async(req, res, next) => {
    try {
        const token = req.cookies?.token;
        if (!token) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        const sessionData = await redis.get(`session:${token}`);
        if (!sessionData) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        req.user = JSON.parse(sessionData);
        next();
    } catch (error) {
        console.error("Authentication error:", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};