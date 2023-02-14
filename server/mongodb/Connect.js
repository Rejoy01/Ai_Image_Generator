import mongoose from 'mongoose';


const ConnectDB = (url)=>{
    mongoose.set('strictQuery',true);

    mongoose.connect(url)
        .then(() => console.log('MongoDB Connected'))
        .catch((err)=> console.log(err ,"Not connected"))

}

export default ConnectDB;

