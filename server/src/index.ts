import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import * as dyanmoose from "dynamoose";

import courseRoutes from "./routes/courseRoutes";

dotenv.config()

const isProduction = process.env.NODE_ENV ==="production";
if(!isProduction){
    dyanmoose.aws.ddb.local();
}

const app = express();

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());


app.get("/",(req,res)=>{
    res.send("Hello world");
});
app.use("/courses",courseRoutes)

const port = process.env.PORT || 3000;
if(!isProduction){
    app.listen(port,()=>{
        console.log(`Server running on port ${port}`);
    })
}

