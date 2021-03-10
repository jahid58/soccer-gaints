import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./teamList.css";

const TeamList = (props) => {
  let team = props.team;
  let { strTeamBadge, strTeam, strSport, idTeam } = team;

  return (
    <div className="team_container px-5">
      <img src={strTeamBadge} className="img-fluid img-thumbnail" alt="" />
      <h3>{strTeam} </h3>
      <h6>{strSport}</h6>
      <Link to={`/teamDetails/${idTeam}`}>
        <button className="btn">
          Explore <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
        </button>
      </Link>
    </div>
  );
};

export default TeamList;
