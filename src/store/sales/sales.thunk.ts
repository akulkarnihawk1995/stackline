import {createAsyncThunk} from "@reduxjs/toolkit";
import {SalesAPI} from "../../api/sales/salesAPI.ts";
import {Product} from "./sales.model.ts";

export const getSalesdata = createAsyncThunk('getSalesData',async(_, {rejectWithValue})=>{
    try{
        const response:Product[] = await SalesAPI.getData()
        return response
    }
    catch (err:unknown){
        if(!err.response){
            throw err
        }
        return rejectWithValue(err.response.data)
    }
})