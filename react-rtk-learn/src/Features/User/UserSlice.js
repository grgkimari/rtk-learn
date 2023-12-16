import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
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
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
  },
});

export default UserSlice.reducer;
const _fetchUsers = fetchUsers;
export { _fetchUsers as fetchUsers };
