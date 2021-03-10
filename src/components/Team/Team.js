import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './teams.css'
import female from '../../images/female.png';
import male from '../../images/male.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag, faFutbol, faMapMarkerAlt, faMars} from '@fortawesome/free-solid-svg-icons';



const Team = () => {
    const {id} = useParams()
    const [details,setDetails] = useState({})
    useEffect(()=>{
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setDetails(...data.teams))
    },[id])
    const {strTeam,strTeamBadge,intFormedYear,strCountry,strGender,strSport,strDescriptionEN}= details;
    const teamPoster =( strGender === 'Male')? male : female
   
    return (
        <div className='team'>
           <div className="details_heading">
               <img src={strTeamBadge} alt=""/>
           </div>
           <div className="team_details">
               <div className="details d-flex">
                   <div className="info">
                      <h3>{strTeam}</h3>
                      <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Founded : {intFormedYear}</p>
                      <p><FontAwesomeIcon icon={faFlag} /> Country : {strCountry}</p>
                      <p> <FontAwesomeIcon icon={faFutbol} /> Sport type : {strSport}</p>
                      <p><FontAwesomeIcon icon={faMars} /> Gender : {strGender}</p>
                   </div>
                   <img src={teamPoster} className='img-fluid' alt=""/>
               </div>
             
           </div>
           <div className="description">
               <p> {strDescriptionEN}</p> <br/>
              <footer>
                  {/* <Link to={strTwitter}><FontAwesomeIcon icon={fa} /></Link> */}
                  {/* <Link to={strFacebook}><i class="fab fa-facebook-f"></i></Link> */}
                  {/* <Link to={strInstagram}><FontAwesomeIcon icon={faIsntagram} /></Link> */}
              </footer>
               </div>
        </div>
    );
};

export default Team;