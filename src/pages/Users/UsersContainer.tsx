import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { RootState } from "../../redux/redux-store";
import {
  setFollow,
  onPageChange,
  setUsersCount,
  setUsers,
  UserType,
} from "../../redux/usersPage-reducer";
import Users from "./Users";
import { toggleLoader } from "../../redux/common-reducer";

class UsersApiContainer extends React.Component<UsersCPropsType> {
  componentDidMount() {
    this.props.toggleLoader(true)
    axios
      .get<ResponseData>(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}`, {withCredentials: true}
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
          `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}`, {withCredentials: true}
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
      setFollow,
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
        setFollow={setFollow}
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
    isLoading: state.anyPage.isLoading
  }
};

const UsersContainer = connect(mapStateToProps, {setFollow, setUsers, setUsersCount, onPageChange, toggleLoader})(UsersApiContainer);

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
  setFollow: (userId: number) => void
  setUsers: (users: UserType[]) => void
  setUsersCount: (count: number) => void
  onPageChange: (page: number)=>void
  toggleLoader: (isLoading: boolean)=>void
};
type UsersCPropsType = MapStateToPropsType & MapDispatchToPropsType;
