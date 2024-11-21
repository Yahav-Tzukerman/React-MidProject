import axios from "axios";

const API_URL_USERS = "https://jsonplaceholder.typicode.com/users";

class UserService {
  static async getUsers() {
    try {
      const response = await axios.get(API_URL_USERS);
      return response.data;
    } catch (error) {
      console.error("Error fetching users:", error);
      throw error;
    }
  }

  static async getUser(userId) {
    try {
      const response = await axios.get(`${API_URL_USERS}/${userId}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching user with ID ${userId}:`, error);
      throw error;
    }
  }

  static async createUser(user) {
    try {
      const response = await axios.post(API_URL_USERS, user);
      return response.data;
    } catch (error) {
      console.error("Error creating user:", error);
      throw error;
    }
  }

  static async updateUser(user) {
    if (user.id > 0 && user.id < 11) {
      try {
        const response = await axios.put(`${API_URL_USERS}/${user.id}`, user);
        return response.data;
      } catch (error) {
        console.error(`Error updating user with ID ${user.id}:`, error);
        throw error;
      }
    }
  }

  static async deleteUser(userId) {
    try {
      const response = await axios.delete(`${API_URL_USERS}/${userId}`);
      return response.data;
    } catch (error) {
      console.error(`Error deleting user with ID ${userId}:`, error);
      throw error;
    }
  }
}

export default UserService;
