import React, { useContext } from 'react'
import store from './scomponent';
import { Link, useNavigate } from 'react-router-dom';
import Nav from './links';

function Student() {
  const ContextData = useContext(store);
  const Navi = useNavigate();
  console.log(ContextData);
  return (
   <><h1>
   <Nav></Nav></h1>
   <div className="sttop">
<nav className="addbt1">Students Details</nav> 
<nav className="addbt" onClick={() =>
         {Navi('/newstudent')}} >Add New Student</nav>
   </div>
   
    {/* <h1>Students Details </h1>
   <button onClick={() =>
         {Navi('/newstudent')}} >Add New Student</button> */}


 <table className="tableupdate" 

>
<span className="updateer">
 <tr  className="newwer">
 
     <td>Name</td>
     <td>Age </td>
     <td>Course </td>
     <td>Batch </td>
     <td>value</td>
     
 </tr> 
 </span>
 
    {ContextData.entries.map((item, index) =>
         {
          return (
        <>
            <tr className="updateer"    key={index}>
              <td>{item.name}</td>
              <td>{item.Age}</td>
              <td>{item.Course}</td>
              <td>{item.Batch}</td>
              <td> <Link to='/editstudent' state={{data: index}} >Edit</Link> </td>
            </tr>
            </>
          )
        })}
 
 </table>


   </>
  )
}

export default Student;