import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  counterValue: number;
}

const initialState: CounterState = {
  counterValue: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.counterValue += 1;
    },
    decrement: (state) => {
      state.counterValue -= 1;
    },
    incrementWithPayload: (state, action: PayloadAction<number>) => {
      state.counterValue += action.payload;
    },
    incrementAsync: (state, action: PayloadAction<number>) => {
      state.counterValue += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, () => {
        // Add loading state
        console.log("incrementAsync.pending");
      })
      .addCase(
        incrementAsync.fulfilled,
        (state, action: PayloadAction<number>) => {
          state.counterValue += action.payload;
        }
      )
      .addCase(incrementAsync.rejected, () => {
        // Add error state
        console.log("incrementAsync.rejected");
      });
  },
});

const incrementAsync = createAsyncThunk(
  "counter/incrementAsync",
  async (amount: number) => {
    await new Promise((resolve, reject) =>
      setTimeout(() => {
        try {
          // throw new Error();
          resolve(amount);
        } catch (error) {
          reject();
        }
      }, 1000)
    );
    return amount;
  }
);

const counterReducer = counterSlice.reducer;
const { increment, decrement, incrementWithPayload } = counterSlice.actions;

export { increment, decrement, incrementWithPayload };
export { incrementAsync };
export default counterReducer;
