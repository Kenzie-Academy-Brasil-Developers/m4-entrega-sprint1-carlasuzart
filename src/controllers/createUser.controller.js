import createUserService from "../services/createUser.service";

const createUserController = async (request, response) => {
  const { email, name, password, isAdm, createdOn, UpdatedOn } = request.body;

  const user = await createUserService(
    email,
    name,
    password,
    isAdm,
    createdOn,
    UpdatedOn
  );

  return response.status(201).json(user);
};
export default createUserController;
