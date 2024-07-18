import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {RootState} from '../app/store';
import axiosApi from '../axiosApi';

export interface ShowType {
  id: number;
  name: string;
}

export interface ApiShowSearchType {
  show: {
    id: number;
    name: string;
  }
}

export interface ShowsState {
  searchResults: ShowType[];
  loading: boolean;
  error: boolean;
}

const initialState: ShowsState = {
  searchResults: [],
  loading: false,
  error: false,
};


export const fetchShows = createAsyncThunk<ApiShowSearchType[], string, { state: RootState }>(
  'shows/fetch',
  async (searchString: string) => {
    const response = await axiosApi.get<ApiShowSearchType[] | null>(`/search/shows?q=${searchString}`);
    return response.data || [];
  }
);

export const showsSlice = createSlice({
  name: 'shows',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchShows.pending, (state) => {
      state.error = false;
      state.loading = true;
    })
      .addCase(fetchShows.fulfilled, (state, action) => {
        state.loading = false;
        state.searchResults = action.payload.map((showRaw) => ({name: showRaw.show.name, id: showRaw.show.id}));
      })
      .addCase(fetchShows.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  }
});

export const showsReducer = showsSlice.reducer;