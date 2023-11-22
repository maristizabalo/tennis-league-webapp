async function fetchTournaments (){
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/tournaments`);
  const data = await res.json
  return data
}

async function TournamentsPage () {
  const tournaments = await fetchTournaments()
  console.log(tournaments, "AQUI DEBERIAN IR LOS TOURNAMENTS")
  return (
    <div>
        {JSON.stringify(tournaments)}
    </div>
  )
}

export default TournamentsPage