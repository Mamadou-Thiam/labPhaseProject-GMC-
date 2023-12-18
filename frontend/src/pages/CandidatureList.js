import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table,Button } from "react-bootstrap";
import axios from "axios";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

const CandidatureList = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8082/candidature")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  // mapper pour afficher les données dans un tableau
  const arr = data.map((data, index) => {
    return (
      <tbody>
        <tr key={data._id}>
          <td>{index + 1}</td>
          <td>{data.firstName}</td>
          <td>{data.lastName}</td>
          <td>{data.cv}</td>
          <td> {data.motivation}</td>
          <td> {data.email}</td>
          <td> {data.telephone}</td>
          <td>
            {/* <div>
              <Link to={`/deleteCandidature/${data._id}`}>
                <VisibilityIcon />
              </Link>
            </div> */}
            <div >
              <Link to={`/candidature/delete/${data._id}`}>
                <DeleteIcon sx={{ color: "red"}}  />
              </Link>
              <Link to={`/candidature/show/${data._id}`}>
              <RemoveRedEyeIcon color="primary"/>
              </Link>
            </div>
          </td>
        </tr>
      </tbody>
    );
  });

  return (
    <>
      <Link to={`/`}>
        <Button type="submit" variant="" style={{margin:"20px"}}>
          <ArrowBackIcon />
        </Button>
      </Link>
      <div className="listStyle">
        <div>
          <h1>Candidature List</h1>
        </div>

        <div>
          <Table>
            <thead>
              <tr>
                <th>No</th>
                <th>firstName</th>
                <th>lastName</th>
                <th>cv</th>
                <th>motivation</th>
                <th>email</th>
                <th>telephone</th>
                <th>operations</th>
              </tr>
            </thead>

            {arr}
          </Table>
        </div>
      </div>
    </>
  );
};

export default CandidatureList;
