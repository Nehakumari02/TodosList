const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const todoModel=require('./Models/todolist')
const app=express()
app.use(cors(
    {
        origin: ["https://deploy-mern-frontend.vercel.app"],
        methods: ["GET", "POST","PUT"]
    }
))
app.use(express.json())
mongoose.connect('mongodb://127.0.0.1:27017/todo')
app.get('/Get',(req,res)=>{
    todoModel.find()
    .then(result=>res.json(result))
    .catch(err=>res.json(err))
})
app.post('/add',(req, res)=>{
    const task=req.body.task;
    todoModel.create({
        task: task,
        dd:1
    }).then(result=>res.json(result))
    .catch(err=>res.json(err))

})
app.put('/update/:id',(req,res)=>{
    const {id}=req.params;
    todoModel.findByIdAndUpdate({_id: id},{done :true})
    .then(result=>res.json(result))
    .catch(err=>res.json(err))
    console.log(id);
})
app.delete('/delete/:id',(req,res)=>{
    const {id}=req.params;
    todoModel.findByIdAndDelete({_id:id})
    .then(result=>res.json(result))
    .catch(err=>res.json(err))
    
})
app.listen(3003,()=>{
    console.log("server is running")
})
