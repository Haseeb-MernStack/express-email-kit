import dotenv from "dotenv";
dotenv.config({quiet:true});

import app from "./app.js";

app.listen(process.env.PORT || 8000, ()=>{
    console.log("Email service running");    
})