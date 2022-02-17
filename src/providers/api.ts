import axios from 'axios';
import { ResponseData } from '../interfaces';

class ApiProxy {
  async getPosts(page: number) {
    return (await axios.get(`/post?page=${page}`)).data as ResponseData;
  }

  async getCommentsByPost(postId: string) {
    return (await axios.get(`/post/${postId}/comment`)).data as ResponseData;
  }
}

export default new ApiProxy();
