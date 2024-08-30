import React, { useState, useEffect } from 'react';
import { Tournament } from '@dto/types';

const TournamentsList: React.FC = () => {
  const [tournaments, setTournaments] = useState<Tournament[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchTournaments = async () => {
    setIsLoading(true);
    try {
      // Use the API exposed via contextBridge
      const tournaments: Tournament[] = await window.api.getTournaments();
      setTournaments(tournaments);
    } catch (error) {
      console.error('Failed to fetch tournaments:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTournaments();
  }, []);

  return (
    <div>
      <h1>Tournaments List</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {tournaments.map((tournament) => (
            <li key={tournament.id}>
              <strong>{tournament.name}</strong> - {tournament.location} on {tournament.date}
            </li>
          ))}
        </ul>
      )}
      <button onClick={fetchTournaments}>Refresh Tournaments</button>
    </div>
  );
};

export default TournamentsList;
