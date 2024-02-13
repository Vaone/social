import React from "react";
import { connect } from "react-redux";
import { getProfileTC } from "../../redux/profilePage-reducer";
import { RootState } from "../../redux/redux-store";
import Profile from "./Profile";
import Loader from "../../component/Loader";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { T_Profile } from "../../api/Api";

class ProfileApiContainer extends React.Component<ProfilePropsType> {
  componentDidMount() {
    let userId:number = Number(this.props.match.params.userId);
    if (!userId) userId = this.props.authUID;
    this.props.getProfileTC(userId)
  }

  render(): React.ReactNode {
    const { profile } = this.props;

    if (!profile) {
      return <Loader />;
    }
    return this.props.profile && <Profile profile={this.props.profile} />;
  }
}

const mapStateToProps = (state: RootState): MapStateToPropsType => ({
  profile: state.profilePage.profile,
  authUID: state.authUser.id,
});

// throw through HOC:withRouter
const ProfileWithRouter = withRouter(ProfileApiContainer);
// api-container throw through bll-container
const ProfileContainer = connect(mapStateToProps, { getProfileTC })(
  ProfileWithRouter
);

export default ProfileContainer;

type ParamsType = {
  userId: string;
};
type MapStateToPropsType = {
  profile: T_Profile;
  authUID: number;
};
type MapDispatchToPropsType = {
  getProfileTC: (userId: number)=>void
};
export type ProfilePropsType = MapStateToPropsType &
  MapDispatchToPropsType &
  RouteComponentProps<ParamsType>;
