import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./team.css";
import female from "../../images/female.png";
import male from "../../images/male.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faFlag,
  faFutbol,
  faMapMarkerAlt,
  faMars,
} from "@fortawesome/free-solid-svg-icons";

const TeamDetails = () => {
  const { id } = useParams();

  // data loading from api
  const [details, setDetails] = useState({});
  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDetails(...data.teams));
  }, [id]);
  console.log(details)
  const {
    strTeam,
    strTeamBadge,
    intFormedYear,
    strCountry,
    strGender,
    strSport,
    strDescriptionEN,
    strTwitter,
    strFacebook,
    strInstagram,
  } = details;
  const teamPoster = strGender === "Male" ? male : female;

  // social redirecting handler
  function handleClick(url) {
    window.location = `https://${url}`;
  }

  return (
    <div className="team">
      <div className="details_heading">
        <img src={strTeamBadge} alt="" />
      </div>
      <div className="team_details">
        <div className="details d-flex">
          <div className="info">
            <h3>{strTeam}</h3>
            <p>
              <FontAwesomeIcon icon={faMapMarkerAlt} /> Founded :{" "}
              {intFormedYear}
            </p>
            <p>
              <FontAwesomeIcon icon={faFlag} /> Country : {strCountry}
            </p>
            <p>
              {" "}
              <FontAwesomeIcon icon={faFutbol} /> Sport type : {strSport}
            </p>
            <p>
              <FontAwesomeIcon icon={faMars} /> Gender : {strGender}
            </p>
          </div>
          <img src={teamPoster} className="img-fluid" alt="" />
        </div>
      </div>
      <div className="description">
        <p> {strDescriptionEN}</p> <br />
        <footer>
          <button
            type="button"
            className="icon"
            onClick={() => handleClick(strTwitter)}
          >
            <FontAwesomeIcon icon={faTwitter} />
          </button>
          <button
            type="button"
            className="icon"
            onClick={() => handleClick(strFacebook)}
          >
            <FontAwesomeIcon icon={faFacebook} />
          </button>
          <button
            type="button"
            className="icon"
            onClick={() => handleClick(strInstagram)}
          >
            <FontAwesomeIcon icon={faInstagram} />
          </button>
        </footer>
      </div>
    </div>
  );
};

export default TeamDetails;
