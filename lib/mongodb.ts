import mongoose from 'mongoose';

const connectMongoDB= async()=>{

    try{
        const mongoUri = process.env.MONGO_URI || 'your_default_mongo_uri';
        await mongoose.connect(mongoUri);
        console.log('MongoDB connected');
    }

    catch(error)
    {
        console.log('MongoDB connection failed');
    }

}

export default connectMongoDB;