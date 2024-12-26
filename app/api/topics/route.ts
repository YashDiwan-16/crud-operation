import Topic from "@/app/models/topic";
import connectMongoDB from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(request: Request)
{
    const {task}= await request.json();
    await connectMongoDB();
       await Topic.create({task});
       return NextResponse.json({message:'Task created successfully'}); 
}   