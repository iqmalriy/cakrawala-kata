// Importing mongoose library along with Document and Model types from it
import mongoose, { Document, Model } from "mongoose";

// Defining the structure of a todo item using TypeScript interfaces
export interface IUsers {
  playerName: string;
  point: number;
}

// Merging ITodo interface with mongoose's Document interface to create 
// a new interface that represents a todo document in MongoDB
export interface IUsersDocument extends IUsers, Document {
  createdAt: Date;
  updatedAt: Date;
}

// Defining a mongoose schema for the todo document, specifying the types 
// and constraints
const userSchema = new mongoose.Schema<IUsersDocument>(
  {
    playerName: {
      type: String,
      required: true,
    },
    point: {
      type: Number,
      required: true,
    },
  },
  {
    // Automatically add 'createdAt' and 'updatedAt' fields to the document
    timestamps: true,
  }
);

// Creating a mongoose model for the todo document
const Users: Model<IUsersDocument> =
  mongoose.models?.Users || mongoose.model("Users", userSchema);

export default Users;