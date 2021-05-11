import React, { FC } from "react";
import LoginForm from "./components/LoginForm";
import LoginCreds from "./components/LoginCreds";

const App:FC = () => {
  return (
    <div style={{height:"100vh"}}>
      <LoginForm />
      <LoginCreds />
    </div>
  );
};

export default App;
