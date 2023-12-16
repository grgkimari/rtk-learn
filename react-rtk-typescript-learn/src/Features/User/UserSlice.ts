import { createSlice, createAsyncThunk, PayloadAction, } from "@reduxjs/toolkit";
import axios from "axios";
import { UserSliceType } from "./User.types";
import { User } from "./User.types";
const initialState : UserSliceType = {
  loading: false,
  data: [],
  error: "",
};

const fetchUsers = createAsyncThunk("UserSlice/fetchUsers", async () => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/users");
  const data = response.data
  return data;
});

const UserSlice = createSlice({
  name: `UserSlice`,
  reducers : {},
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Oops! Something went wrong.";
    });
    builder.addCase(fetchUsers.fulfilled, (state, action : PayloadAction<Array<User>>) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
  },
});

export default UserSlice.reducer;
const _fetchUsers = fetchUsers;
export { _fetchUsers as fetchUsers };
