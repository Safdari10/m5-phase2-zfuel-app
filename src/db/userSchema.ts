import mongoose, { Schema, Document } from "mongoose";
import bcrypt from "bcrypt";

export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  comparePassword(candidatePassword: string): Promise<boolean>;
}

const UserSchema = new Schema<IUser>(
  {
    username: { 
      type: String, 
      required: true, 
      unique: true,
      index: true 
    },
    email: { 
      type: String, 
      required: true, 
      unique: true,
      index: true 
    },
    password: { 
      type: String, 
      required: true 
    },
  },
  { timestamps: true }
);

// Pre-save middleware to hash passwords
UserSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
  next();
});

// Add comparePassword as a method to the schema
UserSchema.methods.comparePassword = async function(candidatePassword: string): Promise<boolean> {
  return bcrypt.compare(candidatePassword, this.password);
};

// Create or get the User model
const User = mongoose.models.User || mongoose.model<IUser>("User", UserSchema);

export { User };
