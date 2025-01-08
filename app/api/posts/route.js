import { createConnection } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    console.log("start");
    const db = await createConnection();
    const sql = "select * from category";
    const [category, fields] = await db.query(sql);

    // console.log(category); // results contains rows returned by server
    // console.log(fields); // fields contains extra meta data about results, if available

    return NextResponse.json(category);
  } catch (error) {
    console.log("errr", error);
    return NextResponse.json({ error: error.message });
  }
}
