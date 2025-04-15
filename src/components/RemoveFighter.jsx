import React from "react";
import "./Zombie.css";

const RemoveFighter = ({
  team,
  setTeam,
  zombieFighters,
  setZombieFighters,
  setMoney,
  money,
}) => {
  const handleRemoveFighter = (fighter) => {
    const updateTeam = team.filter((f) => f.id !== fighter.id);
    const updatedZombieFighters = [...zombieFighters, fighter];

    setTeam(updateTeam);
    setZombieFighters(updatedZombieFighters);
    setMoney(money + fighter.price);
  };

  return (
    <div className="team-container">
      {team.map((member) => (
        <li key={member.id} className="team-member">
          <img src={member.img} alt={member.name} />
          <h4>{member.name}</h4>
          <p>Price: {member.price}</p>
          <p>Strength: {member.trength}</p>
          <p>Agility: {member.agility}</p>
          <button onClick={() => handleRemoveFighter(member)}>Remove</button>
        </li>
      ))}
    </div>
  );
};

export default RemoveFighter;
