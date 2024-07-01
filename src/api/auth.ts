import HTTP from '../core/HTTPTransport';
import { BASE_URL } from './config';
import { SignInRequest, SignUpRequest } from './types';

const authApi = new HTTP();

export default class AuthAPI {
  static baseURL: string = BASE_URL;

  static create(data: SignUpRequest) {
    return authApi.post(`${this.baseURL}/auth/signup`, { data });
  }

  static signin(data: SignInRequest) {
    return authApi.post(`${this.baseURL}/auth/signin`, { data });
  }

  static signout() {
    return authApi.post(`${this.baseURL}/auth/logout`);
  }
}
