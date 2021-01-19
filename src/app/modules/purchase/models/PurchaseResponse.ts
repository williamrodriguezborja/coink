import { PurchaseItem } from "./PurchaseItem";

export interface PurchaseResponse{
    headers: object,
    count: number, 
    items: PurchaseItem[]
}