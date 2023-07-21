import React, { useEffect, useState, lazy, Suspense } from "react";
import "./App.css";
import { Routes, Route, useParams, Link } from "react-router-dom";
import Home from "./pages/home";
import { Header } from "./components";
import GlobalLoadingIndicator from "./components/GlobalLoadingIndicator";

// import Products from "./pages/products";
// import ProductEditItem from "./pages/ProductEditItem";
// import Register from "./pages/register";
// import Login from "./pages/login";
// import AddProducts from "./pages/addProducts";

const Products = lazy(() => import("./pages/products"));
const ProductEditItem = lazy(() => import("./pages/ProductEditItem"));
const Register = lazy(() => import("./pages/register"));
const Login = lazy(() => import("./pages/login"));
const AddProducts = lazy(() => import("./pages/addProducts"));
const ReactQuery = lazy(() => import("./pages/reactQuery"));

const App = (props: any) => {
  const protectedRouter = (Component: React.FC) => {
    const token = localStorage.getItem("token");
    if (token) {
      return <Component />;
    } else {
      return <Login />;
    }
  };
  return (
    <div className="app">
      <Header />
      <GlobalLoadingIndicator />
      <main className="main">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/add" element={<AddProducts />} />
            <Route path="/products/edit/:id" element={<ProductEditItem />} />
            <Route path="/reactQuery" element={<ReactQuery />} />
            <Route path="*" element={<h2>404 Not Found</h2>} />
          </Routes>
        </Suspense>
      </main>
      {/* <footer>footer</footer> */}
    </div>
  );
};

export default App;
