const express=require("express");
const mongoose=require("mongoose");
const {UserRouter}=require("./routes/user");
const {CourseRouter}=require("./routes/course");
const {AdminRouter}=require("./routes/admin");
require('dotenv').config();
const app=express();
app.use(express.json());

app.use("/api/v1/user",UserRouter);
app.use("/api/v1/admin",AdminRouter);
app.use("/api/v1/course",CourseRouter);

const mongourl=process.env.MONGODB_URL;
async function main(){
    await mongoose.connect(mongourl);
    app.listen(3000);

    console.log("Listening at port 3000");
}
main();
