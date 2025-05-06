import mongoose, { Model, Document, Schema } from 'mongoose';

interface IUser {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
}

const UserSchema: Schema<IUser> = new Schema({
  id: Number,
  first_name: String,
  last_name: String,
  email: String,
  gender: String,
});

const UserModel: Model<IUser> = mongoose.model('User', UserSchema);
export default UserModel;
