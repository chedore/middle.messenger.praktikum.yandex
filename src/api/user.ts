import HTTP from '../core/HTTPTransport';
import { BASE_URL } from './config';
import {
  ChangePasswordRequest,
  UpdateProfileRequest,
  UserSearchRequest,
} from './types';

const userApi = new HTTP();

export default class UserAPI {
  static baseURL: string = BASE_URL;
  
  static updateProfile(data: UpdateProfileRequest) {
    return userApi.put(`${this.baseURL}/user/profile`, { data });
  }

  static updateAvatar(data: FormData) {
    return userApi.put(`${this.baseURL}/user/profile/avatar`, { data });
  }

  static changePassword(data: ChangePasswordRequest) {
    return userApi.put(`${this.baseURL}/user/password`, { data });
  }

  static UserInfo() {
    return userApi.get(`${this.baseURL}/auth/user`);
  }

  static userSearch(data: UserSearchRequest) {
    return userApi.post(`${this.baseURL}/user/search`, { data });
  }
}
