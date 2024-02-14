import React, { memo } from "react";

class LoginComp extends React.Component {
  render(): React.ReactNode {
    return (
      <div>
        LOGIN
      </div>
    );
  }
}

const Login = memo(LoginComp);

export default Login;
