export type CartItem = {
    title: string;
    id: string;
    link: string;
    brand: string;
    size: string;
    color: string;
    price: number;
    category?: string;
    count?: number;
    rating?: number;
}

export type ItemInfo = {
    title: string;
    id: string;
    link: string;
    brand: string[];
    size: string[];
    color: string;
    price: number;
    category?: string;
    count?: number;
    rating?: number;
}

export interface CartSliceState {
    totalPrice: number;
    items: CartItem[];
}

export type FetchClothesArgs = {
    categoryId: number;
    sort: number;
    page: number;
    search: string;
}

export type Clothes = {
    id: string;
    title: string;
    link: number;
    brand: string;
    size: string;
    color: string;
    price: number;
    count?: number;
}

export enum Status {
    LOADING = "loading",
    SUCCESS = "success",
    ERROR = "error"
}

export interface ClothesSliceState {
    items: Clothes[];
    status: Status;
}

export interface FilterSliceState {
    categoryId?: number;
    sort?: number;
    page?: number;
    search?: string;
}

export type FetchPageParams = {
    url: string;
    urlApendix: string;
    goodsOnPage: string;
}