import React,{useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom';

function Addstudents(props) { 

    let navigate = useNavigate();
    let [name,setName] = useState("");
    let [email,setEmail] = useState("");
    let [mobile,setMobile] = useState("");
    let [cls,setCls] = useState(""); 

    let handleSubmit = () =>{
        let newData = {name,email,mobile,"class":cls};
        let newArray = [...props.data.students];
        newArray.push(newData);
        props.data.setStudents(newArray)

        navigate("/all-students")    

    } 

    return (
        <Form>
            <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label> 
                    <Form.Control value={name} type="text" placeholder="Name" onChange={(e)=>setName(e.target.value)}/>
                </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control value={email} type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Mobile</Form.Label>
                <Form.Control value={mobile} type="text" placeholder="Mobile" onChange={(e)=>setMobile(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>class</Form.Label>
                <Form.Control value={cls} type="text" placeholder="Class" onChange={(e)=>setCls(e.target.value)}/>
            </Form.Group>
            <Button variant="primary" onClick={handleSubmit}>
                Submit
            </Button>
        </Form>
    )
}

export default Addstudents
