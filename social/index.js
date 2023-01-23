const express=require("express");
const app=express();
const PORT=4000 || process.env.PORT;

app.get("/api/v1/insta",(req,res)=>{
    const instasocial={
        username:"surya",
        age:24,
        date:Date.now(),
    }
    res.status(200).json({instasocial});
});

app.get("/api/v1/linkedin",(req,res)=>{
    const instasocial={
        username:"surya",
        age:23,
        date:Date.now(),
    }
    res.status(200).json({instasocial});
});

app.get("/api/v1/:token",(req,res)=>{
   console.log(req.params.token);
   res.status(200).json({params:req.params.token})
})

app.listen(PORT,()=>{
    console.log(`server is running at ${PORT}`);
});