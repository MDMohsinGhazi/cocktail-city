import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCocktail = createAsyncThunk(
  "cocktail/fetch",
  async (search, { rejectWithValue }) => {
    try {
      const res = await fetch(
        `https://thecocktaildb.com/api/json/v1/1/search.php?s=${search}`
      );
      return res.json();
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const fetchCocktailById = createAsyncThunk(
  "cocktail/fetchById",
  async (id, { rejectWithValue }) => {
    try {
      const res = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      return res.json();
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

const initialState = {
  cocktails: [],
  cocktail: [],
  isLoading: false,
  isError: false,
  message: "",
};

const cocktailSlice = createSlice({
  name: "cocktail",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCocktail.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchCocktail.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.cocktails = payload.drinks;
    },
    [fetchCocktail.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.isError = true;
      state.message = payload;
    },
    [fetchCocktailById.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchCocktailById.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.cocktail = payload.drinks[0];
      console.log();
    },
    [fetchCocktailById.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.isError = true;
      state.message = payload;
    },
  },
});

export default cocktailSlice.reducer;
