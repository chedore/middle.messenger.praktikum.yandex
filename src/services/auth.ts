import AuthAPI from '../api/auth';
import { LoginRequestData, SignUpRequest } from '../api/types';

export default class AuthService {
  public static createUser(data: SignUpRequest) {
    return AuthAPI.create(data);
  }

  public static signinUser(data: LoginRequestData) {
    return AuthAPI.signin(data);
  }

  public static signoutUser() {
    AuthAPI.signout();
  }
}
