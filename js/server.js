import express from 'express';
import cors from 'cors';
import reviews from './api/news.route.js';


const app=express();

app.use(cors());
app.use(express.json())
app.use("/api/v1/news")

app.use('*',(req ,res)=>res.status['404'].json({error:'Not Found'}))

export default app;