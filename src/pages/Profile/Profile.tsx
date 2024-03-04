import { Avatar, Divider } from "antd";
import { UserOutlined } from "@ant-design/icons";
import React, { memo } from "react";
import { MyPostsContainer } from "./MyPosts/MyPostsContainer";
import styled from "styled-components";
import { T_Profile } from "../../api/ProfileAPI";
import ProfileStatus from "./Status/ProfileStatus";

type ProfilePropsType = {
  profile: T_Profile;
  status: string;
  updateStatus: (status: string)=>void
};

class Profile extends React.Component<ProfilePropsType> {
  render(): React.ReactNode {
    const { profile, status, updateStatus } = this.props;

    return (
      <div>
        <StyledProfile>
          <StyledAvatar>
            {profile.photos.large ? (
              <Avatar size={100} src={profile.photos.large} />
            ) : (
              <Avatar size={100} icon={<UserOutlined />} />
            )}
          </StyledAvatar>
          <StyledUInfo>
            <h2>{profile.fullName}</h2>
            <p>{profile.lookingForAJobDescription}</p>
            <Divider />
            <ProfileStatus status={status} updateStatus={updateStatus}/>
            <h3>Contact Information</h3>
            <StyledContactList>
              {Object.entries(profile.contacts).map(([key, value]) => (
                <li key={key}>
                  <b>{key}: </b>
                  {/* <StyledContactLink href={value}>{value}</StyledContactLink> */}
                </li>
              ))}
            </StyledContactList>
          </StyledUInfo>
        </StyledProfile>
        <MyPostsContainer />
      </div>
    );
  }
}

const MProfile = memo(Profile);

export default MProfile;

const StyledProfile = styled.div`
  padding: 20px;
  border: 1px solid #d1d1d1;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
const StyledAvatar = styled.div`
  margin-bottom: 20px;
`;
const StyledUInfo = styled.div`
  h2 {
    margin-bottom: 10px;
    color: #333;
  }
  p {
    color: #555;
  }
`;
const StyledContactLink = styled.a`
  color: #0073b1;
  &:hover {
    text-decoration: underline;
  }
`;
const StyledContactList = styled.ul`
  list-style-type: none;
  padding: 0;
  & > li {
    margin-bottom: 5px;
    color: #666;
    & > b {
      margin-right: 5px;
      font-weight: bold;
    }
  }
`;
