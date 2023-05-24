import React, { useContext } from 'react'
import store from './scomponent';
import { useNavigate } from 'react-router-dom';

function NewStudent() {
  const ContextData = useContext(store);
  const navi = useNavigate();
  const NewObj = {
    name: '',
    Age: '',
    Course: '',
    Batch: ''
  }

  const handleChange = (e) => {
    NewObj[e.target.name] = e.target.value;
    // console.log(NewObj);
  }

  const handleClick = () => {
    ContextData.entries.push(NewObj);
    // navi(-1)
    navi('/student')
    console.log(ContextData);
  }
  return (
    <><br></br><h1>Enter Student Details</h1>
     <div className='feild'>
          <fieldset><legend>Name:</legend>
      <input name='name' placeholder='Enter Name' onChange={handleChange} />
      </fieldset>
      <fieldset><legend>Age:</legend>
      <input name='Age' placeholder='Enter Age' onChange={handleChange} /> <br />
      </fieldset>
      <fieldset><legend>Course:</legend>
      <input name='Course' placeholder='Enter course' onChange={handleChange} />
      </fieldset>
      <fieldset><legend>Batch:</legend>
      <input name='Batch' placeholder='Enter batch' onChange={handleChange} /> <br/>
      </fieldset></div>

      <button onClick={handleClick}>Add Student</button>
 
    </>
  )
}

export default NewStudent;