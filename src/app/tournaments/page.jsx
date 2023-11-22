import TournamentList from '../../components/TournamentList'

async function fetchTournaments (){
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/tournaments`);
  const data = await res.jsonM
  return data.data
}

async function TournamentsPage ({tournaments}) {
  const tournaments = await fetchTournaments()
  console.log(tournaments)
  return (
    <div>
        
    </div>
  )
}

export default TournamentsPage