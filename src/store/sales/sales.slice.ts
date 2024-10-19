import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {getSalesdata} from "./sales.thunk.ts";
import {intialState} from "./sales.state.ts";
import {Product} from "./sales.model.ts";

const salesSlice = createSlice({
    extraReducers: (builder) => {
        builder.addCase(getSalesdata.pending, (state, action) => {
            state.product = [];
        })
        builder.addCase(getSalesdata.fulfilled, (state, action) => {
            state.product = action.payload;
        })
        builder.addCase(getSalesdata.rejected, (state, action) => {
            state.product = []
        })
    },
    initialState: intialState,
    name: 'sales',
    reducers: {
        setSalesData(state, action: PayloadAction<Product[]>) {
            return {...state, ...action.payload};
        },
    }
});

export default salesSlice.reducer;
export const { setSalesData } = salesSlice.actions;

