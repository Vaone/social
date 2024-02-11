import React from "react";
import styled from "styled-components";
import User from "./User";
import { Pagination } from "antd";
import { UserType } from "../../redux/usersPage-reducer";
import Loader from "../../component/Loader";

type UsersPropsType = {
  users: UserType[];
  pages: number;
  currentPage: number;
  isLoading: boolean;
  onPageChange: (page: number) => void;
  followHandler: (userId: number) => void;
};

class Users extends React.Component<UsersPropsType> {
  render(): React.ReactNode {
    const {
      isLoading,
      users,
      pages,
      currentPage,
      onPageChange,
      followHandler,
    } = this.props;

    return (
      <>
        <PaginationWrapper>
          <Pagination
            defaultCurrent={1}
            total={pages}
            current={currentPage}
            onChange={onPageChange}
          />
        </PaginationWrapper>
        {isLoading ? (
          <LoaderWrapper>
            <Loader />
          </LoaderWrapper>
        ) : (
          <StyledUserList>
            {users.map((u) => (
              <User key={u.id} user={u} followHandler={followHandler} />
            ))}
          </StyledUserList>
        )}
      </>
    );
  }
}

export default Users;

const StyledUserList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;
const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
