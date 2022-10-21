import React from 'react'
import axios from 'axios';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import ClothesBlock from '../components/ClothesBlock';
import Skeleton from '../components/ClothesBlock/Skeleton'

export default function Home() {
    const [clothes, setClothes] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)
    const [categoryId, setCategoryId] = React.useState(0)
    const [sortType, setSortType] = React.useState(0)

    const url = "https://630927d6722029d9dddf3c35.mockapi.io/blank_clothes?"

    const categories = ["Усі", "Худі", "Світшоти", "Футболки"]


    React.useEffect(() => {
        setIsLoading(true)
        const sortBy = ["title", "color", "price"]
        const filterByCategory = categoryId > 0 ? "category=" + categories[categoryId] + "&" : ''
        const sortingBy = "sortBy=" + sortBy[sortType] + "&order=ASC"
        axios.get(url + filterByCategory + sortingBy)
            .then((res) => {
                const arr = res.data
                setClothes(arr)
                setIsLoading(false)
            })

        window.scroll(0, 0)
    }, [categoryId, sortType])

    return (
        <>
            <div className="container">
                <div className="content__top">
                    <Categories categories={categories} value={categoryId} onClickCategory={(id) => setCategoryId(id)} />
                    <Sort sort={sortType} onClickSort={(type) => setSortType(type)} />
                </div>
                <h2 className="content__title">Усі</h2>
                <div className="content__items">
                    {isLoading ? [...new Array(6)].map((i, index) => <Skeleton key={index} />) : clothes.map(obj => (<ClothesBlock key={obj.id}
                        title={obj.title + " " + obj.color}
                        price={obj.price}
                        link={obj.link}
                        brand={obj.brand}
                        sizes={obj.size} />
                    ))
                    }
                </div></div>
        </>
    )
}
