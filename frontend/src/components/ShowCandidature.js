import { useState } from "react";
import { useParams } from "react-router-dom";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ShowCandidature(props) {
    const [data, setData] = useState({});
  
    const { id } = useParams();
    const navigate = useNavigate();
  
    useEffect(() => {
      axios
        .get(`http://localhost:8082/candidature/show/${id}`)
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => {
          console.log('Error from ShowBookDetails');
        });
    }, [id]);
    return (
      
       
        <>
        <Card style={{ width: '28rem' ,margin: "0 auto",marginTop:"9%" }}>
    
      <Card.Body>
        <Card.Title>{data._id}</Card.Title>
        <Card.Text>
        {data.firstName} <br />
        {data.lastName} <br />
        {data.telephone} <br />
        {data.email} <br />
        {data.motivation}
        </Card.Text>
       
      </Card.Body>
    </Card>
        {/* <h4>First-Name:{data.firstName}</h4>
        <h4>LastName:{data.lastName}</h4>
        <h4>email:{data.email}</h4> */}
        </>
      );
    }
    
    export default ShowCandidature;
    