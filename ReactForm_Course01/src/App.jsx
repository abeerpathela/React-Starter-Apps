import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [firstName,setFirstName]=useState("");
  // const [lastName,setLastName]=useState("");
  // function changeHandlerForFirstName(event){
  //   setFirstName(event.target.value);
  //   console.log(firstName);
  // }
  // function changeHandlerForLastName(event){
  //   setLastName(event.target.value);
  // }
  const [formData,setFormData]=useState({firstName:"",lastName:"",email:"",description:"",isVisible:false,mode:"",favCar:""});
  function changeHandler(event){
    const {name,value,checked,type}=event.target;
    setFormData((prevFormData)=>{
      return {
        ...prevFormData,
        [name]: type==="checkbox" ? checked : value              // this line is important as it saves the value which is entered in the field  
      }
    })
  }
  function submitHandler(event){
    event.preventDefault();
    console.log("Finally printing the form data :");
    console.log(formData);
  }
  console.log(formData);
  return (
    <div className="flex justify-center items-center h-screen w-full bg-gray-400">
      <form onSubmit={submitHandler} className='flex flex-col justify-center items-center max-w-[620px] border-2 border-solid border-black py-4 px-4 bg-white'>
        <label className="text-fuchsia-600">First Name</label>
        <input type="text" placeholder='Enter your first Name' className='m-auto' onChange={changeHandler} name="firstName" value={formData.firstName}></input>
        <label className="text-fuchsia-600">Last Name</label>
        <input type="text" placeholder='Enter your last Name' onChange={changeHandler} name="lastName" value={formData.lastName}></input>
        <label className="text-fuchsia-600">Email</label>
        <input type="email" placeholder='abc@gmail.com' onChange={changeHandler} name="email" value={formData.email}></input>
        <label className="text-fuchsia-600">Description</label>
        <textarea placeholder="Enter text here" onChange={changeHandler} name="description" value={formData.description}></textarea>
        <label className="text-fuchsia-600" htmlFor='isVisible'>isVisible</label>
        <input type="checkbox" onChange={changeHandler} name="isVisible" id="isVisible" checked={formData.isVisible}></input>
        <fieldset className='border-2 border-fuchsia-600 p-3 rounded-md'>
          <legend>Mode:</legend>
          <label className="text-fuchsia-600" >Select a mode: </label>
          <input type="radio" onChange={changeHandler} name="mode" value="Online" id="Online-mode" checked={formData.mode === "Online"}></input>
          <label htmlFor='Online-mode'>Online</label>
          <input type="radio" onChange={changeHandler} name="mode" value="Offline" id="Offline-mode" checked={formData.mode === "Offline"}></input>
          <label htmlFor='Offline-mode'>Offline</label>
        </fieldset>
        <label className="text-fuchsia-600">Select Your Fav Car: </label>
        <select onChange={changeHandler} name="favCar" id="favCar" value={formData.favCar}>
          <option value="Scorpio">Scorpio</option>
          <option value="Thar">Thar</option>
          <option value="Fortuner">Fortuner</option>
          <option value="Maruti-800">Maruti-800</option>
        </select>
        <button className="rounded-2xl text-xl bg-green-400 border-2 border-solid border-b-fuchsia-300 px-8 py-2 mt-4">Submit</button>
        

      </form>
    </div>
  )
}

export default App
