import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../tournament/store';
import { setName } from '../../tournament/tournamentSlice';

const TournamentComponent: React.FC = () => {
  const dispatch = useDispatch();
  const name = useSelector((state: RootState) => state.tournament.name);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setName(e.target.value));
  };

  return (
    <div>
      <input value={name} onChange={handleNameChange} placeholder="Tournament Name" />
    </div>
  );
};

export default TournamentComponent;
