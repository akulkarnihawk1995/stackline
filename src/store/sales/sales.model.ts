export type initialState = {
    product:Product[],
    error:Error,
}
export type error = {
    message: string,
    statusCode:string
}
export type Product = {
    id: string;
    title: string;
    image: string;
    subtitle: string;
    brand: string;
    reviews: Review[];
    retailer: string;
    details: string[];
    tags: string[];
    sales: Sale[];
};

export type Review = {
    customer: string;
    review: string;
    score: number;
};

export type Sale = {
    weekEnding: string;
    retailSales: number;
    wholesaleSales: number;
    unitsSold: number;
    retailerMargin: number;
};
