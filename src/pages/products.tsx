import { AxiosError } from "axios";
import { useEffect, useReducer, useState } from "react";
import { Link } from "react-router-dom";
import { ProductItem } from "../components";
import WithAuth from "../helper/withAuth";
import { IProduct, getProductsList, removeProduct } from "../service/products";
import ProductReducer, { ProductActionType } from "../reducers/productsReducer";

const InitialState = {
  loading: true,
  error: "",
  products: [],
};

const Products = () => {
  const [state, dispatch] = useReducer(ProductReducer, InitialState);

  useEffect(() => {
    dispatch({ type: ProductActionType.START_FETCHING });
    getProductsList()
      .then((res) => {
        dispatch({ type: ProductActionType.FETCH_SUCCESS, data: res });
      })
      .catch((err: AxiosError) => {
        dispatch({ type: ProductActionType.FETCH_ERROR, error: err.message });
      });
  }, []);

  const handleProductItemRemove = (id: string) => {
    if (window.confirm("Are you sure ?")) {
      removeProduct(id).then((res) => {
        if (res.status === 200) {
          dispatch({ type: ProductActionType.REMOVE_PRODUCT, id });
        }
      });
    }
  };

  return (
    <div style={{ width: "100%" }}>
      <Link to={"/products/add"}> Add new product</Link>
      <h2>Products List</h2>
      {state.error ? (
        <h3>{state.error}</h3>
      ) : (
        <>
          {state.loading ? (
            <h3>Loading ... </h3>
          ) : (
            <ul className="prodctsList">
              {state.products &&
                state.products.map((product: IProduct, index) => {
                  return (
                    <ProductItem
                      key={index}
                      data={product}
                      onRemove={handleProductItemRemove}
                    />
                  );
                })}
            </ul>
          )}
        </>
      )}
    </div>
  );
};
export default WithAuth(Products);
