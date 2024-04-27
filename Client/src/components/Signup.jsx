import { useState, useRef } from "react";

const Login = () => {
  const username = useRef();
  const pno = useRef();
  const pass = useRef();
  const result = useRef();
  const [Visibility, setVisibility] = useState(false);
  const [resultState, setResultState] = useState();

  const handleAdd = async() =>{
    fetch('http://localhost:3001/signUp',{"method":'POST', headers:{'content-type':'application/json'},body: JSON.stringify({username:username.current.value, pno:pno.current.value, pass:pass.current.value})});

    username.current.value = ""
    pno.current.value = ""
    pass.current.value = ""
  }

  const handleSubmit = async() =>{
    if(username.current.value.length == 0  || pno.current.value.length != 10 || pass.current.value.length == 0){
      
      result.current.style.display = "block"
      setResultState('Fill All Inputs Correctly');
      
      setTimeout(() => {
        result.current.style.display = "none"
        
      }, 2000);

    } else{
      handleAdd()
    }
  }

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
          ref={pno}
          id="pno"
          type="number"
          placeholder="Enter your Phone Number"
        />
        <input
          ref={pass}
          id="pass"
          type={Visibility ? "text" : "password"}
          placeholder="Enter your Password"
        />
        <div className="showPassDiv">
          <input
            onClick={() => {
              setVisibility(!Visibility);
            }}
            type="checkbox"
          />
          <span>Show Password</span>
        </div>
        <input
        onClick={handleSubmit}
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
