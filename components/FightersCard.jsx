import React from "react";
import "./Zombie.css";

const FighterCard = ({ fighter, onAddToTeam }) => {
  return (
    <li key={fighter.id} className="fighter-card">
      <img src={fighter.img} alt={fighter.name} />
      <h3>{fighter.name}</h3>
      <p>Price: {fighter.price}</p>
      <p>Strength: {fighter.strength}</p>
      <p>Agility: {fighter.agility}</p>
      <button onClick={() => onAddToTeam(fighter)}>Add</button>
    </li>
  );
};

export default FighterCard;
