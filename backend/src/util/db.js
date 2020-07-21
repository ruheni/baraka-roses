import mongoose from 'mongoose';

const mongodbUri = process.env.MONGO_URI

// mongoose connection
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useFindAndModify: false,
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        console.log(`MongoDB connected: ${conn.connection.host}`)
    } catch (error) {
        console.error(error);
        process.exit(1)
    }
}

export { connectDB }
