import React,{useState,useEffect} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";

const User = () => {

	const [users,setUser]=useState([]);

	const handleDelete=(id)=>{
		axios.delete("http://localhost:3000/deleteUser/"+id)
		.then(res=>{
			console.log(res)
		window.location.reload()})
		.catch(err=>console.log(err))
	}
	useEffect(()=>{
		axios.get('http://localhost:3000')
		.then(res=>setUser(res.data))
		.catch(err=>console.log(err))
	},[])
  return (
	<div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
	  <div className='w-50 bg-white rounded p-3'>
	  <Link to="/create" className="btn btn-success">Add +</Link>
	  	<table className="table">
			<thead>
				<tr>
					<th scope="col">Name</th>
					<th scope="col">Email</th>
					<th scope="col">Age</th>
					<th scope="col">Action</th>
				</tr>
			</thead>
			<tbody>
				{
					users.map((user,i)=>(
						<tr key={i}>
							<th scope="col">{user.name}</th>
							<th scope="col">{user.email}</th>
							<th scope="col">{user.age}</th>
							<th><Link to={`/update/${user._id}`}><button className="btn btn-success me-2">Edit</button></Link><button className="btn btn-danger" onClick={(e)=>{handleDelete(user._id)}}>Delete</button></th>
						</tr>
					))
				}
			</tbody>
		</table>
	  </div>
	</div>
  )
}

export default User
