import axios from "axios";

const API_URL_TODOS = "https://jsonplaceholder.typicode.com/todos";

class TodosService {
  static async getTodos() {
    try {
      const response = await axios.get(API_URL_TODOS);
      return response.data;
    } catch (error) {
      console.error(`Error fetching todos for user with ID ${userId}:`, error);
      throw error;
    }
  }

  static async getTodo(todoId) {
    try {
      const response = await axios.get(`${API_URL_TODOS}/${todoId}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching todo with ID ${todoId}:`, error);
      throw error;
    }
  }

  static async createTodo(todo) {
    try {
      const response = await axios.post(API_URL_TODOS, todo);
      return response.data;
    } catch (error) {
      console.error("Error creating todo:", error);
      throw error;
    }
  }

  static async markComplete(todoId) {
    try {
      const response = await axios.patch(`${API_URL_TODOS}/${todoId}`, {
        completed: true,
      });
      return response.data;
    } catch (error) {
      console.error(`Error marking todo with ID ${todoId} as complete:`, error);
      throw error;
    }
  }

  static async updateTodo(todo) {
    try {
      const response = await axios.put(`${API_URL_TODOS}/${todo.id}`, todo);
      return response.data;
    } catch (error) {
      console.error(`Error updating todo with ID ${todo.id}:`, error);
      throw error;
    }
  }

  static async deleteTodo(todoId) {
    try {
      const response = await axios.delete(`${API_URL_TODOS}/${todoId}`);
      return response.data;
    } catch (error) {
      console.error(`Error deleting todo with ID ${todoId}:`, error);
      throw error;
    }
  }

  static async getTodosByUserId(userId) {
    try {
      const response = await axios.get(`${API_URL_TODOS}?userId=${userId}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching todos for user with ID ${userId}:`, error);
      throw error;
    }
  }

  static async getUserNotCompletedTodos(userId) {
    try {
      const response = await axios.get(
        `${API_URL_TODOS}?userId=${userId}&completed=false`
      );
      return response.data;
    } catch (error) {
      console.error(
        `Error fetching not completed todos for user with ID ${userId}:`,
        error
      );
      throw error;
    }
  }
}

export default TodosService;
