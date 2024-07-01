import store from '../core/Store';
import UserAPI from '../api/user';
import {
  ChangePasswordRequest,
  UpdateProfileRequest,
  UserSearchRequest,
} from '../api/types';

export default class UserService {
  public static updateUserProfile(data: UpdateProfileRequest) {
    return UserAPI.updateProfile(data);
  }

  public static updateUserAvatar(data: FormData) {
    return UserAPI.updateAvatar(data);
  }

  public static changeUserPassword(data: ChangePasswordRequest) {
    return UserAPI.changePassword(data);
  }

  public static getUserInfo() {
    return UserAPI.UserInfo().then((userInfo) => {return store.dispatch('user', JSON.parse(userInfo.response));});
  }

  public static userSearch(data: UserSearchRequest) {
    return UserAPI.userSearch(data).then((user) => {store.dispatch('usersSearchResult', JSON.parse(user.response));});
  }

}
