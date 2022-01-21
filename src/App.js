import './App.css';
import Sidebar from './components/Sidebar'
import Deshboard from './components/Deshboard'
import AllStudents from './components/AllStudents'
import AddStudents from './components/AddStudents'
import {BrowserRouter , Route, Routes} from 'react-router-dom'
import EditStudents from './components/EditStudents'
import {useState} from 'react'

function App() {
  let data = {
    Earnings:"40,000",
    Annual:"2,40,000",
    Tasks:20,
    Pending:26
  };

  let [students, setStudents] = useState([
    {
      name:"kiran",
      email:"kiran@gmail.com",
      mobile:"42345245",
      class :"b30wd"
    },
    {
      name:"raj",
      email:"raj@gmail.com",
      mobile:"423452454",
      class :"b30wd"
    },
    {
      name:"hemant",
      email:"hemant@gmail.com",
      mobile:"465445345245",
      class :"b30wd"
    } 
  ]);

  return ( <>
      <BrowserRouter>
        <div style={{display:"grid",gridTemplateColumns:"15% 85%"}}>
          <div>
            <Sidebar/>
          </div>
          <div>
            <Routes>
              <Route path="/deshboard" element={<Deshboard data= {data}/>}/>
              <Route path="/all-students" element={<AllStudents data = {{students,setStudents}}/>}/>
              <Route path="/add-students" element={<AddStudents data = {{students,setStudents}}/>}/>
              <Route path="/edit-students/:id" element={<EditStudents data = {{students,setStudents}}/>}/>
              <Route path="/" element={<Deshboard data= {data}/>}/>
            </Routes> 
          </div>
        </div>
      </BrowserRouter> 
    </> 
  );
}

export default App;
