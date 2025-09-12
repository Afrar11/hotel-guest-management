import React, { useState } from "react";

function AddGuest() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Guest added: ${name}`);
    setName("");
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Add Guest</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Guest Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Guest
        </button>
      </form>
    </div>
  );
}

export default AddGuest;
