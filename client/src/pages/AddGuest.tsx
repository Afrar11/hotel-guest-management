import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import pb from "../../api";

export default function AddGuest() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    address: "",
    date_of_birth: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    await pb.collection("guests").create(form);
    navigate("/guests");
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Add New Guest</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {Object.keys(form).map((key) => (
          <input
            key={key}
            type={key === "date_of_birth" ? "date" : "text"}
            name={key}
            placeholder={key.replace("_", " ")}
            value={(form as any)[key]}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
        ))}
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Save Guest
        </button>
      </form>
    </div>
  );
}
