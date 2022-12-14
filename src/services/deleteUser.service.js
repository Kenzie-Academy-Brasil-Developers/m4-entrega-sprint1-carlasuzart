import users from "../database";

const deleteUserService = (id) => {
  const userIndex = users.findIndex((elem) => elem.id === id);

  if (userIndex === -1) {
    return "User not found";
  }

  users.splice(userIndex, 1);
  return "User deleted with sucess";
};

export default deleteUserService;
