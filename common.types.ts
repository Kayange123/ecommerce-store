export interface IBillboard {
    id: string;
    label: string;
    imageUrl: string;
}

export interface ICategory {
    id: string;
    name: string;
    billboard: IBillboard;
}

export interface IImage {
    id: string;
    url: string
}
export interface IProduct {
    id: string;
    category: ICategory;
    name: string;
    price: string;
    isFeatured: boolean;
    size: ISize;
    images: IImage[];
}

export interface ISize {
    id: string;
    name: string;
    value: string;
}