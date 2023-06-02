import React from 'react'


export enum ProductActionType {
    START_FETCHING = "START_FETCHING",
    FETCH_SUCCESS = "FETCH_SUCCESS",
    FETCH_ERROR = "FETCH_ERROR",
    REMOVE_PRODUCT = "REMOVE_PRODUCT"
}

const ProductReducer = (state : any , payload : any) =>{
    switch (payload.type){
        case ProductActionType.START_FETCHING:
            return {
                error : "",
                loading : true,
                products : [] 
            }
        case ProductActionType.FETCH_SUCCESS:
            return {
                error : "",
                loading : false,
                products : payload.data
            }
        case ProductActionType.FETCH_ERROR:
            return {
                error : payload.error,
                loading : false,
                products : []
            }
        case ProductActionType.REMOVE_PRODUCT:
            return {
                ...state,
                products : state.products.filter((product : any)=> product.id !== payload.id)
            }
        default:
            return state
    }

}

export default ProductReducer
