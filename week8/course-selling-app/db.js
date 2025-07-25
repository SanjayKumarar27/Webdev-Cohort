const mongoose=require("mongoose");

const Schema=mongoose.Schema;
const ObjectId=mongoose.Types.ObjectId;

const UserSchema=new Schema({
    email:{type:String,unique:true},
    password:String,
    firstName:String,
    lastName:String
})

const AdminSchema=new Schema({
    email:{type:String,unique:true},
    password:String,
    firstName:String,
    lastName:String
})

const CourseSchema=new Schema({
    title:String,
    description:String,
    price:Number,
    imageUrl:String,
    createrId:ObjectId
})

const PurchasesSchema=new Schema({
    courseId:ObjectId,
    userId:ObjectId
})
const UserModel=mongoose.model("user",UserSchema);
const AdminModel=mongoose.model("admin",AdminSchema);
const CourseModel=mongoose.model("course",CourseSchema);
const PurchaseModel=mongoose.model("purchase",PurchasesSchema);


module.exports=({
    UserModel,
    AdminModel,
    CourseModel,
    PurchaseModel
})