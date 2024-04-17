import { connectToDB } from "@utils/database";
import User from "@models/User";
import { NextResponse } from "next/server";

export async function GET(req, {params}) {
  const {id} = params;
  try {
    await connectToDB();
    const user = await User.findOne({_id:id});
    // console.log('user:',user);
    return NextResponse.json({user});
  } catch (error) {
    console.log(error);
  }
}