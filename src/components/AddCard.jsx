import React from "react";

function AddCard({ onAdd }) {
  return (
    <button onClick={onAdd} className="add-button">
      Add Card
    </button>
  );
}

export default AddCard;
