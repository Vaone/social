import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { AppDispatch, RootState } from "../../redux/redux-store";
import {
  followHandler,
  onPageChange,
  setUsersCount,
  setUsers,
  UserType,
  toggleLoader,
} from "../../redux/usersPage-reducer";
import Users from "./Users";

class UsersApiContainer extends React.Component<UsersCPropsType> {
  componentDidMount() {
    this.props.toggleLoader(true)
    axios
      .get<ResponseData>(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}`
      )
      .then((res) => {
        this.props.setUsers(res.data.items);
        this.props.setUsersCount(res.data.totalCount);
        this.props.toggleLoader(false)
      });
  }

  componentDidUpdate(prevProps: UsersCPropsType) {
    if (this.props.currentPage !== prevProps.currentPage) {
      this.props.toggleLoader(true)
      axios
        .get<ResponseData>(
          `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}`
        )
        .then((res) => {
          this.props.setUsers(res.data.items);
          this.props.setUsersCount(res.data.totalCount);
          this.props.toggleLoader(false)
        });
    }
  }

  render(): React.ReactNode {
    const {
      users,
      currentPage,
      usersCount,
      pageSize,
      onPageChange,
      followHandler,
      isLoading,
    } = this.props;

    const pages = Math.ceil(usersCount / pageSize);

    return (
      <Users
        isLoading={isLoading}
        users={users}
        currentPage={currentPage}
        pages={pages}
        onPageChange={onPageChange}
        followHandler={followHandler}
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
    isLoading: state.usersPage.isLoading,
  }
};

const UsersContainer = connect(mapStateToProps, {followHandler, setUsers, setUsersCount, onPageChange, toggleLoader})(UsersApiContainer);

export default UsersContainer;

// types
type ResponseData = {
  items: UserType[];
  totalCount: number;
  error: string;
};
type MapStateToPropsType = {
  users: UserType[]
  usersCount: number
  currentPage: number
  pageSize: number
  isLoading: boolean
};
type MapDispatchToPropsType = {
  followHandler: (userId: number) => void
  setUsers: (users: UserType[]) => void
  setUsersCount: (count: number) => void
  onPageChange: (page: number)=>void
  toggleLoader: (isLoading: boolean)=>void
};
type UsersCPropsType = MapStateToPropsType & MapDispatchToPropsType;
