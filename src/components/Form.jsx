import React, { useState } from 'react'


// function Form() {

//     const firstName = useRef();
//     const lastName = useRef();
//     function handlesubmit(e){
//         e.preventDefault()
//         const fName=firstName.current.value;
//         const lName=lastName.current.value;
//         console.log(fName,lName)
//     }


//     // const secondref = useRef();


//     return (
//         <div>
//             <form action="" onSubmit={handlesubmit}>
//                 <label htmlFor="">Enter your name</label>
//                 <input type="text" className='bg-amber-100 p-2' ref={firstName} /><br/>
//                 {/* <button className='bg-red-400 text-blue-100 ' type='submit'>Submit</button> */}

//                 <label htmlFor="">Enter your Last name</label>
//                 <input type="text" className='bg-red-100 p-2' ref={lastName} />
//                 <button className='bg-red-400 text-blue-100 ' type='submit'>Submit</button>
//             </form>
//         </div>
//     )
// }

// export default Form



function Form() {
  // const [fName, setFName] = useState('');
  // const [lName, setLName] = useState('');
  const [data, setData] = useState({
    lName: "",
    fName: "",
    email: "",
  })

  function handleChange(event) {
    console.log(event)
    const{name,value}=event.target;
    setData({...data,[name]:value});
  }
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className='p-5'>
      <form onSubmit={handleSubmit}></form>
      <input type="text" value={data.fName} name='fName' className='bg-amber-200 m-2 p-3' onChange={handleChange} placeholder='Enter your firstname' /><br />
      <input type="text" value={data.lName} name='lName' className='bg-amber-200 p-3 m-2' onChange={handleChange} placeholder='Enter your lastname' /><br />
      <input type="text" value={data.email} name='email' className='bg-amber-200 p-3 m-2' onChange={handleChange} placeholder='Enter your email' /><br />
      <button type='submit' className='bg-red-600 text-2xl text-white p-2' >Submit me</button>

    </div>
  )
}

export default Form
