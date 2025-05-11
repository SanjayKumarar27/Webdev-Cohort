// // console.log(__dirname);

// const path=require("path");
// console.log(__dirname);

// console.log(path.join(__dirname,"/index.js"))

const {Command} = require('commander');
const fs=require("fs");

const program =new Command();

program.command("count")
        .description("Counts the number of words in the file")
        .argument('<file>','input text file')
        .action((file)=>{
            fs.readFile(file,"utf-8",(err,data)=>{
                if(err){
                    console.log(err);
                }else{
                    let words=data.trim().split(' ').length;
                    console.log("file has "+words+" words");
                }
            })
        });



program.parseAsync();
// // console.log(program);

