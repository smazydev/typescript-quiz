import React, { FC } from "react";
//Components Imports
import LoginForm from "./components/LoginForm";
import LoginCreds from "./components/LoginCreds";
import QuizPage from "./components/QuizPage";
//React Router Imports
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";


const App:FC = () => {
  return (
    <div style={{height:"100vh"}}>
      <LoginForm />
      <LoginCreds />
      <QuizPage />
    </div>
  );
};

export default App;
