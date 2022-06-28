import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { useNavigate,useParams } from 'react-router-dom';

const Edit = () => {
    let navigate = useNavigate();
    const {id} = useParams();
    const[benz,setBenz] =useState(
        {
            name: "",
            Mobilenumber: "",
            email: "",  
            company: ""
        }
    );
    const{ name, Mobilenumber,email, company}=benz;
    const onInputChange = e =>{
        setBenz({...benz,[e.target.name]:e.target.value});
    };
    useEffect(()=>{
        madhu();
    },[]);
    const onSubmit=async e=>{
        e.preventDefault();
        await axios.put(`http://localhost:5000/clients/${id}`,benz);
        navigate("/");
    };
    const madhu = async () => {
        const result = await axios.get(`http://localhost:5000/clients/${id}`);
        setBenz(result.data);
      };
  return (
    <div className='container'>
        <div className="w-75 mx-auto shadow p-5">
            <h2 className="text-center mb-4">Edit a User</h2>
            <form  onSubmit={
                (e) => onSubmit(e)}>
            <div className="form-group">
                <input type="text" name="name" value={name} className='form-control form-control-lg' placeholder='Enter a Name' onChange={e => onInputChange(e)}/></div>
            <div className="form-group">
                <input type="text" name="Mobilenumber" value={Mobilenumber} className='form-control form-control-lg' placeholder='Enter a Mbl no' onChange={(e) => onInputChange(e)}/>
             </div>
             <div className="form-group">
            <input type="text" name="email" value={email} className='form-control form-control-lg' placeholder='Enter a email' onChange={(e) => onInputChange(e)}/>
            </div>
            <div className="form-group">
                <input type="text" name="company" value={company} className='form-control form-control-lg' placeholder='Enter a Company' onChange={(e) => onInputChange(e)}/> 
           </div>
           <button className='btn btn-primary'>Update</button>
            </form>
        </div>
    </div>
  );
};

export default Edit;