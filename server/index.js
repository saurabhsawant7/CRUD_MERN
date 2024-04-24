const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const usersModel=require('./models/users.model')

const app = express();
app.use(cors(
	{
		origin:['https://crud-mern-frontend-steel.vercel.app'],
		method: ['POST','GET'],
		credentials:true
	}
));
app.use(express.json());


mongoose.connect("mongodb+srv://sawantsaurabh164:mongoo123@cluster0.uwp3p1l.mongodb.net/crud_mern?retryWrites=true&w=majority&appName=Cluster0")


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
