import React from "react";
import { Link } from "react-router-dom";

const dummyGuests = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
];

function GuestsList() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Guest List</h2>
      <ul>
        {dummyGuests.map((guest) => (
          <li key={guest.id}>
            <Link to={`/guest/${guest.id}`} className="text-blue-500">
              {guest.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GuestsList;
