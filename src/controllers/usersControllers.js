import UserSchema from "../models/usersSchema.js";

const getAll = async (req, res) => {
  const users = await UserSchema.find();

  if (!users) {
    res.status(500).send({
      statusCode: 500,
      message: err.message,
    });
  }
  
  res.status(200).send(users);
};

export default {
  getAll,
};