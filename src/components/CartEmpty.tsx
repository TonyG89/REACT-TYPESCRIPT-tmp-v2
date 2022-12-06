import React from "react";
import { Link } from "react-router-dom";

const CartEmpty: React.FC = () => {
  return (
    <div className="content">
      <div className="container container--cart">
        <div className="cart cart--empty">
          <h2>
            Кошик пустий<span>😕</span>
          </h2>
          <p>
            Скоріше за все ви нічого не замовили.
            </p>
          <img src="./img/empty-cart.png" alt="Empty cart" />
          <Link to="/" className="button button--black">
            <span>Повернутись назад</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartEmpty;
