import React, { useContext } from "react";
import "./dashboard.css";
import { ReactComponent as Video } from "../../images/fluent_video-16-regular.svg";
import { ReactComponent as Quiz } from "../../images/fluent_quiz-new-24-regular.svg";
import video from "../../images/Rectangle 120.png";
import { ReactComponent as Star } from "../../images/star.svg";
import { Link } from "react-router-dom";
import Search from "./Search";
import { UserContext } from "../../context/userContext";

function Main() {
  const userFetch = useContext(UserContext);
  const { user } = userFetch;

  return (
    <section className="dashboard">
      <Search />
      <div className="dashboard-wrapper">
        <div className="dashboard-details">
          <div className="dashboard-name-details">
            <p className="welcome">Welcome back,</p>
            <h1 className="dashboard-name">{user ? user?.first_name : ""}</h1>
          </div>
          <div className="dashboard-group">
            <div className="dashboard-box">
              <div className="dashboard-box-img">
                <Video />
                <p>Watched Videos</p>
              </div>
              <h1 className="dashboard-number">34</h1>
              <div className=" rect rect1"></div>
              <div className=" rect rect2"></div>
            </div>
            <div className="dashboard-box">
              <div className="dashboard-box-img">
                <Video />
                <p>Completed Courses</p>
              </div>
              <h1 className="dashboard-number">23</h1>
              <div className=" rect rect1 danger"></div>
              <div className=" rect rect2 danger"></div>
            </div>
            <div className="dashboard-box">
              <div className="dashboard-box-img">
                <Quiz />
                <p>Quizes Participated</p>
              </div>
              <h1 className="dashboard-number">67</h1>
              <div className=" rect rect1 success"></div>
              <div className=" rect rect2 success"></div>
            </div>
            <div className="dashboard-box">
              <div className="dashboard-box-img">
                <Quiz />
                <p>CBTs Taken</p>
              </div>
              <h1 className="dashboard-number">11</h1>
              <div className=" rect rect1 teal"></div>
              <div className=" rect rect2 teal"></div>
            </div>
          </div>
        </div>
        <div className="dashboard-activity">
          <div className="recent-classes">
            <p className="dashboard-title">Recent classes</p>
            <div className="recent-classes-img">
              <img src={video} alt="video" />
              <div className="recent-classes-box">
                <p className="recent-classes-title">Video title</p>
                <p className="recent-classes-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam, purus sit amet luctus venenatis
                </p>
              </div>
            </div>
          </div>
          <div className="recent-forum">
            <p className="dashboard-title">Recent Forum Activity</p>
            <div className="recent-forum-box">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit
                ut aliquam
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit
                ut aliquam
              </p>
              <Link to="/forums" className="links-forum">
                Forums
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 18L15 12L9 6"
                    stroke="#F4F7FB"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
            <div className="recent-forum-blue">
              <div className="blue-underlay"></div>
              <div className="blue-box">
                <div className="blue-box-img">
                  <Star />
                </div>
                <p className="blue-box-text">
                  Premium Subscription <br /> package
                </p>
              </div>
              <Link to="/forum" className="links-forum">
                Manage Subscriptions
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 18L15 12L9 6"
                    stroke="#F4F7FB"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;
