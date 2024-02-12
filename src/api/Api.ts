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
};

export const AuthAPI = {
  getAuth: () =>
    instance.get<ResponseGetAuth>("auth/me").then((res) => res.data),
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
type ResponseGetAuth = {
  resultCode: number;
  messages: string[];
  data: T_AuthResponseData;
  fieldsErrors: string[];
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
