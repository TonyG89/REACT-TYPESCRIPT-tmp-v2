import React, { useState } from 'react'
import ColorClothes from './ColorClothes';

export default function ClothesBlock(props) {
  const { title, id, link = 0, brand, sizes, color, price, category = "clothes", rating } = props
  const typeBrand = ["Fruit of the Loom", "Gildan"]

  // add count
  const [count, setCount] = useState(0)
  const onClickBtn = () => setCount(count + 1)

  // active btn
  const [activeBrand, setActiveBrand] = useState(0)
  const [activeSize, setActiveSize] = useState(0)


  return (
    <div className="clothes-block">
      <img
        className="clothes-block__image"
        src={`./img/clothes/${link}.jpg`}
        alt={category}
      />
      <h4 className="clothes-block__title">{title}</h4>
      <div className="clothes-block__selector">
        <ul>
          {brand.map((type) => (
            <li key={type}
              className={activeBrand === type ? "active" : ""}
              onClick={() => setActiveBrand(type)}
              >
              {typeBrand[type]}
            </li>
          ))}
        </ul>
        <ul>
          {sizes.map((size, index) => (
            <li key={size}
              className={activeSize === index ? "active" : ""}
              onClick={() => setActiveSize(index)}
            >
            {size}
            </li>
          ))}
          {/* <ColorClothes/> */}
        </ul>
      </div>
      <div className="clothes-block__bottom">
        <div className="clothes-block__price">{price} грн</div>
        <button className="button button--outline button--add" onClick={onClickBtn}>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Додати</span>
          <i>{count}</i>
        </button>
      </div>
    </div>
  )
}