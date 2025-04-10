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
          <div key={member.id} className="team-member">
            🔹 {member.name}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="team-status">
      <p>
        Current Money: <span className="money-value">{money}</span>
      </p>
      <p>Total Strength: {totalStrength}</p>
      <p>Total Agility: {totalAgility}</p>
      <p>Team: {renderTeamList()}</p>
    </div>
  );
};

export default TeamStatus;
