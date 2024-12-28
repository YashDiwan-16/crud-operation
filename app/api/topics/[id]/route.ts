import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import clientPromise from "@/lib/clientpromise"; // Ensure you have the correct path to your MongoDB client

export async function DELETE({ params }: { params: { id: string } }) {
  try {
    const client = await clientPromise;
    const db = client.db("todo");
    const topics = db.collection("topics");
    const result = await topics.deleteOne({ _id: new ObjectId(params.id) });
    return NextResponse.json({ message: 'Task deleted successfully' });
  } catch (error) {
    return NextResponse.error();
  }
}