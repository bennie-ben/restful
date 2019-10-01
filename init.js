import app from "./app";
import "./db";
require('dotenv').config();

const PORT = process.env.PORT || 4000;

const handleListening = (error) =>{
  if(error)return console.log(error)
  return console.log(`✔ Listening On : http://localhost:${PORT}`)
}

// Connect Server 
app.listen(PORT, handleListening);
