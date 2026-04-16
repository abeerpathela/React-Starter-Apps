import './App.css'
import {useState} from 'react'
function App() {
  const [formData,setFormData]=useState({FirstName:"",LastName:"",Email:"",Country:"",StreetAddress:"",City:"",State:"",ZIP_code:"",Comments_Checked:false,Candidates_Checked:false,Offers_Checked:false,pushNotifications:""});
  function changeHandler(event){
    const {name,type,value,checked}=event.target;
    setFormData((prevFormData)=>{
      return{
        ...prevFormData,
        [name]: type ==="checkbox" ?  checked : value
      }
    })
  }
  function submitHandler(event){
  event.preventDefault();

  // Check if any required field is empty
  if (
    formData.FirstName.trim() === "" ||
    formData.LastName.trim() === "" ||
    formData.Email.trim() === "" ||
    formData.Country.trim() === "" ||
    formData.StreetAddress.trim() === "" ||
    formData.City.trim() === "" ||
    formData.State.trim() === "" ||
    formData.ZIP_code.trim() === ""
  ) {
    console.log("Kuch enter toh kar de!!");
  } 
  else {
    console.log("Finally Printing the form");
    console.log(formData);
  }
}
  console.log(formData);
  return (
    <div className="flex justify-center min-h-screen w-screen">
      <div className='border-2 border-solid border-gray-300  px-6 py-4 w-[660px] mt-4'>
      <form className="flex flex-col" onSubmit={submitHandler}>
          <label className='font-medium'>First name</label>
          <input type="text" name="FirstName" onChange={changeHandler} value={formData.FirstName} className='mt-2 border-2 border-solid border-grey-100 rounded-xs px-1 py-1' placeholder='Pranay' ></input>
          <label className='font-medium'>Last name</label>
          <input type="text" name="LastName" onChange={changeHandler} value={formData.LastName} className='mt-2 border-2 border-solid border-grey-100 rounded-xs px-1 py-1' placeholder='Gupta'></input>
          <label className='font-medium'>Email address</label>
          <input type="text" name="Email" onChange={changeHandler} value={formData.Email} className='mt-2 border-2 border-solid border-grey-100 rounded-xs px-1 py-1' placeholder='pgupta@duck.com'></input>
          <label className='font-medium'>Country</label>
          <input type="text" name="Country" onChange={changeHandler} value={formData.Country} className='mt-2 border-2 border-solid border-grey-100 rounded-xs px-1 py-1 font-black text-black' placeholder='INDIA'  ></input>
          <label className='font-medium'>Street address</label>
          <input type="text" name="StreetAddress" onChange={changeHandler} value={formData.StreetAddress} className='mt-2 border-2 border-solid border-grey-100 rounded-xs px-1 py-1' placeholder='1234 Main St' ></input>
          <label className='font-medium'>City</label>
          <input type="text" name="City" onChange={changeHandler} value={formData.City} className='mt-2 border-2 border-solid border-grey-100 rounded-xs px-1 py-1' placeholder='Asansol' ></input>
          <label className='font-medium'>State/ Province</label>
          <input type="text" name="State" onChange={changeHandler} value={formData.State} className='mt-2 border-2 border-solid border-grey-100 rounded-xs px-1 py-1' placeholder='West Bengal' ></input>
          <label className='font-medium'>ZIP/ Postal code</label>
          <input type="number" name="ZIP_code" onChange={changeHandler} value={formData.ZIP_code} className='mt-2 border-2 border-solid border-grey-100 rounded-xs px-1 py-1' placeholder='713301' ></input>
          <label className='font-medium'>By Email</label>
          <div>
          <div className="flex space-x-2 items-center">
            <input type="checkbox" name="Comments_Checked" onChange={changeHandler} id="Comments" checked={formData.Comments_Checked}></input>
            <label className="flex flex-col mt-5" htmlFor='Comments'> 
              <span className="font-bold">Comments</span>
              <span className='text-gray-500' >Get notified when someone posts a comment on a posting.</span>
            </label>
          </div>
          <div className="flex space-x-2 items-center">
            <input type="checkbox" name="Candidates_Checked" onChange={changeHandler} id="Candidates" checked={formData.Candidates_Checked}></input>
            <label className="flex flex-col mt-5" htmlFor='Candidates'> 
              <span className="font-bold">Candidates</span>
              <span className='text-gray-500'>Get notified when a candidate applies for a job.</span>
            </label>
          </div>
          <div className="flex space-x-2 items-center">
            <input type="checkbox" name="Offers_Checked" onChange={changeHandler} id="Offers" checked={formData.Offers_Checked}></input>
            <label className="flex flex-col mt-5" htmlFor='Offers'> 
              <span className="font-bold">Offers</span>
              <span className='text-gray-500'>Get notified when a candidate accepts or rejects a offer.</span>
            </label>
          </div>
          </div>

          <div className='flex flex-col'>
          <label className='mb-4 mt-4 '>
          <h1 className='font-bold'>Push Notifications</h1>
          <p className='text-gray-500'>These are delivered via SMS to your mobile phone.</p>
          </label>
          <div className='flex space-x-5'>
          <input type="radio" value="Everything" onChange={changeHandler} name="pushNotifications" id="EveryThing" checked={formData.pushNotifications==="Everything"} ></input>
          <label className="font-semibold">Everything</label>
          </div>
          <div className='flex space-x-5'>
          <input type="radio" value="Same as Email" onChange={changeHandler} name="pushNotifications" id="Same as Email" checked={formData.pushNotifications==="Same as Email"}></input>
          <label className="font-semibold">Same as Email</label>
          </div>
          <div className='flex space-x-5'>
          <input type="radio" value="No Push notifications" onChange={changeHandler} name="pushNotifications" id="No Push Notifications" checked={formData.pushNotifications==="No Push notifications"}></input>
          <label className="font-semibold">No Push notifications</label>
          </div>
          </div>
          <button className="px-4 py-2 bg-sky-500 text-white font-semibold h-10 w-20 mt-2">Save</button>
      </form>
      </div>
     
    </div>  
  )
}

export default App
