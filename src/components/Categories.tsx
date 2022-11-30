import React from "react";

type CategoriesProps = {
  value: number;
  onClickCategory: (i:number) => void;
  categories: string[];
};

const Categories: React.FC<CategoriesProps> = ({
  value,
  onClickCategory,
  categories,
}) => {
  return (
    <div className="categories">
      <ul>
        {categories.map((name, index) => {
          return (
            <li
              key={name}
              onClick={() => onClickCategory(index)}
              className={value === index ? "active" : ""}
            >
              {name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;
