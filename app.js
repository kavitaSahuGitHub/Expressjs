 const express=require('express')
const path=require('path')
 const app=express()
 const PORT=3000;

 //end points/routes
 //http method - get , post, put, etc

 //app.anymethod(pathname,(req,res)=>{})

 app.get('/',(req,res)=>{
    res.send("Welcome to route URL of server- get")
 }
 )

 app.post('/',(req,res)=>{
    res.send("Welcome to route URL of server- post")
 }
 )

 app.get('/hello',(req,res)=>{
    res.set('content-type', 'text/html');
    res.status(200)
    res.send("<h1>Hello world </h1>")
 }
 )

 //how to send/handle data to server
 app.use(express.json())
app.post("/validateUser",(req,res)=>{
    console.log(req.body)
    const {userName,password}= req.body;
    if(userName==="Ramesh" && password==="ram123"){
        res.send("Login successfull...")
    }else{
        res.send("invalid cred")
    }
})

//sending files from server to client
app.get('/getImage',(req,res)=>{
res.send(path.join(__dirname,"Expimage.png"))
})

 app.listen(PORT,(error => {
if(!error)
{
    console.log("server successfully listening on the port 3000")
}
else{
    console.log("Error occoured , server can't start",error)
}
 }))