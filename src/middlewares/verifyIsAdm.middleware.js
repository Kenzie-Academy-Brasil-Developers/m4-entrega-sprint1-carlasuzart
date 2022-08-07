import users from "../database";

const verifyIsAdmMiddleware = (request, response, next) => {
  const { id } = request.params;
  const { isAdm } = request.body;
  const user = users.find((elem) => (elem.id = id));

  if (user !== id || isAdm === false) {
    return response.status(400).json({ message: "Unauthorized" });
  }
  next();
};

export default verifyIsAdmMiddleware;
