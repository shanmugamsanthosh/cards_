import React from "react";
import { motion } from "framer-motion";

function Card({ card, onDelete }) {
  return (
    <motion.div
      className="card"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
    >
      <section>
        <div class="container">
          <div class="card">
            <div class="content">
              <div class="contentBx">
                <h1>{card.title}</h1>
                <p>{card.name}</p>
                <p>{card.country}</p>
                <p>{card.mobile}</p>
              </div>
            </div>
            <ul class="sci">
              <li>
                <button onClick={() => onDelete(card.id)}>Delete</button>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default Card;
