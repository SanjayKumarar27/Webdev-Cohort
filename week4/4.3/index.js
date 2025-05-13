const express=require("express");
const app=express();

let users=[{
    name:"sanjay",
    kidneys:[{
        healthy:false
}]
}]


//in get request we send data through query parameters
app.get("/",(req,res)=>{
    let johnkidney=users[0].kidneys;
    let numofkidney=johnkidney.length;
    let numofhealthykidney=0;
    for(let i=0;i<johnkidney.length;i++){
        if(johnkidney[i].healthy){
            numofhealthykidney++;
        }
    }
    const numberofunhealthykidneys=numofkidney-numofhealthykidney;
    res.json({
        numofkidney,
        numofhealthykidney,
        numberofunhealthykidneys
    });
})


app.use(express.json());
//in post request we send data through body 
app.post("/",(req,res)=>{
    const isHealthy=req.body.isHealthy;
    users[0].kidneys.push({
        healthy:isHealthy
})
res.json({
    msg:"Done"
})
})

app.put("/",(req,res)=>{
    for(let i=0;i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy=true;
    }
    res.json({});
})

app.delete("/",(req,res)=>{
    if(isthereatleatunhealthykidney()){
        let newkidneys=[];
        for(let i=0;i<users[0].kidneys.length;i++){
            if(users[0].kidneys[i].healthy){
                newkidneys.push({
                    healthy:true
                })
            }
        }
        users[0].kidneys=newkidneys;

        res.json({msg:"done"});
    }else{
        res.status(411).json({
            msg:"You have no unhealthy kidneys"
        })
    }
})
function isthereatleatunhealthykidney(){
    let isthereatleatunhealthy=false;
    for(let i=0;i<users[0].kidneys.length;i++){
        if(users[0].kidneys[i].healthy===false){
            isthereatleatunhealthy=true;
        }
    }
    return isthereatleatunhealthy;

}
app.listen(3000);