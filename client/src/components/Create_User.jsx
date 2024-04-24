import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const Create_User = () => {


	const [name,setName]=useState()
	const [email,setEmail]=useState()
	const [age,setAge]=useState()

	const handleSubmit=(e) =>{
		e.preventDefault();
		axios.post('https://crud-mern-ten.vercel.app/createUser',{name,email,age})
		.then(result => {
			console.log(result)
			navigate('/')
		})
		.then(err => console.log(err))
	}

	const navigate=useNavigate()
  return (
	<div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
	  <div className='w-50 bg-white rounded p-3'>
	  	<form onSubmit={handleSubmit}>
		<h2>Add User</h2>
		  	<div className="mb-3">
				<label htmlFor="" className="form-label">Name</label>
				<input type="text" className="form-control" aria-describedby="emailHelp" onChange={(e)=>setName(e.target.value)}/>
				<div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
			</div>
			<div className="mb-3">
				<label htmlFor="" className="form-label">Email address</label>
				<input type="email" className="form-control" aria-describedby="emailHelp" onChange={(e)=>setEmail(e.target.value)}/>
				<div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
			</div>
			<div className="mb-3">
				<label htmlFor="" className="form-label">Age</label>
				<input type="number" className="form-control" onChange={(e)=>setAge(e.target.value)}/>
			</div>
			<button type="submit" className="btn btn-primary">Submit</button>
		</form>
	  </div>
	</div>
  )
}

export default Create_User
