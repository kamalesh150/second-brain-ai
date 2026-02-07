"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [notes, setNotes] = useState<any[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [search, setSearch] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);

  // 🔁 Fetch notes
  const fetchNotes = async () => {
    const res = await fetch("/api/notes");
    const data = await res.json();
    setNotes(data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  // ➕ Save Note
  const handleSave = async () => {
    if (!title || !content) return;

    if (editingId) {
      await fetch("/api/notes", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: editingId,
          title,
          content,
        }),
      });

      setEditingId(null);
    } else {
      await fetch("/api/notes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          content,
          type: "note",
        }),
      });
    }

    setTitle("");
    setContent("");
    await fetchNotes(); // 🔥 THIS FIXES REFRESH
  };

  // 🗑 Delete
  const handleDelete = async (id: string) => {
    await fetch("/api/notes", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });

    await fetchNotes(); // 🔥 REFRESH AFTER DELETE
  };

  // ✏ Edit
  const handleEdit = (note: any) => {
    setTitle(note.title);
    setContent(note.content);
    setEditingId(note.id);
  };

  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(search.toLowerCase()) ||
      note.content.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">🧠 Second Brain</h1>

      <input
        className="border w-full p-2 mb-2"
        placeholder="Note title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        className="border w-full p-2 mb-2"
        placeholder="Write something..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <button
        onClick={handleSave}
        className="bg-black text-white px-4 py-2 mb-4"
      >
        {editingId ? "Update Note" : "Save Note"}
      </button>

      <input
        className="border w-full p-2 mb-4"
        placeholder="Search notes..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredNotes.map((note) => (
        <div key={note.id} className="border p-4 mb-4">
          <h2 className="font-semibold">{note.title}</h2>
          <p>{note.content}</p>

          {note.summary && (
            <div className="bg-gray-100 p-2 mt-2">
              <strong>AI Summary:</strong> {note.summary}
            </div>
          )}

          <div className="text-sm text-gray-500 mt-2">
            {new Date(note.created_at).toLocaleString()}
          </div>

          <div className="mt-2 space-x-4">
            <button
              onClick={() => handleEdit(note)}
              className="text-blue-600"
            >
              Edit
            </button>

            <button
              onClick={() => handleDelete(note.id)}
              className="text-red-600"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </main>
  );
}
