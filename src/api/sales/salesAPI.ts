import {AppDispatch} from '../../store/store.ts'
import data from "./response.json";
import * as axios from "axios";

export class SalesAPI {
    public static async getData(){
        // const response = await axios.get("/sales-api",{
        //     headers:{
        //         "Content-Type": "application/json",
        //         Authorization:"Bearer"
        //     }
        // }).data
        console.log('data',data)
        return data;
    }
}