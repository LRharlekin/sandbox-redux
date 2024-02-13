import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { User as UserType } from "../../misc/types";

interface UserState {
  loading: boolean;
  users: Array<UserType>;
  error: string | null;
}

const initialState: UserState = {
  loading: false,
  users: [],
  error: null,
};

// Generates pending, fulfilled, and rejected action types
const fetchUsers = createAsyncThunk("user/fetchUsers", () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response: AxiosResponse) => response.data);
});

//
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchUsers.fulfilled,
        (state, action: PayloadAction<Array<UserType>>) => {
          state.loading = false;
          state.users = action.payload;
        }
      );
    // .addCase(
    //   fetchUsers.rejected,
    //   (state, action: PayloadAction<AxiosError>) => {
    //     state.loading = false;
    //     state.error = action.payload.message;
    //   }
    // )
  },
});

const userReducer = userSlice.reducer;
// const { < only synchronous Actions here> } = userSlice.actions;

export { fetchUsers };
export default userReducer;
