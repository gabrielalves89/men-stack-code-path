import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    id: mongoose.Schema.Types.ObjectId,
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  { timestamp: true }
);

export default mongoose.model("user", userSchema);

// produto qualquer
// batata frita = produto