import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

// GET
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("q");

  let request = supabase
    .from("knowledge_items")
    .select("*")
    .order("created_at", { ascending: false });

  if (query) {
    request = request.ilike("content", `%${query}%`);
  }

  const { data, error } = await request;

  if (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  return NextResponse.json(data);
}

// POST
export async function POST(req: Request) {
  const body = await req.json();
  const { title, content, type } = body;

  const summary =
    content.length > 150 ? content.slice(0, 150) + "..." : content;

  const { data, error } = await supabase
    .from("knowledge_items")
    .insert([{ title, content, type, summary }])
    .select();

  if (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  return NextResponse.json(data[0]);
}

// PUT
export async function PUT(req: Request) {
  const body = await req.json();
  const { id, title, content } = body;

  const { error } = await supabase
    .from("knowledge_items")
    .update({ title, content })
    .eq("id", id);

  if (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  return NextResponse.json({ message: "Updated" });
}

// DELETE
export async function DELETE(req: Request) {
  const body = await req.json();
  const { id } = body;

  const { error } = await supabase
    .from("knowledge_items")
    .delete()
    .eq("id", id);

  if (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  return NextResponse.json({ message: "Deleted" });
}
