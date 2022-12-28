import axios from "axios";
import React, { useState } from "react";
import swal from "sweetalert";

const MySqlLogin = () => {
  const [data, setData] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async (e) => {
    e.preventDefault();
    let resValue;
    await axios
      .post(`http://localhost:5000/login`, {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response);
        setData(response.data);
        resValue = response.data;
      });

    console.log(resValue.status);
    if (resValue.status === 200) {
      localStorage.setItem("userID", resValue.data.id);
      console.log(resValue.data.id);

      localStorage.setItem("userInfo", JSON.stringify(resValue.data));
    } else {
      // Failed Message
      swal({
        text: "Email Or Password Is Incorrect",
        title: "Login Failed",
        icon: "error",
      });
    }
  };
  return (
    <div>
      {data.message}
      <form>
        email:
        <input
          value={email}
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        password:
        <input
          value={password}
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={(e) => login(e)}> login</button>
      </form>
    </div>
  );
};

export default MySqlLogin;
