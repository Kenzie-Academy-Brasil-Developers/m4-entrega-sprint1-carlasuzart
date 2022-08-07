import users from "../database";
import jwt from "jsonwebtoken";
import * as bcrypt from "bcryptjs";

const userLoginService = (email, password) => {
  const user = users.find((elem) => elem.email === email);

  if (!user) {
    return "Wrong email/password";
  }

  const passwordMatch = bcrypt.compareSync(password, user.password);

  if (!passwordMatch) {
    return "Invalid email or password";
  }

  const token = jwt.sign({ email: email }, "SECRET_KEY", {
    expiresIn: "24h",
    subject: user.id,
  });

  return token;
};

export default userLoginService;
