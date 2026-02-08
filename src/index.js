import dotenv from 'dotenv';

import {app} from "./app.js"
import connectToMongo from './db/index.js'


dotenv.config({ path: '../.env' });
const port = process.env.PORT || 8000;
connectToMongo()
.then(()=>{
  app.on("error", ()=>{
    console.log("ERROR", error);
  })
  app.listen(port, ()=>{
    console.log(`App listening on port: ${port}`)
  })
})
.catch((error)=>{
  console.error("Mongo db connection failed", error)
})