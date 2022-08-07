import users from "../database";

const updateUserService = (id, name, email, password) => {
  const updatedUser = {
    email,
    name,
    password,
    updatedOn: new Date(),
  };
  const userIndex = users.findIndex((elem) => elem.id === id);

  if (userIndex === -1) {
    return "User not found";
  }

  users[userIndex] = { ...users[userIndex], ...updatedUser };

  return users[userIndex];
};

export default updateUserService;
