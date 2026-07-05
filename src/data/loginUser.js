// Get all registered users
export const getUsers = () => {
  return JSON.parse(localStorage.getItem("users")) || [];
};

// Save all users
export const saveUsers = (users) => {
  localStorage.setItem("users", JSON.stringify(users));
};

// Register new user
export const registerUser = (user) => {
  const users = getUsers();

  const exists = users.find(
    (u) => u.email === user.email
  );

  if (exists) {
    return {
      success: false,
      message: "Email already exists.",
    };
  }

  users.push({
    id: Date.now(),
    ...user,
  });

  saveUsers(users);

  return {
    success: true,
  };
};

// Login
export const loginUser = (email, password) => {
  const users = getUsers();

  const user = users.find(
    (u) =>
      u.email === email &&
      u.password === password
  );

  if (!user) {
    return {
      success: false,
      message: "Invalid email or password.",
    };
  }

  localStorage.setItem("loggedInUser", JSON.stringify(user));
  localStorage.setItem("isLoggedIn", "true");

  return {
    success: true,
    user,
  };
};

// Logout
export const logoutUser = () => {
  localStorage.removeItem("loggedInUser");
  localStorage.removeItem("isLoggedIn");
};

// Current logged-in user
export const getLoggedInUser = () => {
  return JSON.parse(
    localStorage.getItem("loggedInUser")
  );
};