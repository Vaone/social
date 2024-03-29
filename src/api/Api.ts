import axios from "axios";
import { UserType } from "../redux/usersPage-reducer";

export const instance = axios.create({
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
  login: (email: string, password: string, rememberMe: boolean = false) =>
    instance
      .post<Response<{ userId: number }>>("auth/login", {
        email,
        password,
        rememberMe,
      })
      .then((res) => res.data),
  logout: () => instance.delete<Response>("auth/login").then((res) => res.data),
};

type ResponseGetUsers = {
  items: UserType[];
  totalCount: number;
  error: string;
};
export type Response<T = {}> = {
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
