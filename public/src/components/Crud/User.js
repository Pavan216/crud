import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const User = () => {
  const [bad, setBad] = useState({
    name: "",
    Mobilenumber: "",
    email: "",
    company: ""
  });
  const { id } = useParams();
  useEffect(() => {
    goaod();
  })
  const goaod = async () => {
    const res = await axios.get(`http://localhost:5000/clients/${id}`);
    setBad(res.data)
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
      <h1 className="display-4">User Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">name: {bad.name}</li>
        <li className="list-group-item">Mobile Number: {bad.Mobilenumber}</li>
        <li className="list-group-item">email: {bad.email}</li>
        <li className="list-group-item">Company: {bad.company}</li>
      </ul>
    </div>
  );
};

export default User;