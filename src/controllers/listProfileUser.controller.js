import listProfileUserService from "../services/listProfileUser.service";

const listProfileUserController = (request, response) => {
  const users = listUsersService();
  return response.json(users);
};

export default listProfileUserController;
