import React, { useEffect, useState, useContext } from "react";
import ReactStars from "react-rating-stars-component";
import "./subjects.css";
import { FetchContext } from "../../context/fetchContext";
function All() {
  const ratingChanged = (newRating) => {};
  const authFetch = useContext(FetchContext);
  const [allCourses, setAllCourses] = useState();
  const [loading, setLoading] = useState(true);
  const { authAxios } = authFetch;
  const fetchAllCourses = async () => {
    try {
      const { data } = await authAxios.get("/courses");
      console.log(data.data);

      setAllCourses(data.data);
      setLoading(false);
    } catch (error) {}
  };

  useEffect(() => {
    fetchAllCourses();
  }, []);
  if (loading) return <h1>Loading....</h1>;
  return (
    <div className="enrolled">
      <div className="enrolled-wrapper">
        <div className="enrolled-group">
          {allCourses?.map((des) => {
            const { title, id, status } = des;
            return (
              <>
                <div key={id} className="enrolled-box">
                  <div className="enrolled-box-img enrolled-box-img-all "></div>
                  <div className="enrolled-box-content">
                    <p className="box-text">{title}</p>
                    <div className="now-playing"></div>
                    <div className="box-completed-recent">
                      <div className="rating">
                        <ReactStars
                          count={5}
                          onChange={ratingChanged}
                          size={15}
                          activeColor="#DFB300"
                        />
                      </div>
                      <p className="more-info">{status}</p>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default All;
