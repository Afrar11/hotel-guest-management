import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import pb from "../../api";

type Guest = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
};

export default function GuestsList() {
  const [guests, setGuests] = useState<Guest[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchGuests();
  }, []);

  async function fetchGuests() {
    const records = await pb.collection("guests").getFullList<Guest>();
    setGuests(records);
  }

  const filteredGuests = guests.filter((g) =>
    (g.first_name + " " + g.last_name)
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Guest List</h1>
      <input
        type="text"
        placeholder="Search guest..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 rounded mb-4 w-full"
      />
      <Link
        to="/guests/new"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add New Guest
      </Link>
      <ul className="mt-4 space-y-2">
        {filteredGuests.map((g) => (
          <li
            key={g.id}
            className="border p-3 rounded flex justify-between items-center"
          >
            <span>
              {g.first_name} {g.last_name} - {g.email}
            </span>
            <Link
              to={`/guests/${g.id}`}
              className="text-blue-600 hover:underline"
            >
              View / Edit
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
