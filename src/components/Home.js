import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
const Home = () => {
    const [nme,setName] = useState([]);
    useEffect(()=>{
        narra();
    },[]);
    const narra =async()=>{
        const result = await axios.get("http://localhost:5000/clients");
        setName(result.data);
    }
    const Delete=async id=>{
        await axios.delete(`http://localhost:5000/clients/${id}`);
        narra();
    }
  return (
    <div>
        <div className='container'>
        <div className='py-4'>
          <h1>Home Page</h1>
          <table class="table border shadow">
            <thead class="thead">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Mobile Number</th>
                  <th scope="col">Email</th>
                  <th scope="col">Company</th>
                  <th scope='col'>Action</th>
                  </tr>
            </thead>
            <tbody>
                {nme.map((yad, index) => (
                  <tr>
                    <th scope="row">{index +1}</th>
                    <td>{yad.name}</td>
                    <td>{yad.Mobilenumber}</td>
                    <td>{yad.email}</td>
                    <td>{yad.company}</td>
                    <td>
                    <Link class="btn btn-primary" to={`/crud/${yad.id}`}>
                      View
                    </Link>
                    <Link
                     class="btn btn-outline-primary mx-2"
                      to={`/components/crud/edit/${yad.id}`}
                      >
                      Edit
                    </Link>
                    <Link to=""
                      class="btn btn-danger"
                      onClick={() => Delete(yad.id)}
                      >
                      Delete
                    </Link>
                    </td>
                  </tr>
                  ))}
            </tbody>
            </table>
            </div>
            </div>

    </div>
  )
}

export default Home