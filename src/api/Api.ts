import axios from "axios";
import { UserType } from "../redux/usersPage-reducer";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
});

export const UserAPI = {
  getUsers: (currentPage: number) =>
    instance
      .get<ResponseGetUsers>(`users?page=${currentPage}`)
      .then((res) => res.data),
  followAnotherUser: (userId: number) =>
    instance.post<Response>("follow/" + userId),
  unfollowAnotherUser: (userId: number) =>
    instance.delete<Response>("follow/" + userId),
};

export const AuthAPI = {
  getAuth: () =>
    instance
      .get<Response<T_AuthResponseData>>("auth/me")
      .then((res) => res.data),
};

export const ProfileAPI = {
  getProfile: (userId: number) =>
    instance.get<T_Profile>("profile/" + userId).then((res) => res.data),
};

type ResponseGetUsers = {
  items: UserType[];
  totalCount: number;
  error: string;
};
type Response<T = {}> = {
  resultCode: number;
  messages: string[];
  fieldsErrors: string[];
  data: T;
};
export type T_AuthResponseData = {
  id: number;
  email: string;
  login: string;
};
export type T_Profile = {
  userId: number;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  contacts: {
    github: string;
    vk: string;
    facebook: string;
    instagram: string;
    twitter: string;
    website: string;
    youtube: string;
    mainLink: string;
  };
  photos: { small: string; large: string };
};
