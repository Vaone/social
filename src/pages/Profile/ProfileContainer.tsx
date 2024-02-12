import React from "react";
import { connect } from "react-redux";
import { setProfile } from "../../redux/profilePage-reducer";
import { toggleLoader } from "../../redux/common-reducer";
import { RootState } from "../../redux/redux-store";
import Profile from "./Profile";
import Loader from "../../component/Loader";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { ProfileAPI, T_Profile } from "../../api/Api";

class ProfileApiContainer extends React.Component<ProfilePropsType> {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) userId = String(this.props.authUID);
    this.props.toggleLoader(true);
    ProfileAPI.getProfile(Number(userId)).then((data) => {
      this.props.setProfile(data);
      this.props.toggleLoader(false);
    });
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
const ProfileContainer = connect(mapStateToProps, { toggleLoader, setProfile })(
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
  toggleLoader: (isLoading: boolean) => void;
  setProfile: (profile: T_Profile) => void;
};
export type ProfilePropsType = MapStateToPropsType &
  MapDispatchToPropsType &
  RouteComponentProps<ParamsType>;
