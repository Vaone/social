import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { T_Profile, setProfile } from "../../redux/profilePage-reducer";
import { toggleLoader } from "../../redux/common-reducer";
import { RootState } from "../../redux/redux-store";
import Profile from "./Profile";
import Loader from "../../component/Loader";
import { RouteComponentProps, withRouter } from "react-router-dom";

class ProfileApiContainer extends React.Component<ProfilePropsType> {

  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) userId = "30710"
    this.props.toggleLoader(true);
    axios
      .get("https://social-network.samuraijs.com/api/1.0/profile/"+userId)
      .then((res) => {
        this.props.setProfile(res.data);
        this.props.toggleLoader(false);
      });
  }

  render(): React.ReactNode {
    const { profile} = this.props

    if (!profile) {
      return <Loader />
    }
    return this.props.profile && <Profile profile={this.props.profile} />
  }
}

const mapStateToProps = (state: RootState): MapStateToPropsType => {
  return {
    profile: state.profilePage.profile,
  };
};

// throw through HOC:withRouter
const ProfileWithRouter = withRouter(ProfileApiContainer)
// api-container throw through bll-container
const ProfileContainer = connect(mapStateToProps, { toggleLoader, setProfile })(ProfileWithRouter);

export default ProfileContainer;

type ParamsType = {
  userId: string,
}
type MapStateToPropsType = {
  profile?: T_Profile;
};
type MapDispatchToPropsType = {
  toggleLoader: (isLoading: boolean) => void;
  setProfile: (profile: T_Profile) => void;
};
export type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType & RouteComponentProps<ParamsType>;
