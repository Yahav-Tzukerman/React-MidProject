import axios from "axios";

const API_URL_POSTS = "https://jsonplaceholder.typicode.com/posts";

class PostsService {
  static async getPosts() {
    try {
      const { data } = await axios.get(API_URL_POSTS);
      return data;
    } catch (error) {
      console.error(`Error fetching posts.`, error);
      throw error;
    }
  }

  static async getPost(postId) {
    try {
      const { data } = await axios.get(`${API_URL_POSTS}/${postId}`);
      return data;
    } catch (error) {
      console.error(`Error fetching post with ID ${postId}.`, error);
      throw error;
    }
  }

  static async getPostsByUserId(userId) {
    try {
      const { data } = await axios.get(`${API_URL_POSTS}?userId=${userId}`);
      return data;
    } catch (error) {
      console.error(`Error fetching posts for user with ID ${userId}.`, error);
      throw error;
    }
  }

  static async createPost(post) {
    try {
      const { data } = await axios.post(API_URL_POSTS, post);
      return data;
    } catch (error) {
      console.error(`Error creating post:`, error);
      throw error;
    }
  }

  static async updatePost(post) {
    try {
      const { data } = await axios.put(`${API_URL_POSTS}/${post.id}`, post);
      return data;
    } catch (error) {
      console.error(`Error updating post with ID ${post.id}:`, error);
      throw error;
    }
  }

  static async deletePost(postId) {
    try {
      const { data } = await axios.delete(`${API_URL_POSTS}/${postId}`);
      return data;
    } catch (error) {
      console.error(`Error deleting post with ID ${postId}:`, error);
      throw error;
    }
  }

  static async deletePostsByUserId(userId) {
    try {
      const { data } = await axios.delete(`${API_URL_POSTS}?userId=${userId}`);
      return data;
    } catch (error) {
      console.error(`Error deleting posts for user with ID ${userId}:`, error);
      throw error;
    }
  }
}

export default PostsService;
