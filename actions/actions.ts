import { IBillboard, ICategory, IProduct, ISize } from "@/common.types";
import qs from "query-string";

export const url = `${process.env.NEXT_PUBLIC_API_URL}`;

//Categories
// 1.Get all categories
export const getCategories = async (): Promise<ICategory[]> => {
  const res = await fetch(`${url}/categories`);
  return res.json();
};

// 2.Get a single category by its id
export const getCategory = async (id: string): Promise<ICategory> => {
  try {
    const res = await fetch(`${url}/categories/${id}`);
    return await res.json();
  } catch (error) {
    throw new Error("Error fetching product ");
  }
};

export const getBillboards = async (): Promise<IBillboard[]> => {
  const res = await fetch(`${url}/billboards`);
  return await res.json();
};
export const getBillboard = async (id: string): Promise<IBillboard> => {
  try {
    const res = await fetch(`${url}/billboards/${id}`);
    return await res.json();
  } catch (error) {
    throw new Error("Error fetching billboard ");
  }
};
// Fetch product
export const getProduct = async (id: string): Promise<IProduct> => {
  try {
    const res = await fetch(`${url}/products/${id}`);
    return await res.json();
  } catch (error) {
    throw new Error("Error fetching product ");
  }
};

type TQuery = {
  categoryId?: string;
  sizeId?: string;
  isFeatured?: boolean;
};

//Retrieve all
export const getProducts = async (query: TQuery): Promise<IProduct[]> => {
  const URL = `${url}/products`;
  const prodUrl = qs.stringifyUrl({
    url: URL,
    query: {
      categoryId: query.categoryId,
      sizeId: query.sizeId,
      isFeatured: query.isFeatured,
    },
  });

  const res = await fetch(prodUrl);
  return await res.json();
};

//Get the sizes
export const getSizes = async (): Promise<ISize[]> => {
  const sizes = await fetch(`${url}/sizes`);
  return await sizes.json();
};

// Categories
