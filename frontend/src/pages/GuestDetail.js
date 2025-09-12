import React from "react";
import { useParams } from "react-router-dom";

function GuestDetail() {
  const { id } = useParams();
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Guest Details</h2>
      <p>Details of guest with ID: {id}</p>
    </div>
  );
}

export default GuestDetail;
