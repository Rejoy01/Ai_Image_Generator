// import libraries and packages we using

import express from "express";
import * as dotenv from 'dotenv'
import cors from 'cors'

import connectDB from "./mongodb/Connect.js";
import postRoutes from "./routes/postRoutes.js";
import dalleRoutes from "./routes/dalleRoutes.js";




//allow us to pool our environment variables from our dotenv file
dotenv.config();

const app = express();
//additional middleware
app.use(cors());
app.use(express.json({limit : '50mb'}));

app.use('/api/v1/post', postRoutes);
app.use('/api/v1/dalle', dalleRoutes);


//creating route
app.get('/',async(req,res)=>{
    res.send('Hello from Dall-E!')
})





const startServer = async () => {
    try {
      
      await connectDB(process.env.MONGODB_URL);
      app.listen(8080, () => console.log(`Server started on port 8080`));
    } catch (error) {
      console.log(error);
    }
  };
  
  startServer();