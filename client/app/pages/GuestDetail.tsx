import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import pb from "../../api";

export default function GuestDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [guest, setGuest] = useState<any>(null);

  useEffect(() => {
    if (id) fetchGuest();
  }, [id]);

  async function fetchGuest() {
    const record = await pb.collection("guests").getOne(id!);
    setGuest(record);
  }

  async function handleSave() {
    await pb.collection("guests").update(id!, guest);
    navigate("/guests");
  }

  async function handleDelete() {
    await pb.collection("guests").delete(id!);
    navigate("/guests");
  }

  if (!guest) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Guest Detail</h1>
      <div className="space-y-3">
        {Object.keys(guest).map(
          (key) =>
            ["first_name", "last_name", "email", "phone", "address", "date_of_birth"].includes(key) && (
            <input
                key={key}
                type={key === "date_of_birth" ? "date" : "text"}
                value={guest[key] || ""}
                onChange={(e) => setGuest({ ...guest, [key]: e.target.value })}
                className="border p-2 rounded w-full"
              />
            )
        )}
      </div>
      <div className="mt-4 space-x-2">
        <button
          onClick={handleSave}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Save Changes
        </button>
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Delete Guest
        </button>
      </div>
    </div>
  );
}
