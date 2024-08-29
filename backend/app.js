import express from 'express'
import userRouter from './routes/signup.routes.js';
import cors from 'cors'

const app=express();

//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());






//Testing Using Router from express and making routes in Router Folder!!
app.use("/",userRouter);

//Testing Purpose API End Points
app.get("/helloworld",(req,res)=>{
    res.status(200).send({
        "Message":"Hello Duniya Server is zinda",
    })
});
//Testing Purpose API End Points
app.post("/api/user/register",(req,res)=>{
    const data=req.body;
    console.log(data);
    res.status(200).send({
        "Message":"User data send successfully"
    })
})



export default app;