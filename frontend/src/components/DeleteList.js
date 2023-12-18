import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useSnackbar } from "notistack";


const DeleteList = () => {
    const[loading,setLoading]=useState(false)
    const navigate=useNavigate();
    const{id}=useParams();
    const{enqueueSnackbar}=useSnackbar();
    const handleDeleteCandidature=()=>{
        setLoading(true);
        axios
         .delete(`http://localhost:8082/candidature/delete/${id}`)
         .then(()=>{
            loading(false);
            enqueueSnackbar("candidature deleted successfully", {variant:"sucess"} )
            navigate('/')
         })

         .catch((err)=>{
            setLoading(false);
         })
    }
    return (
        <React.Fragment>
          
            <button  onClick={handleDeleteCandidature}>

            {/* <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
       

        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary" >Yes I delete it</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div> */}
    Yes i delete it
                

            </button>
        </React.Fragment>
    );
};

export default DeleteList;