import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { User } from "@/db/userSchema"; 
import connectDB from "@/db/connection"; 

export async function POST(request: Request) {
  try {
    // Parse request body
    const body = await request.json();
    console.log("Received request body:", body);

    const { username, email, password } = body;
    console.log("Extracted fields:", { username, email, password });

    // Validate inputs
    if (!username || !email || !password) {
      console.log("Missing required fields:", { username: !!username, email: !!email, password: !!password });
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Connect to the database
    await connectDB();
    console.log("Connected to database");

    // Check if the user already exists
    const existingUser = await User.findOne({ 
      $or: [{ username }, { email }]
    });
    
    if (existingUser) {
      console.log("User already exists:", { username, email });
      return NextResponse.json(
        { error: "Username or email already exists" },
        { status: 409 }
      );
    }

    // // Hash the password
    // const hashedPassword = await bcrypt.hash(password, 10);

    // Create and save the new user
    const newUser = new User({
      username,
      email,
      password: password, // Store the plain password (not recommended) (hashedPassword)
    });
    await newUser.save();
    console.log("User created successfully");

    // Send success response
    return NextResponse.json(
      { message: "User registered successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error in register API:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Internal Server Error" },
      { status: 500 }
    );
  }
}
