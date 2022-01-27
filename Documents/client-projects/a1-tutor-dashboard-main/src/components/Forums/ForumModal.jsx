import React, { useContext,useState,useEffect } from "react";

import "./modal.css";
import { FetchContext } from "../../context/fetchContext";
import { UserContext} from '../../context/userContext'
import {AuthContext } from "../../context/authContext"
import { RiCloseLine } from "react-icons/ri";




function Modal({forums ,closeModal }) {


const userFetch = useContext(UserContext);
const {createGroup} = userFetch;
const [ titles , setTitles] = useState()
const [ messages, setMessages] = useState()

// const [forum, setForum] = useState();
// const [loading, setLoading] = useState(true);
const [ id , setId] = useState("")

  const createForum =  (e) => {
    e.preventDefault()
    
    const payload = {
			title:titles,
      body:messages,
      course_id: id ,
		};
    createGroup(payload)
    console.log(payload);
  
  };

  
  return (
    
    <div className="modalBackground">
      <div className="modalContainer">
        <h4>New Discussion Topic</h4>
     
        <div className="forums-selects" >
        <RiCloseLine style={{ marginBottom: "3px", width:"20px",height:"20px",backgroundColor:"black",color:"white",marginRight:"120px" }} onClick={() => closeModal(false)} />
                <select value={id} onChange={(e)=>setId(e.target.value) } >
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                {forums?.map((item) => {
                  return (
                    <option key={item.id} value={item.id}>
                      {item.title}
                    </option>
                  );
                })}
              </select>
              </div>
            <form  onSubmit={createForum} >
              <input
                className="modal-input"
                type="text"
                name="title"
                id="title"
                placeholder="Title"
               value={titles}
                onChange={(e)=>setTitles(e.target.value)}
              />
              <textarea
                className="modal-msg"
                name="body"
                id=""
                cols="30"
                rows="10"
                placeholder="Message"
                 value={messages}
                 onChange={(e)=>setMessages(e.target.value)}
              ></textarea>
               
              <button type="submit" className="modalBtn">
                Create Topic
              </button>
          
            </form>
       
      </div>
    </div>
  );
}

export default Modal;
