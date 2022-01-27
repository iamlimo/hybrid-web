import React from "react";
import { ReactComponent as Left } from "../../images/chevron-left.svg";
import { ReactComponent as Right } from "../../images/chevron-right (1).svg";

const QuestionModal = () => {
  return (
    <div className="questionmodal">
      <div className="questionmodal-group">
        <p className="">Question 1 of 20</p>
        <div className="questionmodal-rounded">
          <p>01:23:24</p>
        </div>
      </div>
      <p className="questionmodal-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
        purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor
      </p>
      <div className="questionmodal-wrapper">
        <div className="modal-answer">
          <div className="modal-circle">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.8573 4.35767L6.17872 11.0362L3.14301 8.00052"
                stroke="#F4F7FB"
                strokeWidth="1.21429"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <p>Answer option 1</p>
        </div>
        <div className="modal-answer">
          <div className="modal-circle">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.8573 4.35767L6.17872 11.0362L3.14301 8.00052"
                stroke="#F4F7FB"
                strokeWidth="1.21429"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <p>Answer option 1</p>
        </div>
        <div className="modal-answer">
          <div className="modal-circle">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.8573 4.35767L6.17872 11.0362L3.14301 8.00052"
                stroke="#F4F7FB"
                strokeWidth="1.21429"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <p>Answer option 1</p>
        </div>
        <div className="modal-answer">
          <div className="modal-circle">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.8573 4.35767L6.17872 11.0362L3.14301 8.00052"
                stroke="#F4F7FB"
                strokeWidth="1.21429"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <p>Answer option 1</p>
        </div>
      </div>
      <div className="questionmodal-group">
        <div className="modal-next">
          <Left />
          <p> Prev</p>
        </div>
        <div className="modal-next">
          <p>Next</p>
          <Right />
        </div>
      </div>
    </div>
  );
};

export default QuestionModal;
