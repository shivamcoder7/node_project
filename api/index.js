const express = require('express');
const PORT= 5050;

 const app= express();

 app.use(express.json());

 app.get('/', (req,res)=>{
    res.json({msg: 'success'})
 })


 app.listen(PORT, ()=>{
    console.log(`Server is listening at port ${PORT}`);
 })

