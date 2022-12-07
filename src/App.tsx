import React from "react";
import { Route, Routes } from "react-router-dom";
import "./scss/app.scss";

import Home from "./pages/Home";

import NotFound from "./pages/NotFound";
// import Cart from './pages/Cart';
// import ClothesCard from "./pages/ClothesCard";
// import clothes from './assets/blank_clothes.json'

import Layout from "./components/Layout";
import Loadable from "react-loadable";

const Waiting: React.FC = () => <h4>Зачейкате... завантажується сторінка!</h4>;


const Cart = Loadable({
  loader: () => import(/*webpackChunkName:'Cart'*/ "./pages/Cart"),
  loading: Waiting,
});

const ClothesCard = React.lazy(
  () => import(/* webpackChunkName: "ClothesCard" */ "./pages/ClothesCard")
);

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route
            path="cart"
            element={
              
                <Cart />

            }
          />
          <Route path="clothes/:id" element={
          <React.Suspense fallback={<Waiting />}>
            <ClothesCard />
            </React.Suspense>} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
