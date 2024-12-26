
import clientPromise from "@/lib/clientpromise";

import { NextRequest, NextResponse } from "next/server";

export async function POST(request: Request)
{
    // const {task}= await request.json();
    // await connectMongoDB();
    //    await Topic.create({task});
    //    return NextResponse.json({message:'Task created successfully'}); 

    const {task}=await request.json();
    const client = await clientPromise;
    const db = client.db("todo");
    const topics = db.collection("topics");

    const result =await topics.insertOne({task});
    return NextResponse.json({message:'Task created successfully'});

    

}   


export async function GET()
{
    const client = await clientPromise;
    const db = client.db("todo");
    const topics = db.collection("topics");

    const result = await topics.find({}).toArray();
    return NextResponse.json(result);
}

