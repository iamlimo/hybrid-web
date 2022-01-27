import React, { useState, useEffect, useContext } from "react";
import ReactStars from "react-rating-stars-component";
import { FetchContext } from "../../context/fetchContext";

const Enrolled = () => {
  const authFetch = useContext(FetchContext);
  const [enrolledCourses, setEnrolledCourses] = useState();
  const [loading, setLoading] = useState(true);
  const { authAxios } = authFetch;
  const fetchAllCourses = async () => {
    try {
      const { data } = await authAxios.get("user/courses");
      setEnrolledCourses(data.data);
      setLoading(false);
    } catch (error) {}
  };

  useEffect(() => {
    fetchAllCourses();
  }, []);

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  console.log();

  if (enrolledCourses && enrolledCourses.length === 0)
    return <h1>No courses</h1>;

  const enrolledSubject = enrolledCourses?.map((des) => {
    return (
      <div className="enrolled-box">
        <div className="enrolled-box-img"></div>
        <div className="enrolled-box-content">
          <p className="box-text">English Language</p>
          <div className="now-playing"></div>
          <div className="box-completed">
            <p>2% completed</p>
            <div className="rating">
              <ReactStars
                count={5}
                onChange={ratingChanged}
                size={15}
                activeColor="#DFB300"
              />
            </div>
          </div>
          <div className="box-info">
            <p className="more-info">more info</p>
            <button className="box-btn">
              <div className="triangle"></div>
              <p className="box-btn-text"> Resume</p>
            </button>
          </div>
        </div>
      </div>
    );
  });

  // if (enrolledSubject === []) return <h1>no courses</h1>;
  return (
    <div className="enrolled">
      <div className="enrolled-wrapper">
        <div className="enrolled-group">
          {enrolledCourses && enrolledSubject}
        </div>
      </div>
    </div>
  );
};

export default Enrolled;
