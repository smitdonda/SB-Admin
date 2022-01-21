import React from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import {useNavigate} from 'react-router-dom'



function Allstudents(props) {

  
    let navigate = useNavigate();
    let handleDelete = (i)=>{
        let newArray = [...props.data.students]
        newArray.splice(i,1);
        props.data.setStudents(newArray)
    }
    return <>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Class</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.data.students.map((e,i) => {
                        return ( 
                            <tr key={i}>
                                <td>{i+1}</td>
                                <td>{e.name}</td>
                                <td>{e.email}</td>
                                <td>{e.mobile}</td>
                                <td>{e.class}</td>
                                <td><Button variant='danger' onClick ={()=>handleDelete(i)}>Delete</Button>
                                <span>&nbsp; &nbsp;</span>
                                <Button variant='primary' onClick={()=>{
                                            navigate(`/edit-students/` + i)
                                        }}>Edit</Button></td>            
                            </tr>
                        );
                    })
                }
            </tbody>
        </Table>
    </>
}

export default Allstudents


