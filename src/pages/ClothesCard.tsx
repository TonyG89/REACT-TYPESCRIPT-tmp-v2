import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../scss/components/_clothes-card.scss";

const ClothesCard: React.FC = () => {
  const [clothes, setClothes] = React.useState<{
    title: string;
    brand: number;
    size: [string];
    link: string;
    price: number;
  }>();
  const typeBrand: [string, string] = ["Fruit of the Loom", "Gildan"];
  const params = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchClothes() {
      try {
        const { data } = await axios.get(
          "https://630927d6722029d9dddf3c35.mockapi.io/blank_clothes/" +
            params.id
        );
        setClothes(data);
      } catch (error) {
        console.warn(error);
        alert("сталася помилка");
        navigate("/");
      }
    }
    fetchClothes();
  }, []);

  if (!clothes) {
    return <>Зачекайте...</>;
  }

  return (
    <div className="card__block">
      <h2 className="card__title">{clothes.title}</h2>
      <div className="card">
        <img src={`../img/clothes/${clothes.link}.jpg`} />
        <div className="contents">
          <div className="content">
            Бренд: <span>{typeBrand.join(', ')}</span>
          </div>
          <div className="content">
            Розмір: <span>{clothes.size.join(', ')}</span>
          </div>
          <div className="content">
            Ціна: <span>{clothes.price}грн</span>
          </div>
        </div>
      </div>
      <Link
        to="/"
        className="button button--black"
        style={{ margin: "30px auto", display: "block", width: "200px" }}
      >
        <span>Повернутись назад</span>
      </Link>
    </div>
  );
};

export default ClothesCard;
