import listProfileUserService from "../services/listProfileUser.service";

const listProfileUserController = (request, response) => {
  const userToken = request;

  const userProfile = listProfileUserService(userToken);

  return response.json(userProfile);
};

export default listProfileUserController;
