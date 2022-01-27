import React, { useState, useEffect, useContext } from "react";
import { FaComment } from "react-icons/fa";
import "./forums.css";
import ForumModal from "./ForumModal";
import { FetchContext } from "../../context/fetchContext";
import Moment from "moment"
import TextTruncate from "react-text-truncate";


const Forums = () => {
  const [openModal, setOpenModal] = useState(false);
  const authFetch = useContext(FetchContext);
  const [forum, setForum] = useState();
  const [loading, setLoading] = useState(true);
  const [listForum, setListForum] = useState();
  const [ id , setId] = useState("")
  const { authAxios } = authFetch;
  const [ forumUpdate, setForumUpdate] = useState()



  const fetchForum = async () => {
    try {
      const { data } = await authAxios.get(`/forum`);

      setForum(data.data);
      
    } catch (error) {
      console.log(error.response);
    }
  };

  const fetchAllCourses = async () => {
    try {
      const { data } = await authAxios.get("/courses");
      console.log(data.data);

      setListForum(data.data);
      setTimeout(() =>  setLoading(false), 5000);
    } catch (error) {}
  };
 
  const UpdateForum = async () => {
    try {
      const { data} = await authAxios.get(`/forum`);
      console.log(data.data);
      setForumUpdate(data.data);
     setLoading(false);
     ;
    } catch (error) {
      console.log("error");
    }
  };

  useEffect(() => {
    fetchAllCourses();
  }, []);
 useEffect(() => {
    UpdateForum();
  }, []);
  useEffect(() => {
    fetchForum();
  }, []);
 

console.log(forumUpdate);
// const truncate = (input) =>
// input?.length > 100 ? `${input.substring(0, 254)}...` : input;

  if (loading) return <h1>Loading....</h1>;
  return (
    <>
      {openModal && <ForumModal closeModal={setOpenModal} forums={listForum} />}
      <div className="forums">
        <div className="forums-wrapper">
          <div className="forums-btn-box">
            <div className="forums-select">
              <select value={id} onChange={(e)=>setId(e.target.value) } >
                <option value="">General</option>
                {listForum?.map((item) => {
                  return (
                    <option key={item.id} value={item.id}>
                      {item.title}
                    </option>
                  );
                })}
              </select>
            </div>
            <button
              onClick={() => setOpenModal(!openModal)}
              className="forums-btn"
            >
              <span className="forums-btn-desktop">Add new topic</span>
              <span className="forums-btn-mobile"> Add new topic </span>
            </button>
          </div>
              {forumUpdate.map((newUpdate)=>{
                return(
                  <div className="forums-box" key={newUpdate.slug}>
                  <div className="forums-box-img">
                    <img
                      src="https://via.placeholder.com/42x42"
                      alt=""
                      className="img-main1"
                    />
                  </div>
                  <div className="forums-box-content">
                    <p className="forum-header">
                      {newUpdate.title}
                    </p>
                    <div className="forums-sub-title">
                      <p>John Doe • {Moment(newUpdate.created_at).fromNow()}</p>
                      <div className="reply">
                        <FaComment /> {Moment(newUpdate.created_at).fromNow()}
                      </div>
                    </div>
                  </div>
                  <p className="forums-box-text">
                 
                    <TextTruncate
                    text= {newUpdate.body}
                         line={1}
                         truncateText="…"
                    textTruncateChild={<a href="#">Read on</a>}
                    />
                
                  </p>
                </div>
                )
              })}
  {/* {truncate(this.state.banners.overview)} */}
        </div>
      </div>
      {/* // forum end// */}
      <div>
      </div>
    </>
    
  );
};

export default Forums;
