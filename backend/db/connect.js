import mongoose from 'mongoose'

const ConnectDB = async()=>{
    try {
        const connecting = await mongoose.connect(`${process.env.URI}`)
        console.log("Connection with Database Established!!");
    } catch (error) {
        console.log("Error in connecting to Database ",error);
        process.exit(1);
    }
}

export default ConnectDB;