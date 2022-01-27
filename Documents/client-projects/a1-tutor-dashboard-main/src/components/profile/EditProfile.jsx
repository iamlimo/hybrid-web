import {useContext,useState,useEffect } from "react"

// import { publicFetch } from "../../utils/fetch";
import { AuthContext } from "../../context/authContext";
import { UserContext } from "../../context/userContext";
import axios from "axios"
import { toast, ToastContainer } from 'react-toastify';

const EditProfile = () => {


  const authContext = useContext(AuthContext);
  const userFetch = useContext(UserContext);
  const { user,loading,onUpdate } = userFetch;
  const [ levels, setLevels] = useState([])
  const [ loadings, setLoadings] =useState(false)
  const [userData , setUserData ] = useState({
    first_name:!loading ? user.first_name : "",
    last_name:!loading  ? user.last_name : "",
    email: !loading ? user.email: "",
    phone:!loading  ? user.phone : "",
    category:!loading ? user.category : "",
        
  });

  const {first_name,last_name,email,phone,category} = userData;


  

  const fetchLevels = async()=>{
      try {
        setLoadings(true)
        const res = await axios.get("https://api.a1tutor.org/v1/utility/category")
        console.log(res.data);
        setLevels(res.data.data)
        setLoadings(false)
      } catch (error) {
        console.log(error)
        setLoadings(true)
      }
  }

useEffect(()=>{
      fetchLevels()
},[])

  const onChange=(e)=>{
    setUserData({...userData,[e.target.name]:e.target.value})
  }

  const onSubmit =(e)=>{
    e.preventDefault();
    onUpdate(userData)
  
    toast.success(
      "hello you have succesfully updated your profile"
    );
    console.log(userData)
  }
  
  return (
    <div className="profile-form-wrapper">
      <form   onSubmit={onSubmit}>
        <div className="profile-form-box">
          <div className="profile-form-control">
            <label htmlFor="FirstName">First Name</label>
            <input type="text" value={first_name} onChange={onChange} name="first_name" />
          </div>
          <div className="profile-form-control">
            <label htmlFor="LastName">Last Name</label>
            <input type="text"  value={last_name} onChange={onChange} name="last_name" />
          </div>
        </div>
        <div className="profile-form-box">
          <div className="profile-form-control">
            <label htmlFor="Email">Email</label>
            <input type="email"  value={email} disabled name="email" />
          </div>
          <div className="profile-form-control">
            <label htmlFor="PhoneNumber">Phone Number</label>
            <input type="tel" value={phone} onChange={onChange} name="phone"  />
          </div>
          <div className="profile-form-control">
            <label htmlFor="selectedCategory">School</label>
            <input type="text" value={category} />
          </div>
        </div>
        <div className="profile-form-box">
       
          <div className="profile-form-control">
            <label htmlFor="FirstName">School level</label>
            <select required   >
              <option disabled > Choose a level </option>
              {
                loadings  || levels.length === 0 ? null : 
              levels.map( (level)=>
              <option key={level.id} value={level.id}   >{level.name}</option>
            
              )


              }
            </select>
          </div>
          <ToastContainer/>
        </div>
        <button className="profile-btn" type="submit" >Update</button>
      </form>
    </div>
  );
};

export default EditProfile;
