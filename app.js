import express from "express";
import mongoose from "mongoose";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import cors from "cors";
import {DATABASE, MAX_JSON_SIZE, PORT, REQUEST_NUM, REQUEST_TIME, URL_ENCODE, WEB_CACHE} from "./app/config/config.js";
import router from "./routes/api.js";

const app = express();
app.use(cors());
app.use(express.json({limit: MAX_JSON_SIZE}))
app.use(express.urlencoded({extended: URL_ENCODE}))
app.use(helmet());

// Limiter
const limiter = rateLimit({windowMs: REQUEST_TIME, max: REQUEST_NUM});
app.use(limiter)

// Caching
app.set('etag', WEB_CACHE)

// DB connection
mongoose.connect(DATABASE, {autoIndex: true}).then(()=>{
    console.log("Database connected")
}).catch((err)=>{
    console.log("Connection fail")
})

// Router
app.use("/api", router)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})