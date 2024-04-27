import { useState, useRef } from "react";

const Login = () => {
  const loginCheck = async () => {
    if (pass.current.value.length == 0 || username.current.value.length == 0) {
      result.current.style.display = "block";
      setResultState("Fill inputs Correctly");
      setTimeout(() => {
        result.current.style.display = "none";
      }, 2500);
    } else {
      setVisibility(false);
      let fetchReq = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          username: username.current.value,
          pass: pass.current.value,
        }),
      });
      let data = await fetchReq.json();
      if (data == 0) {
        result.current.style.display = "block";
        setResultState("User not Found");
        setTimeout(() => {
          result.current.style.display = "none";
        }, 2500);
      } else {
        result.current.style.display = "block";
        result.current.style.backgroundColor = "green";
        setResultState("Success");
        setTimeout(() => {
          result.current.style.display = "none";
          window.location.href = "/success";
        }, 2000);
      }
    }
  };

  const username = useRef();
  const showPass = useRef();
  const pass = useRef();
  const result = useRef();
  const [Visibility, setVisibility] = useState(false);
  const [resultState, setResultState] = useState();

  return (
    <>
      <div className="loginContainer">
        <input
          ref={username}
          id="username"
          type="text"
          placeholder="Enter your UserName"
        />
        <input
          ref={pass}
          id="pass"
          type={Visibility ? "text" : "password"}
          placeholder="Enter your Password"
        />
        <div className="showPassDiv">
          <input
            ref={showPass}
            
            onChange={() => {
              setVisibility(!Visibility);
            }}
            type="checkbox"
          />
          <span>Show Password</span>
        </div>
        <input
          onClick={loginCheck}
          type="submit"
          value="Main Website Par Jao"
        />
      </div>
      <div ref={result} className="result">
        {resultState}
      </div>
    </>
  );
};

export default Login;
