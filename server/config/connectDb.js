import mongoose from "mongoose"

const connectDB = async () =>{
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log("database connected")

    }catch(err){
        console.log(`database error ${err}`)
    }
}

export default connectDB