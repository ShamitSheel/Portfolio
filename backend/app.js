import express from "express";
import dotenv from "dotenv"
import cors from "cors"
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import dbConnection from "./database/dbConnection.js";


dotenv.config({path: "./config/config.env"});

console.log(process.env.PORT)
const app=express();

app.use(cors({
    origin:[process.env.PORTFOLIO_URL, process.env.DASHBOARD_URL],
    methods: ["GET","POST","DELETE","PUT"],
    credentials: true,
})
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended:true}));

app.use(
    fileUpload({
        useTempFiles: true,
        tempFileDir: "/tmp/",
    })
);

dbConnection();

export default app;
