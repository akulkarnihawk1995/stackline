import data from "./response.json";
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