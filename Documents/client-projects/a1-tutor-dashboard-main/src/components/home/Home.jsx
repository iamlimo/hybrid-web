import React, { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const Home = () => {
  const authContext = useContext(AuthContext);
  return (
    <div>
      <h1>HOMe</h1>
    </div>
  );
};

export default Home;
