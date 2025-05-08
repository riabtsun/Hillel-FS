import mongoose, { Model, Schema, Document } from 'mongoose';

export interface IUser {
  name: string;
  email: string;
  password: string;
}

export interface IUserDocument extends IUser, Document {
  _doc: IUser;
}

const UserSchema: Schema<IUserDocument> = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const UserModel: Model<IUserDocument> = mongoose.model('User', UserSchema);
export default UserModel;
