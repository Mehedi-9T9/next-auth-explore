import mongoose from "mongoose"
export const connectDB = async () => {
    try {
        mongoose.connect("mongodb://localhost:27017/")
        console.log("database connect successfull");

    } catch (error) {
        console.log("database connect fail: ", error);

    }


}