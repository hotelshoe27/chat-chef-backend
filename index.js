import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import path from "path";

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: true}));


// set env
const __dirname = path.resolve();
dotenv.config({ path: __dirname + "/.env" });

// test code
app.get('/test', async(req, res) => {
    // run code
    try {
        res.json({data: '비개발자를 위한 AI 서비스 개발 강의'});
        
    } catch (error) {
        console.log(error);
    }

});

// 1. get: Read
// 2. post: Create
// 3. update: Update
// 4. delete: Delete

app.listen('8080');