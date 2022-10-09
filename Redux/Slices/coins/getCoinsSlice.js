import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  coins: [],
};

export const getAllCoinsReq = createAsyncThunk(
  "getCoisnSlice/fetchCoins",
  async () => {
    const coins = await axios.request({
      method: "GET",
      url: "https://coinranking1.p.rapidapi.com/coins",
      params: {
        referenceCurrencyUuid: "yhjMzLPhuIDl",
        timePeriod: "24h",
        "tiers[0]": "1",
        orderBy: "marketCap",
        orderDirection: "desc",
        limit: "50",
        offset: "0",
      },
      headers: {
        "X-RapidAPI-Key": "776db0c613msh80f83f8336ecc9ap1dd3c6jsn071b2a28693e",
        "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
      },
    });
    return coins;
  }
);

const getCoisnSlice = createSlice({
  name: "coinsSlice",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllCoinsReq.fulfilled]: (state, action) => {
      state.coins = action.payload;
      console.log(JSON.parse(JSON.stringify(action.payload)));
    },
  },
});
export default getCoisnSlice.reducer;
