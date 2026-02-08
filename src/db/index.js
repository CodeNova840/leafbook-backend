
import 'dotenv/config'
import mongoose from "mongoose";

// For testing, let's hardcode DB_NAME first
const DB_NAME = "leafbook";

const connectToMongo = async () => {
   try {
      console.log("=== Database Connection Debug ===");
      console.log("Working directory:", process.cwd());
      console.log("DB_NAME:", DB_NAME);
      
      // Get MONGO_URI from environment
      const mongoURI = process.env.MONGO_URI;
      console.log("MONGO_URI:", mongoURI ? "EXISTS" : "NULL/UNDEFINED");
      
      // List all environment variables for debugging
      // console.log("\nAll environment variables:");
      // Object.keys(process.env).forEach(key => {
      //    console.log(`  ${key}: ${process.env[key]}`);
      // });
      
      if (!mongoURI) {
         throw new Error("MONGO_URI is not defined. Check your .env file location and content!");
      }
      
      // Create connection string
      console.log("\nConnection string (masked):", 
                 mongoURI);
      
      // Connect to MongoDB
      const connectionInstance = await mongoose.connect(mongoURI);
      console.log(`\n✅ Connected to MongoDB!`);
      console.log(`Database: ${DB_NAME}`);
      
      return connectionInstance;
   } catch (error) {
      console.error("\n❌ MongoDB connection error:", error.message);
      console.error("Full error:", error);
      process.exit(1);
   }
}

export default connectToMongo;