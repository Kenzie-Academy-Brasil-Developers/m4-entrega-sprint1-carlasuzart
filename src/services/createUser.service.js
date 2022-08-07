import users from "../database";
import { v4 as uuidv4 } from "uuid";
import * as bcrypt from "bcryptjs";

const createUserService = async (email, name, password, isAdm) => {
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = {
    email,
    name,
    id: uuidv4(),
    password: hashedPassword,
    createdOn: new Date(),
    updatedOn: new Date(),
    isAdm,
  };

  const user = {
    email,
    name,
    id: uuidv4(),
    createdOn: new Date(),
    updatedOn: new Date(),
    isAdm,
  };

  users.push(newUser);
  console.log(newUser);
  return user;
};

export default createUserService;
