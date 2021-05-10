import React, { FC } from "react";

//Yes, I know I could've gone for the styled-components route but I already
// had started to write in-line styles, so you get this abnormality. I do like
// to keep styles completely seperate. Forgive me for this T_T 

const LoginForm: FC = () => {
  return (
    <div
      style={{
        height: "500px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Login to start the quiz friend!</h1>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <label style={{ marginTop: "20px" }}>
          Name:
          <input style={{ marginLeft: "30px" }} type="text" name="name" />
        </label>
        <label style={{ marginTop: "20px" }}>
          Password:
          <input
            style={{ marginLeft: "5px" }}
            type="password"
            name="password"
          />
        </label>
        <button
          style={{ width: "125px", height: "40px", marginTop: "20px" }}
          type="submit"
        >
          login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
