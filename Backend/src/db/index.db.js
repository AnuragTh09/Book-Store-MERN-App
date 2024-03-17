import mongoose from 'mongoose';
import  { DB_NAME} from "../constant.js"

const connectDB = async() => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`connected to ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("failed to connect")
        console.log(error)
        
    }
}

export default connectDB