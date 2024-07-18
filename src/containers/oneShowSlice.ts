import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {RootState} from '../app/store';
import axiosApi from '../axiosApi';

export interface OneShowType {
  name: string;
  summary: string;
  image: {
    medium: string,
  };
  genres: Array<string>;
  rating: {
    average: number,
  };
  language: string;
  network: {
    country: {
      name: string,
    }
  };
}

export interface OneShowState {
  show: OneShowType;
  loading: boolean;
  error: boolean;
}

const initialState: OneShowState = {
  show: {
    name: '',
    summary: '',
    image: {
      medium: '',
    },
    genres: [],
    rating: {
      average: 0,
    },
    language: '',
    network: {
      country: {
        name: '',
      }
    }
  },
  loading: false,
  error: false,
};

export const fetchShow = createAsyncThunk<OneShowType, string, { state: RootState }>(
  'show/fetch',
  async (id: string) => {
    const response = await axiosApi.get<OneShowType>(`/shows/${id}`);
    return response.data;
  }
);

export const oneShowSlice = createSlice({
  name: 'oneShow',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchShow.pending, (state) => {
      state.error = false;
      state.loading = true;
    })
      .addCase(fetchShow.fulfilled, (state, action) => {
        state.loading = false;
        state.show = action.payload;
      })
      .addCase(fetchShow.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  }
});

export const oneShowReducer = oneShowSlice.reducer;
