import React, { ComponentType } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { RootState } from "../redux/redux-store";


const mapStateToProps = (state: RootState): MapStateToPropsType => ({
  isAuth: state.authUser.isAuth,
});

export function redirectAuth<T>(Component: ComponentType<T>) {
  class AuthRedirect extends React.Component<MapStateToPropsType> {
    render(): React.ReactNode {
      const { isAuth, ...rest } = this.props;
      return isAuth ? <Component {...(rest as T)} /> : <Redirect to="/login" />;
    }
  }
  // HOC to add state from redux
  const AuthRedirectContainer = connect(mapStateToProps)(AuthRedirect);

  return AuthRedirectContainer;
}

type MapStateToPropsType = {
  isAuth: boolean;
};
