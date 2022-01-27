import React, { useEffect, useContext, useState } from "react";
import { FetchContext } from "../../context/fetchContext";

const Subscription = () => {
  const authFetch = useContext(FetchContext);
  const [subscribe, setSubscribe] = useState();
  const [loading, setLoading] = useState(true);
  const { authAxios } = authFetch;

  const fetchSub = async (arg, arg2) => {
    try {
      const { data } = await authAxios.post("/subscription", {
        child_uuid: arg,
        parent_uuid: arg2,
      });
      console.log(data, "hell");
    } catch (error) {}
  };

  const fetchTesting = async () => {
    try {
      const { data } = await authAxios.get("/user/subscription");

      setSubscribe(data.data);
      setLoading(false);
    } catch (error) {}
  };
  useEffect(() => {
    fetchTesting();
  }, []);

  if (loading) return <h1>loading...</h1>;
  return (
    <div className="profile-form-wrapper">
      <div className="subscription">
        <div className="subscription-wrapper">
          <div className="subscription-content">
            <div className="subscription-text">
              <h3>Something for everyone</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis, lectus magna fringilla
                urna, porttitor
              </p>
            </div>
            <button className="subscription-text-btn">
              You have an active plan
            </button>
          </div>
          <div className="subscription-group">
            {subscribe?.map((list) => {
              return (
                <div key={list.uuid} className="subscription-box">
                  <div className="subscription-box-text">
                    <p>{list.subscription_name}</p>
                    <h1>
                      {list.plan.map((des) => {
                        console.log(des);
                        return (
                          <p
                            className="sub-bold"
                            key={des.uuid}
                            onClick={() => fetchSub(des.uuid, list.uuid)}
                          >
                            ₦{des.price_naira}/{des.subscription_name}
                          </p>
                        );
                      })}
                    </h1>
                  </div>
                  <ul className="subscription-list">
                    {list.subscription_description.map((des) => {
                      return (
                        <li key={des.description} className="subscription-item">
                          {des.description}
                        </li>
                      );
                    })}
                  </ul>
                  <button className="sub-btn">{list.subscription_name}</button>
                </div>
              );
            })}
            {/* <div className="subscription-box">
              <div className="subscription-box-text">
                <p>Standard plan</p>
                <h1>
                  <span className="sub-bold">₦500</span>/month
                </h1>
              </div>
              <ul className="subscription-list">
                <li className="subscription-item">
                  Lorem ipsum dolor sit amet, consectetur
                </li>
                <li className="subscription-item">
                  Lorem ipsum dolor sit amet, consectetur
                </li>
                <li className="subscription-item">
                  Lorem ipsum dolor sit amet, consectetur
                </li>
                <li className="subscription-item">
                  Lorem ipsum dolor sit amet, consectetur
                </li>
                <li className="subscription-item">
                  Lorem ipsum dolor sit amet, consectetur
                </li>
              </ul>
              <button className="sub-btn">Buy Standard</button>
            </div> */}
            {/* <div className="subscription-box">
              <div className="subscription-box-text">
                <p>Standard plan</p>
                <h1>
                  <span className="sub-bold">₦500</span>/month
                </h1>
              </div>
              <ul className="subscription-list">
                <li className="subscription-item">
                  Lorem ipsum dolor sit amet, consectetur
                </li>
                <li className="subscription-item">
                  Lorem ipsum dolor sit amet, consectetur
                </li>
                <li className="subscription-item">
                  Lorem ipsum dolor sit amet, consectetur
                </li>
                <li className="subscription-item">
                  Lorem ipsum dolor sit amet, consectetur
                </li>
                <li className="subscription-item">
                  Lorem ipsum dolor sit amet, consectetur
                </li>
              </ul>
              <button className="sub-btn">Buy Standard</button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
