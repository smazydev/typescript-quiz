import React, { FC } from "react";

const LoginCreds: FC = () => {
  return (
    <div
      style={{ borderTop: "2px solid red", width: "300px", height: "300px" }}
    >
      <p>
        Hi there, if you're testing the application out, use the following
        credentials
      </p>
      <p>test:test123</p>
      <p>
        Just in-case if you're wondering, the authentication isn't handled by
        any server. Its just mimicking an authentication workflow.
      </p>
    </div>
  );
};

export default LoginCreds;
