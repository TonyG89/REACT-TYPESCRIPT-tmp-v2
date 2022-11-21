import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const Title = styled.h2`
margin: 30px;
font-size: 4rem;
  padding: 0;
  box-sizing: border-box;
  text-transform: uppercase;
`

const Card = styled.div`
width: 60%;
display:flex;
padding:30px 0;
`

const Img = styled.img`
max-width: 300px;
padding-right: 20px;
`

const ClothesCard = () => {
    const params = useParams()
    const [clothes, setClothes] = React.useState({})

    const container = {
        "max-width": "600px",
        border: "1px solid #77777737",
        "border-radius": "30px",
        margin: "0 auto",
        "box-shadow": "2px  2px 10px #f1f1f1"
    }

    const textBlock = {

    }

    const Div = styled.div`
width:100%;
font-size: 2rem;
& span{
    color:grey;
}
`

    const typeBrand = ["Fruit of the Loom", "Gildan"]
    const typeSize = ["S", "M", "L", "XL"]

    React.useEffect(() => {
        async function fetchClothes() {
            try {
                const { data } = await axios.get("https://630927d6722029d9dddf3c35.mockapi.io/blank_clothes/" + params.id)
                setClothes(data)
                console.log(data);
            } catch (error) {
                console.warn(error)
                alert("сталася помилка")
            }
        }
        fetchClothes()
    }, [])

    return (
        <div style={container}>
            <Title>{clothes.title}</Title>
            <Card>
                <Img src={`../img/clothes/${clothes.link}.jpg`} />
                <div style={textBlock}>
                    <Div>Бренд: <span>{clothes.brand}</span></Div>
                    <Div>Розмір: <span>{clothes.size}</span></Div>
                    <Div>Ціна: <span>{clothes.price}грн</span></Div>
                </div>
            </Card>
            <Link to="/" class="button button--black" style={{ margin: "30px auto", display: "block", width: "200px" }}>
                <span>Повернутись назад</span>
            </Link>
        </div>
    )
}

export default ClothesCard