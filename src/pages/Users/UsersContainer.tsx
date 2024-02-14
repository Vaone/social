import React from "react";
import { connect } from "react-redux";
import { redirectAuth } from "../../component/AuthRedirect";
import { RootState } from "../../redux/redux-store";
import {
  onPageChange,
  getUsersTC,
  UserType,
  toggleFollowTC
} from "../../redux/usersPage-reducer";
import Users from "./Users";

class UsersApiContainer extends React.Component<UsersCPropsType> {
  componentDidMount() {
    this.props.getUsersTC(this.props.currentPage)
  }

  componentDidUpdate(prevProps: UsersCPropsType) {
    if (this.props.currentPage !== prevProps.currentPage) {
      this.props.getUsersTC(this.props.currentPage)
    }
  }

  render(): React.ReactNode {
    const {
      users,
      currentPage,
      usersCount,
      pageSize,
      onPageChange,
      isLoading,
      followInProgress,
      toggleFollowTC,
    } = this.props;

    const pages = Math.ceil(usersCount / pageSize);
    
    return (
      <Users
        isLoading={isLoading}
        users={users}
        currentPage={currentPage}
        pages={pages}
        followInProgress={followInProgress}
        onPageChange={onPageChange}
        toggleFollowTC={toggleFollowTC}
      />
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    users: state.usersPage.users,
    usersCount: state.usersPage.usersCount,
    currentPage: state.usersPage.currentPage,
    pageSize: state.usersPage.pageSize,
    isLoading: state.anyPage.isLoading,
    followInProgress: state.usersPage.followInProgress
  };
};

const UsersConnected = connect(mapStateToProps, {
  onPageChange,
  getUsersTC,
  toggleFollowTC
})(UsersApiContainer);

const UsersContainer = redirectAuth(UsersConnected)

export default UsersContainer;

// types

type MapStateToPropsType = {
  users: UserType[];
  usersCount: number;
  currentPage: number;
  pageSize: number;
  isLoading: boolean;
  followInProgress: number[]
};
type MapDispatchToPropsType = {
  onPageChange: (page: number) => void
  getUsersTC: (currentPage: number) => void
  toggleFollowTC: (userId: number, userFollowed: boolean) => void
};
type UsersCPropsType = MapStateToPropsType & MapDispatchToPropsType;
