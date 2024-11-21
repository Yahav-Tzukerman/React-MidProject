import React, { useState, useEffect } from "react";
import UserService from "./services/User.service";
import PostsService from "./services/Posts.service";
import TodosService from "./services/Todos.service";
import UserList from "./components/UserList";
import UserDetails from "./components/UserDetails";
import "./App.css";
import AddUser from "./components/AddUser";
import SearchBar from "./components/SearchBar";

const App = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [todos, setTodos] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [isAddingUser, setIsAddingUser] = useState(false);
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const usersData = await UserService.getUsers();
      const postsData = await PostsService.getPosts();
      const todosData = await TodosService.getTodos();
      setUsers(usersData);
      setPosts(postsData);
      setTodos(todosData);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (isAddingUser) {
      setSelectedUserId(null);
    }
  }, [isAddingUser]);

  const handleSearchChange = (e) => {
    setSearchText(e.target.value.toLowerCase());
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchText) ||
      user.email.toLowerCase().includes(searchText)
  );

  const handleAddUser = async () => {
    const user = await UserService.createUser(newUser);
    const lastUserId = users[users.length - 1]?.id || 0;
    setUsers((prevUsers) => [...prevUsers, { ...user, id: lastUserId + 1 }]);
    setIsAddingUser(false);
    setNewUser({
      name: "",
      email: "",
    });
  };

  const updateUser = (updatedUser) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    );
    UserService.updateUser(updatedUser);
  };

  const deleteUser = async (userId) => {
    const userTodos = await TodosService.getTodosByUserId(userId);
    const userPosts = await PostsService.getPostsByUserId(userId);

    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.userId !== userId));
    setPosts((prevPosts) => prevPosts.filter((post) => post.userId !== userId));

    userTodos.forEach((todo) => TodosService.deleteTodo(todo.id));
    userPosts.forEach((post) => PostsService.deletePost(post.id));
    UserService.deleteUser(userId);

    selectedUserId === userId && setSelectedUserId(null);
  };

  const addPost = (newPost) => {
    setPosts((prevPosts) => [
      ...prevPosts,
      { ...newPost, id: prevPosts.length + 1 },
    ]);
    PostsService.createPost(newPost);
  };

  const addTodo = (newTodo) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { ...newTodo, id: prevTodos.length + 1 },
    ]);
    TodosService.createTodo(newTodo);
  };

  const markTodoComplete = (todoId) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: true } : todo
      )
    );
    TodosService.markComplete(todoId);
  };

  return (
    <div className="app-container">
      <div className="user-list">
        <SearchBar
          searchText={searchText}
          handleSearchChange={handleSearchChange}
          setIsAddingUser={setIsAddingUser}
        />

        <UserList
          users={filteredUsers}
          todos={todos}
          onUpdateUser={updateUser}
          onDeleteUser={deleteUser}
          onSelectUser={isAddingUser ? () => {} : setSelectedUserId}
          isSelected={(userId) => userId === selectedUserId}
        />
      </div>
      {isAddingUser ? (
        <div className="add-user">
          <AddUser
            newUser={newUser}
            onChange={setNewUser}
            onAddUser={handleAddUser}
            onCancel={() => setIsAddingUser(false)}
          />
        </div>
      ) : (
        selectedUserId && (
          <div className="user-details">
            <UserDetails
              userId={selectedUserId}
              posts={posts.filter((post) => post.userId === selectedUserId)}
              todos={todos.filter((todo) => todo.userId === selectedUserId)}
              onAddPost={addPost}
              onAddTodo={addTodo}
              onMarkTodoComplete={markTodoComplete}
            />
          </div>
        )
      )}
      <div className="credit">
        <h1>React - Mid Project</h1>
        <h3>by: Yahav Tzukerman</h3>
      </div>
    </div>
  );
};

export default App;
