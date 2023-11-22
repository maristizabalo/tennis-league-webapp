import React from 'react';
import { useSession } from "next-auth/react";

const TournamentCard = ({ tournament }) => {
  const { data: session } = useSession();

  const showAdminButtons = session && session.user.rol === 'Administrador';
  const showPlayerButtons = session && session.user.rol === 'Jugador';
  const AnonymusUser = !!session

  return (
    <div className="card">
      <div className="card-header">
        <h5 className="card-title">{tournament.name}</h5>
        {/* Botones según el rol y la sesión */}
        <div>
          <button className="btn btn-primary">Ver Torneo</button>
          {showAdminButtons  && (
            <>
              <button className="btn btn-warning">Modificar</button>
              <button className="btn btn-danger">Eliminar</button>
            </>
          )}
          {showPlayerButtons || AnonymusUser && (
            <button className="btn btn-success">Inscribirse</button>
          )}
        </div>
      </div>
      <div className="card-body">
        <p className="card-text">{tournament.description}</p>
        <p className="card-text">Jugadores inscritos: {tournament.registeredPlayers}</p>
        {/* Más detalles del torneo */}
      </div>
    </div>
  );
};

export default TournamentCard;