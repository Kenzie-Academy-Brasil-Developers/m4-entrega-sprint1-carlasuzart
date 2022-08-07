import users from "../database";
import jwt from "jsonwebtoken";

const listProfileUserService = (email) => {
  const user = users.find((elem) => elem.email === email);

  const userProfile = {
    name: user.name,
    email: user.email,
    id: user.id,
    isAdm: user.isAdm,
  };

  return userProfile;
};

export default listProfileUserService;
