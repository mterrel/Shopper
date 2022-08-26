import mongoose from "mongoose";

const dbUri = process.env.URI || process.env.DATABASE_URL;

export const connectDb = async () => {
   try {
     const conn = await  mongoose.connect(dbUri,{
                useUnifiedTopology: true,
                useNewUrlParser: true,
                // useCreateIndex: true
                
     })
       console.log(`connected on ${conn.connection.host}`)
   } catch (error) {
       console.error(error.message)
       process.exit(1)
   }
}