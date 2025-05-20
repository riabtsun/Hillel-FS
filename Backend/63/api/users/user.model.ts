import mongoose from 'mongoose';
import bcrypt from "bcryptjs";


interface IUser extends mongoose.Document {
  email: string;
  password: string

  comparePassword(candidatePassword: string): Promise<boolean>;
}

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
},{timestamps: true});

userSchema.pre('save', async function(next) {
  if (this.isModified('password')) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(String(this.password), salt);
  }
  next();
});

userSchema.methods.comparePassword = async function(candidatePassword: string): Promise<boolean> {
  try {
    return await bcrypt.compare(String(candidatePassword), this.password);
  } catch (error) {
    throw new Error(`Validation data error ${error}`, );
  }
};



export const User = mongoose.model<IUser>('User', userSchema);
