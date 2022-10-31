import React, { useState, useContext } from 'react'
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

import { setCategoryId } from '../redux/slices/filterSlice';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import ClothesBlock from '../components/ClothesBlock';
import Skeleton from '../components/ClothesBlock/Skeleton'
import Pagination from '../components/Pagination';
import { SearchContext } from '../App'

export default function Home() {
    const dispatch = useDispatch()
    const { categoryId, sort } = useSelector(state => state.filter)

    const [clothes, setClothes] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [page, setPage] = useState(1)
    const { search } = useContext(SearchContext)

    const url = "https://630927d6722029d9dddf3c35.mockapi.io/blank_clothes?"
    const categories = ["Усі", "Худі", "Світшоти", "Футболки"]

    const onClickCategory = (id) => {
        dispatch(setCategoryId(id))
    }
    console.log(sort);

    React.useEffect(() => {
        setIsLoading(true)
        const sortBy = ["title", "color", "price"]
        const filterByCategory = categoryId > 0 ? "category=" + categories[categoryId] + "&" : ''
        const sortingBy = "sortBy=" + sortBy[sort] + "&order=ASC"
        const searching = search ? "&search=" + search + "&" : ''
        axios.get(url + "page=" + page + "&limit=4&" + filterByCategory + sortingBy + searching)
            .then((res) => {
                const arr = res.data
                setClothes(arr)
                setIsLoading(false)
            })
        window.scroll(0, 0)
    }, [categoryId, sort, search, page])

    const clothesList = clothes.filter(item => {
        if (item.title.toLowerCase().includes(search.toLowerCase()) || item.color.toLowerCase().includes(search.toLowerCase())) {
            return true
        }
        return false
    }).map(obj => (<ClothesBlock key={obj.id}
        title={obj.title + " " + obj.color}
        price={obj.price}
        link={obj.link}
        brand={obj.brand}
        sizes={obj.size} />
    ))
    return (
        <>
            <div className="container">
                <div className="content__top">
                    <Categories categories={categories} value={categoryId} onClickCategory={onClickCategory} />
                    <Sort />
                </div>
                <h2 className="content__title">Усі</h2>
                <div className="content__items">
                    {isLoading ? [...new Array(6)].map((i, index) => <Skeleton key={index} />) : clothesList
                    }
                </div>
                <Pagination currentPage={page} onClickPage={(p) => setPage(p)} />
            </div>
        </>
    )
}
