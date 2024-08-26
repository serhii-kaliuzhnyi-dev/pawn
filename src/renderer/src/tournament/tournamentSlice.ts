import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Player {
  id: string;
  name: string;
}

export interface TournamentState {
  name: string;
  place: string;
  players: Player[];
  currentTour: number;
  referee: string;
}

const initialState: TournamentState = {
  name: '',
  place: '',
  players: [],
  currentTour: 0,
  referee: '',
};

const tournamentSlice = createSlice({
  name: 'tournament',
  initialState,
  reducers: {
    setName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    setPlace(state, action: PayloadAction<string>) {
      state.place = action.payload;
    },
    addPlayer(state, action: PayloadAction<Player>) {
      state.players.push(action.payload);
    },
    setCurrentTour(state, action: PayloadAction<number>) {
      state.currentTour = action.payload;
    },
    setReferee(state, action: PayloadAction<string>) {
      state.referee = action.payload;
    },
  },
});

export const { setName, setPlace, addPlayer, setCurrentTour, setReferee } = tournamentSlice.actions;
export default tournamentSlice.reducer;
