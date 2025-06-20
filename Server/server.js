import dotenv from "dotenv";
import express from "express";
import cors from "cors";
// import mongoose from "mongoose";

dotenv.config();
const app = express();
// Ensure process.env is defined for environments where 'process' may be undefined
// Suppress the warning about 'process' being undefined in some environments
if (typeof process === "undefined") {
    global.process = { env: {} };
}
const env = typeof process !== "undefined" && process.env ? process.env : {};
const port = env.PORT || 5000;

app.use(cors({
    origin: env.CLIENT_URL || "http://localhost:5173",
    credentials: true
}));
app.use(express.json());

const startServer = async () => {
    // mongoose.connect(env.MONGODB_URI, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // })
    // .then(() => {
    //     console.log("MongoDB connected");
    // })
    // .catch((err) => {
    //     console.error("MongoDB connection error:", err);
    // });

    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}

startServer();