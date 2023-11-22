import React from 'react';
import TournamentCard from './TournamentCard';

async function fetchTournaments() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/tournaments`);
    const data = await res.json();
    console.log(data)
    return data
    
}

async function TournamentList () {
 const tournaments = await fetchTournaments();
  return (
    <div>
      {tournaments.map(tournament => (
        <TournamentCard key={tournament.id} tournament={tournament} />
      ))}
    </div>
  );
};

export default TournamentList;
