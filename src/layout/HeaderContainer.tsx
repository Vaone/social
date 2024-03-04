import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { T_AuthResponseData } from "../api/Api";
import {
  AuthUserType,
  setUser,
  setAuth,
  getAuthTC,
} from "../redux/auth-reducer";
import { RootState } from "../redux/redux-store";
import Header from "./Header";

// class HeadersApiContainer extends React.Component<HeadersPropsType> {
//   componentDidMount() {
//     this.props.getAuthTC();
//   }

//   render() {
//     return <Header setAuth={this.props.setAuth} authUser={this.props.user} />;
//   }
// }

const mapStateProps = (state: RootState): MapStatePropsType => ({
  user: state.authUser,
});

const HeadersContainer = compose<React.ComponentType>(
  connect(mapStateProps, { setUser, setAuth })
)(Header);

export default HeadersContainer

type MapStatePropsType = {
  user: AuthUserType;
};
type MapDispatchPropsType = {
  setUser: (user: T_AuthResponseData) => void;
  setAuth: (isAuth: boolean) => void;
  // getAuthTC: () => void;
};
export type HeadersPropsType = MapStatePropsType & MapDispatchPropsType;
