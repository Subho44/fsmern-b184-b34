const express = require('express');
const app = express();

 const products = [
    {
        id:1,
        name:"laptop",
        price:67000,
    },
    {
        id:2,
        name:"tab",
        price:6700,
    },
    {
        id:3,
        name:"mobile",
        price:6700,
    },
    {
        id:4,
        name:"t-shirt",
        price:6700,
    },
];
//basic routing
app.get("/",(req,res)=>{
    res.send("backend work running");
});
app.get("/home",(req,res)=>{
    res.send("home page");
});
app.get("/about",(req,res)=>{
    res.send("about page");
});

app.get("/products",(req,res)=>{
    res.send(products);
});


//id wise search
app.get("/products/:id", (req,res)=>{
    //url thake id
    const productid = parseInt(req.params.id);
    //search
    const product = products.find(x=>{
        return x.id === productid;
    });

    res.json(product);
})


const port = 5600;
app.listen(port,()=>{
    console.log("server is running port 5600");
});