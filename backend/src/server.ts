import dotenv from 'dotenv';
dotenv.config();
import path from 'path';
import express from "express";
import cors from "cors";
import foodRouter from './routers/food.router';
import userRouter from './routers/user.router';
import orderRouter from './routers/order.router';
import { connectDB } from './configs/database.config';
const app = express();
app.use(express.json());
// app.use(cors());
app.use(cors({
    credentials:true,
    origin:["https://shrishyamtraders.onrender.com/",]
}));

app.use("/api/foods", foodRouter);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);

app.use(express.static('public'));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname,'public', 'index.html'))
})

const port = process.env.PORT || 5000;


const start = async () => {
    app.listen(port, () => {
        console.log("Website served on http://localhost:" + port);
    })
    await connectDB(process.env.MONGODB_URI!)
}
start()