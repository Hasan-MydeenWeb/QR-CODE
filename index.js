// console.log("h1");


const express = require("express");
const app = express();
const path =require("path");
const ejs = require("ejs");
const qrcode =require("qrcode"); 
const { error } = require("console");

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"))
app.use(express.static("public"))

app.get("/",(req,res)=>{
res.render("index")
})

app.post('/scaner',(req,res)=>{
    let gettingbrowserdata = req.body.text;
    qrcode.toDataURL(gettingbrowserdata,(error,data)=>{

        res.render("scaner",{asan:data})  
    })
  

})


 

app.listen(10000,()=>{
console.log("port conected");

})
    