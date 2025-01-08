import { createConnection } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const db = await createConnection();
    const sql = "select * from category";
    const [category] = await db.query(sql);

    return NextResponse.json(category);
  } catch (error) {
    console.log("errr", error);
    return NextResponse.json({ error: error.message });
  }
}
