const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const usersModel=require('./models/users.model')

const app = express();
app.use(cors());
app.use(express.json());


mongoose.connect("mongodb://127.0.0.1:27017/crud_mern")


app.get('/', (req,res) => {
	usersModel.find({})
	.then(users=> res.json(users))
	.catch(err => res.json(err))
})

app.get('/getUser/:id',(req,res) => {
	const id=req.params.id;
	usersModel.findById({_id:id})
	.then(users=> res.json(users))
	.catch(err => res.json(err))
})

app.put('/updateUser/:id',(req,res)=>{
	const id=req.params.id;
	usersModel.findByIdAndUpdate({_id:id},{name:req.body.name},{email:req.body.email},{age:req.body.age})
	.then(users=> res.json(users))
	.catch(err => res.json(err))
})

app.delete('/deleteUser/:id',(req,res)=>{
	const id=req.params.id;
	usersModel.findByIdAndDelete({_id:id})
	.then(users=> res.json(users))
	.catch(err => res.json(err))
})
app.post("/createUser",(req, res) => {
	usersModel.create(req.body)
	.then(users => res.json(users))
	.catch(err => res.json(err))
})

app.listen(3000,()=>{
	console.log("Server listening on port 3000")
})