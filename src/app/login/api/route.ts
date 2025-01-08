import { NextResponse } from "next/server";
import bcrypt from 'bcrypt';
import { sign as jwtSign } from 'jsonwebtoken';
import { User } from "@/db/userSchema";
import connectDB from "@/db/connection";

export async function POST(request: Request) {
  try {
    // Connect to database
    await connectDB();

    // Parse the incoming request body
    const { username, password } = await request.json();

    console.log("Parsed username:", username);
    console.log("Parsed password:", password);

    // Validate input
    if (!username || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    // Find the user by email
    const user = await User.findOne({ email: username }); // Changed to check by email

    if (!user) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    // Compare passwords directly with bcrypt
    const isValid = await bcrypt.compare(password, user.password);
    
    if (!isValid) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    // Generate JWT token
    const token = jwtSign(
      { 
        userId: user._id, 
        email: user.email,
        username: user.username 
      },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: "1h" }
    );

    // Send success response with token
    return NextResponse.json({ 
      token,
      user: {
        email: user.email,
        username: user.username
      }
    }, { status: 200 });
    
  } catch (error) {
    console.error("Error in login API:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
