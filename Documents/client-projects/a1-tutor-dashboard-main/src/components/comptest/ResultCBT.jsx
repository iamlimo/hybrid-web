import React from "react";
import { ReactComponent as Users } from "../../images/users.svg";
import image from "../../images/Exams-bro 1.svg";

const ResultCBT = () => {
  return (
    <div className="result-cbt">
      <div className="result-cbt-wrapper">
        <div className="result-cbt-content">
          <h1>CBT Results</h1>
          <p className="result-cbt-content-text">Course: ENGLISH LANGUAGE</p>
          <p>50 questions in all</p>
        </div>
        <div className="result-cbt-group">
          <div className="box-group">
            <div className="result-cbt-box">
              <div className="result-cbt-test">
                <div className="cbt-test-group">
                  <div className="cbt-svg">
                    <Users />
                  </div>
                  <p className="cbt-text">Average students score</p>
                </div>
                <h1>589</h1>
              </div>
            </div>
            <div className="result-cbt-box">
              <div className="result-cbt-test">
                <div className="cbt-test-group">
                  <div className="cbt-svg">
                    <Users />
                  </div>
                  <p className="cbt-text">Average students score</p>
                </div>
                <h1>589</h1>
              </div>
            </div>
            <div className="result-cbt-box">
              <div className="result-cbt-test">
                <div className="cbt-test-group">
                  <div className="cbt-svg">
                    <Users />
                  </div>
                  <p className="cbt-text">Average students score</p>
                </div>
                <h1>589</h1>
              </div>
            </div>
            <div className="result-cbt-box">
              <div className="result-cbt-test">
                <div className="cbt-test-group">
                  <div className="cbt-svg">
                    <Users />
                  </div>
                  <p className="cbt-text">Average students score</p>
                </div>
                <h1>589</h1>
              </div>
            </div>
            <div className="result-cbt-box">
              <div className="result-cbt-test">
                <div className="cbt-test-group">
                  <div className="cbt-svg">
                    <Users />
                  </div>
                  <p className="cbt-text">Average students score</p>
                </div>
                <h1>589</h1>
              </div>
            </div>
          </div>
          .
          <div className="result-cbt-img">
            <img src={image} alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultCBT;
