import { instance, Response } from "./Api";

export const ProfileAPI = {
  getProfile: (userId: number) =>
    instance.get<T_Profile>("profile/" + userId).then((res) => res.data),
  getProfileStatus: async (userId: number) => {
    const res = await instance.get("profile/status/" + userId);
    return res?.data || '';
  },
  updateStatusField: async (status: string) => {
    const res = await instance.put<Response>("profile/status", {status})
    return res.data
  }
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
