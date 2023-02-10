const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const { homeRouter } = require("./routes/homeRouter");


// middleware for cross platform and for json data-
app.use(cors());
app.use(express.json());


// routes-
app.use("/", homeRouter);


// server-
app.listen(8080, async()=>{
    try
    {
        console.log(`Server is successfully running on ${process.env.port}`);
    }
    catch(error)
    {
        console.log(`error: ${error}`);
        console.log("Server is not connected");
    }
})