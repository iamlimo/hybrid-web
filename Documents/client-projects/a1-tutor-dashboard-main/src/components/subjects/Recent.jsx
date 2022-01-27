import React from "react";
import { ReactComponent as Download } from "../../images/download.svg";
import { ReactComponent as Chevron } from "../../images/chevron-right.svg";

function Recent() {
  return (
    <section className="recent">
      <div className="recent-wrapper">
        <div className="recent-group">
          <div className="recent-box">
            <div className="recent-box-grey"></div>
            <div className="recent-box-color">
              <div className="recent-blue">
                <p className="recent-blue-text">lesson note on</p>
                <h4 className="recent-blue-title">Subject name</h4>
                <div className="recent-blue-download">
                  <p className="recent-blue-download">Download now</p>
                  <div className="recent-svg">
                    <Download />
                  </div>
                </div>
              </div>
              <div className="recent-blue recent-pink">
                <p className="recent-blue-text">Quiz on</p>
                <p className="recent-blue-title">Subject name</p>
                <div className="recent-blue-download">
                  <p className="recent-blue-text">Test your understanding</p>
                  <div className="recent-svg">
                    <Chevron />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="recent-next-up">
            <p>next up</p>
            <div className="recent-next-group">
              <div className="recent-next-box"></div>
              <div className="recent-next-box"></div>
              <div className="recent-next-box"></div>
              <div className="recent-next-box"></div>
              <div className="recent-next-box"></div>
              <div className="recent-next-box"></div>
              <div className="recent-next-box"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Recent;
