import React, { useEffect, useState } from 'react';
import TeamList from '../TeamList/TeamList';
import './home.css'


const Home = () => {
    let [teams,setTeams] = useState([])
    useEffect(()=>{
        const url = `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setTeams(data.teams))
    },[])

   
    return (
        <div className='league_container'>
             <div className="heading"><h1>Soccer Giants</h1></div>
            <div className='teams_container d-flex flex-wrap justify-content-center'>
               {
               teams && teams.map(team=>(<TeamList key ={team.idTeam} team={team}></TeamList>))
               }  
            </div>

        </div>
    );
};

export default Home;