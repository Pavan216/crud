import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Add = () => {
    const Navigate = useNavigate();
    const[bmw,setBmw] =useState(
        {
            name: "",
            Mobilenumber: "",
            email: "",  
            company: ""
        }
    )
    const{ name, Mobilenumber,email, company}=bmw;
    const onInputChange = e =>{
        setBmw({...bmw,[e.target.name]:e.target.value})
    }
    const onSubmithg=async e=>{
        e.preventDefault();
        await axios.post("http://localhost:5000/clients",bmw)
        Navigate("/");
        
    }
  return (
    <div className='container'>
        <div className="w-75 mx-auto shadow p-5 col-xs-6 col-5 card border shadow bg-secondary">
            <h2 className="text-center mb-4">Add a User</h2>
            <form  onSubmit={e => onSubmithg(e)}>
            <div className="form-group">
                <input type="text" name="name" value={name} className='form-control form-control-lg' placeholder='Enter a Name' onChange={e => onInputChange(e)}/></div>
            <div className="form-group">
                <input type="text" name="Mobilenumber" value={Mobilenumber} className='form-control form-control-lg' placeholder='Enter a Mbl no' onChange={e => onInputChange(e)}/>
             </div>
             <div className="form-group">
            <input type="text" name="email" value={email} className='form-control form-control-lg' placeholder='Enter a email' onChange={e => onInputChange(e)}/>
            </div>
            <div className="form-group">
                <input type="text" name="company" value={company} className='form-control form-control-lg' placeholder='Enter a Company' onChange={e => onInputChange(e)}/> 
           </div>
           <button className='btn btn-primary'>Add a User</button>
            </form>
        </div>
    </div>
  )
}

export default Add