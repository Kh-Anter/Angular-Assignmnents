export interface IProduct{
    id:Number;
    name:String;
    quantity:Number;
    price:Number;
    img:String
}

export interface ICategory{
    id:Number;
    name:String;
}

export enum discountOffers{
    "No Discount",
    "10%",
    "15%",
}
