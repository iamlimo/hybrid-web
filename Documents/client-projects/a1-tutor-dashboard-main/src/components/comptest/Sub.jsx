import React from "react";
import { ReactComponent as Clock } from "../../images/clock.svg";
import { ReactComponent as Help } from "../../images/help-circle.svg";
import { Link, useLocation } from "react-router-dom";

const Sub = () => {
  const location = useLocation();
  console.log(location.state);
  return (
    <section className="questions">
      <div className="questions-wrapper">
        <div className="questions-group">
          {location &&
            location.state((des) => {
              console.log(des);
              return (
                <div className="questions-box">
                  <h1 className="questions-title">
                    2016 WAEC ENGLISH LANGUAGE
                  </h1>
                  <p className="time-added">added 5 months ago</p>
                  <div className="questions-content">
                    <div className="questions-content-box">
                      <Clock />
                      <p className="questions-content-text">70 questions</p>
                    </div>
                    <div className="questions-content-box">
                      <Help />
                      <p className="questions-content-text">120 minutes</p>
                    </div>
                  </div>
                  <Link to={`/`} className="questions-content-btn">
                    Begin Test
                  </Link>
                </div>
              );
            })}
          {/* <div className="questions-box">
            <h1 className="questions-title">2016 WAEC ENGLISH LANGUAGE</h1>
            <p className="time-added">added 5 months ago</p>
            <div className="questions-content">
              <div className="questions-content-box">
                <Clock />
                <p className="questions-content-text">70 questions</p>
              </div>
              <div className="questions-content-box">
                <Help />
                <p className="questions-content-text">120 minutes</p>
              </div>
            </div>
            <Link to={`/`} className="questions-content-btn">
              Begin Test
            </Link>
          </div> */}
          {/* <div className="questions-box">
            <h1 className="questions-title">2016 WAEC ENGLISH LANGUAGE</h1>
            <p className="time-added">added 5 months ago</p>
            <div className="questions-content">
              <div className="questions-content-box">
                <Clock />
                <p className="questions-content-text">70 questions</p>
              </div>
              <div className="questions-content-box">
                <Help />
                <p className="questions-content-text">120 minutes</p>
              </div>
            </div>
            <Link to={`/`} className="questions-content-btn">
              Begin Test
            </Link>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Sub;
