import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { AuthUserType, setUser, setAuth } from "../redux/auth-reducer";
import { RootState } from "../redux/redux-store";
import Header from "./Header";

class HeadersApiContainer extends React.Component<HeadersPropsType> {
  async componentDidMount() {
    const res = await axios.get("https://social-network.samuraijs.com/api/1.0/auth/me", {withCredentials: true})
    this.props.setUser(res.data.data)
    this.props.setAuth(true)
  }

  render() {
    return <Header setAuth={this.props.setAuth} authUser={this.props.user}/>
  }
}

const mapStateProps = (state: RootState):MapStatePropsType => ({
  user: state.authUser
})

const HeadersContainer = connect(mapStateProps, {setUser, setAuth})(HeadersApiContainer)

export default HeadersContainer

type MapStatePropsType = {
  user: AuthUserType
}
type MapDispatchPropsType = {
  setUser: (user: AuthUserType)=>void
  setAuth: (isAuth: boolean)=>void
}
type HeadersPropsType = MapStatePropsType & MapDispatchPropsType
