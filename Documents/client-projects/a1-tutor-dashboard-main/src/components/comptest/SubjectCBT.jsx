import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { FetchContext } from "../../context/fetchContext";

const SubjectCBT = () => {
  const fetchAuth = useContext(FetchContext);
  const { authAxios } = fetchAuth;
  const [allCbt, setAllCbt] = useState([]);
  const fetchCourse = async () => {
    try {
      const { data } = await authAxios.get(`cbt/category`);
      console.log(data.data);
      setAllCbt(data.data);
    } catch (error) {
      console.log(error.response);
    }
  };
  useEffect(() => {
    fetchCourse();
  }, []);

  return (
    <div className="subject-cbt">
      {allCbt?.map((des) => {
        const { sub_categories, id, category_title } = des;
        return (
          <div key={id} className="subject-cbt-group">
            <p className="subject-cbt-title">{category_title}</p>
            <div className="subject-cbt-div">
              {sub_categories.map((arg) => {
                const { category_title, id, quiz_categories } = arg;
                return (
                  <div key={id} className="subject-cbt-box">
                    <h3>{category_title.substring(0, 5)}</h3>
                    <Link
                      to={{
                        pathname: "/cbt/leaderboard",
                        state: quiz_categories, // your data array of objects
                      }}
                      className="subject-cbt-btn"
                    >
                      4674 questions
                    </Link>
                  </div>
                );
              })}
              {/* <div className="subject-cbt-box">
                <h3>neco</h3>
                <Link to={`/`} className="subject-cbt-btn">
                  4674 questions
                </Link>
              </div> */}
            </div>
          </div>
        );
      })}

      {/* <div className="subject-cbt-group">
        <p className="subject-cbt-title">English</p>
        <div className="subject-cbt-div">
          <div className="subject-cbt-box">
            <h3>neco</h3>
            <Link to={`/`} className="subject-cbt-btn">
              4674 questions
            </Link>
          </div>
          <div className="subject-cbt-box">
            <h3>neco</h3>
            <Link to={`/`} className="subject-cbt-btn">
              4674 questions
            </Link>
          </div>
          <div className="subject-cbt-box">
            <h3>neco</h3>
            <Link to={`/`} className="subject-cbt-btn">
              4674 questions
            </Link>
          </div>
          <div className="subject-cbt-box">
            <h3>neco</h3>
            <Link to={`/`} className="subject-cbt-btn">
              4674 questions
            </Link>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default SubjectCBT;
