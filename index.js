const express = require('express');
const app = express();
const port = 3125;
const bodyParser = require("body-parser");
const adminRouter =require("./routes/admin");
const userRouter = require("./routes/user");
 
app.use(bodyParser.json());
app.use("/admin" , adminRouter);
app.use("/user" , userRouter);


app.get("/",(req,res)=>{

    res.send("Hello world from express server");

})

app.listen(port, ()=>{

    console.log(`server is listening on port ${port}`)
});
