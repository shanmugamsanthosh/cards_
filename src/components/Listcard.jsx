import React, { useState, useEffect } from "react";
import { GetCards, AddCards, DeleteCards } from "../api/ApiCall.jsx";
import Card from "./Card";
import AddCard from "./AddCard";

function ListCard() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false); // Loading state

  useEffect(() => {
    fetchCards();
  }, []);

  const fetchCards = async () => {
    try {
      const response = await GetCards();
      setCards(response.data);
    } catch (error) {
      console.error("Error fetching cards:", error);
    }
  };

  const handleAdd = async () => {
    const newId = cards.length > 0 ? Math.max(...cards.map((card) => card.id)) + 1 : 1;
    const newCard = { id: newId, title: `Card ${newId}`, description: "New card" };

    setLoading(true); 
    try {
      const response = await AddCards(newCard);
      setCards((prevCards) => [...prevCards, response.data]);
    } catch (error) {
      console.error("Error adding card:", error);
    } finally {
      setLoading(false); 
    }
  };

  const handleDelete = async (id) => {
    setLoading(true); 
    try {
      await DeleteCards(id);
      setCards((prevCards) => prevCards.filter((card) => card.id !== id));
    } catch (error) {
      console.error("Error deleting card:", error);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <>
      <div className="title">
        <div>
          <span className="title_of_page">Card List :</span>
        </div>
        <div className="add_button">
          <AddCard onAdd={handleAdd} />
        </div>
      </div>
        <div style={{display: "block",height: "40px"}}>
        {loading && <div className="loader">Loading...</div>} {/* Loader */}
        </div>
      <div className="card-container">
        {cards.map((card) => (
          <Card key={card.id} card={card} onDelete={handleDelete} />
        ))}
      </div>
      
    </>
  );
}

export default ListCard;
