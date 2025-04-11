// have 3 method can use
// method 1
import React from "react";
import "./Zombie.css";

const FighterCard = (props) => {
  return (
    <li key={props.fighter.id} className="fighter-card">
      <img src={props.fighter.img} alt={props.fighter.name} />
      <h3>{props.fighter.name}</h3>
      <p>Price: {props.fighter.price}</p>
      <p>Strength: {props.fighter.strength}</p>
      <p>Agility: {props.fighter.agility}</p>
      <button onClick={() => props.onAddToTeam(props.fighter)}>Add</button>
    </li>
  );
};

export default FighterCard;
// ================================================================================
// method 2
// const FighterCard = (props) => {
//   const { fighter, onAddToTeam } = props;
//   return (
//     <li key={fighter.id} className="fighter-card">
//       <img src={fighter.img} alt={fighter.name} />
//       <h3>{fighter.name}</h3>
//       <p>Price: {fighter.price}</p>
//       <p>Strength: {fighter.strength}</p>
//       <p>Agility: {fighter.agility}</p>
//       <button onClick={() => onAddToTeam(fighter)}>Add</button>
//     </li>
//   );
// };

// export default FighterCard;
// ================================================================================
// method 3 - Destructuring
// import React from "react";
// import "./Zombie.css";

// const FighterCard = ({ fighter, onAddToTeam }) => {
//   return (
//     <li key={fighter.id} className="fighter-card">
//       <img src={fighter.img} alt={fighter.name} />
//       <h3>{fighter.name}</h3>
//       <p>Price: {fighter.price}</p>
//       <p>Strength: {fighter.strength}</p>
//       <p>Agility: {fighter.agility}</p>
//       <button onClick={() => onAddToTeam(fighter)}>Add</button>
//     </li>
//   );
// };

// export default FighterCard;
