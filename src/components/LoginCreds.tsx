import React, { FC } from "react";

const LoginCreds: FC = () => {
  return (
    <div
      style={{
        border: "2px solid red",
        width: "600px",
        height: "130px",
        padding: 10,
        position:"absolute",
        bottom: 20,
      }}
    >
      <p>
        Hi there, if you're testing the application out, use the following
        credentials:
      </p>
      <p style={{ marginTop: 20, fontWeight: 500 }}>test:test123</p>
      <p style={{ marginTop: 20 }}>
        Just in-case if you're wondering, the authentication isn't handled by
        any server. Its just mimicking an authentication workflow.
      </p>
    </div>
  );
};

export default LoginCreds;
