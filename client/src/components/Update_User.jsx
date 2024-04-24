import React,{useState,useEffect} from 'react'
import { useParams,useNavigate }  from 'react-router-dom';
import axios from 'axios';
const Update_User = () => {

	const{id}=useParams();
	const [name,setName]=useState()
	const [email,setEmail]=useState()
	const [age,setAge]=useState()
	const navigate=useNavigate();

	const handleUpdate=(e)=>{
		e.preventDefault();
		axios.put('http://localhost:3000/updateUser/'+id,{name,email,age})
		.then(result => {
			console.log(result)
			navigate('/')
		})
		.then(err => console.log(err))

	}
	useEffect(()=>{
		axios.get('http://localhost:3000/getUser/'+id)
		.then(res=>{
			setName(res.data.name)
			setEmail(res.data.email)
			setAge(res.data.age)
		})
		.catch(err=>console.log(err))
	},[])
  return (
	<div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
	  <div className='w-50 bg-white rounded p-3'>
	  	<form onSubmit={handleUpdate}>
		<h2>Update User</h2>
		  	<div className="mb-3">
				<label htmlFor="" className="form-label">Name</label>
				<input type="text" className="form-control" aria-describedby="emailHelp" value={name} onChange={(e)=>setName(e.target.value)}/>
				<div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
			</div>
			<div className="mb-3">
				<label htmlFor="" className="form-label">Email address</label>
				<input type="email" className="form-control" aria-describedby="emailHelp" value={email} onChange={(e)=>setEmail(e.target.value)}/>
				<div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
			</div>
			<div className="mb-3">
				<label htmlFor="" className="form-label">Age</label>
				<input type="number" className="form-control" value={age} onChange={(e)=>setAge(e.target.value)}/>
			</div>
			<button type="submit" className="btn btn-primary">Submit</button>
		</form>
	  </div>
	</div>
  )
}

export default Update_User
