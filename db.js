import mongoose from "mongoose";
require('dotenv').config();

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true, 
  useFindAndModify: false,
  useUnifiedTopology: true
})
.catch(error => console.log(error))
.then(()=>console.log("✔ MongoDB is Connected"));

mongoose.connection.on('error', err => {
  logError(err);
});