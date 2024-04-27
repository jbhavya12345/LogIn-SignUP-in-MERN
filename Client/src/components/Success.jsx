import React, { useState } from 'react';

const Success = () => {
  const [passwordsState, setPasswords] = useState([]);

  const getPasswords = async () => {
    try {
      const req = await fetch('http://localhost:3001/', { method: "GET" });
      const passwords = await req.json();
      setPasswords(passwords)
    } catch (error) {
      console.error("Error fetching passwords:", error);
    }
  };

  return (
    <>
      <div>
        <button onClick={getPasswords}>Get Passwords</button>
          {passwordsState.map((pass, index)=>{
            return <li className='successContainer' key={index}><span>{pass.username}</span><span>{pass.pno}</span> <span>{pass.pass}</span></li>
          })}
      </div>
    </>
  );
};

export default Success;
