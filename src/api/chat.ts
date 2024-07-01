import HTTP from '../core/HTTPTransport';
import { BASE_URL } from './config';
import {
  AddUsersRequest,
  CreateChatRequest,
  DeleteUserFromChatRequest,
} from './types';

const chatApi = new HTTP();

export default class ChatAPI {
  static baseURL: string = BASE_URL;
  
  static createChat(data: CreateChatRequest) {
    return chatApi.post(`${this.baseURL}/chats`, {
      data,
    });
  }

  static addUsers(data: AddUsersRequest) {
    return chatApi.put(`${this.baseURL}/chats/users`, {
      data,
    });
  }

  static getChats() {
    return chatApi.get(`${this.baseURL}/chats`);
  }

  static getChatToken(id: number): Promise<XMLHttpRequest> {
    return chatApi.post(`${this.baseURL}/chats/token/${id}`);
  }

  static getChatUsers(id: number) {
    return chatApi.get(`${this.baseURL}/chats/${id}/users`);
  }

  static DeleteUserFromChat(data: DeleteUserFromChatRequest) {
    return chatApi.delete(`${this.baseURL}/chats/users`, { data });
  }
}
