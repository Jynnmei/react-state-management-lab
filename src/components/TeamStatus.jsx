import React from "react";
import "./Zombie.css";

const TeamStatus = ({ team, money }) => {
  const totalStrength = team.reduce((sum, member) => sum + member.strength, 0);
  const totalAgility = team.reduce((sum, member) => sum + member.agility, 0);

  const renderTeamList = () => {
    if (team.length === 0) {
      return <p className="empty-team-message">Pick some team members!</p>;
    }
    return (
      <div className="team-container">
        {team.map((member) => (
          <li key={member.id} className="team-members">
            <img src={member.img} alt={member.name} />
            <h4>{member.name}</h4>
            <p>Price: {member.price}</p>
            <p>Strength: {member.strength}</p>
            <p>Agility: {member.agility}</p>
          </li>
        ))}
      </div>
    );
  };

  return (
    <div className="team-status">
      <p>Current Money: {money}</p>
      <p>Total Strength: {totalStrength}</p>
      <p>Total Agility: {totalAgility}</p>
      <h3>Team: {renderTeamList()}</h3>
    </div>
  );
};

export default TeamStatus;
