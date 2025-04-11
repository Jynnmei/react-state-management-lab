import React from "react";

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
        <div key={member.id} className="team-member">
          🔸 {member.name}
          <button onClick={() => handleRemoveFighter(member)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default RemoveFighter;
