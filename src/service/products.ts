import api from "./api";


export interface IProduct {
    "name" : string,
    "description" : string,
    "id" : string,
    "price" : number,
    "category" : string
    "user" : {
        "id" : string,
        "name" : string,
        "family" : string,
        "username" : string,
    }
}


export interface IAddProduct {
    "name" : string,
    "description" : string,
    "price" : number,
    "category" : string
}

export interface IEditProduct {
    "id" : string,
    "name" : string,
    "description" : string,
    "price" : number,
    "category" : string,
    "user" : {}
}
export const addNewProduct  = async (data : IAddProduct) => {
    return await api.post("api/products", data);
}
export const getProductsList  = async () : Promise<IProduct[]> => {
    const response = await api.get("api/products");
    return response.data;
}

export const getProductItem  = async (id:string) : Promise<IProduct> => {
    const response = getProductsList();
    return (await response).filter((item) => item.id === id)[0];
}

export const removeProduct  = async (id : string) => {
    const response = await api.delete("api/products" , {
        data : {
            id
        }
    });
    return response;
}



export const editProduct  = async (data : IEditProduct) => {
    const response = await api.put("api/products" , data);
    return response;
}
