import React, { useState, useContext, useEffect, useRef } from 'react'
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import ClothesBlock from '../components/ClothesBlock';
import Skeleton from '../components/ClothesBlock/Skeleton'
import Pagination from '../components/Pagination';
import { setCategoryId, setPage, setFilter, selectFilter } from '../redux/slices/filterSlice';
import { fetchClothes, selectClothes } from '../redux/slices/clothesSlice'

export default function Home() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const isMounted = useRef(false);
    const isSearch = useRef(false);

    const { items, status } = useSelector(selectClothes)
    const { categoryId, sort, page, search } = useSelector(selectFilter)

    const [allPages, setAllPages] = useState(0);
    const [allGoods, setAllGoods] = useState(0);

    const url = "https://630927d6722029d9dddf3c35.mockapi.io/blank_clothes?"
    const categories = ["Усі", "Худі", "Світшоти", "Футболки"]

    const onClickCategory = (id) => {
        dispatch(setCategoryId(id))
    }

    const onPageChange = (num) => {
        dispatch(setPage(num))
    }

    const getClothes = async () => {
        const goodsOnPage = 4
        const sortBy = ["title", "color", "price"]
        const filterByCategory = categoryId > 0 ? "category=" + categories[categoryId] + "&" : ''
        const sortingBy = "sortBy=" + sortBy[sort] + "&order=ASC"
        const searching = search ? "&search=" + search + "&" : ''
        const urlApendix = "page=" + page + "&" + filterByCategory + sortingBy + searching

        dispatch(fetchClothes({ url, urlApendix, goodsOnPage }))

        axios.get(url + urlApendix)
            .then(res => {
                setAllGoods(res.data.length)
                setAllPages(Math.ceil(res.data.length / goodsOnPage))
            })
            .catch(err => alert("сталася помилка - " + err))


    }

    useEffect(() => {
        if (isMounted.current) {
            const queryString = qs.stringify({
                categoryId, sort, page, search
            })
            navigate(`/?${queryString}`)
        }

        isMounted.current = true

    }, [categoryId, sort, page, search]);

    useEffect(() => {
        if (window.location.search) {
            const params = qs.parse(window.location.search.substring(1))
            dispatch(setFilter(params))
            isSearch.current = true
        }
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0)
        if (!isSearch.current) {
            getClothes()
        }
        isSearch.current = false
    }, [categoryId, sort, search, page])

    const clothesList = items.filter(item => {
        if (item.title.toLowerCase().includes(search.toLowerCase()) || item.color.toLowerCase().includes(search.toLowerCase())) {
            return true
        }
        return false
    }).map(obj => (<ClothesBlock
        key={obj.id}
        title={obj.title + " " + obj.color}
        id={obj.id}
        price={obj.price}
        link={obj.link}
        brand={obj.brand}
        sizes={obj.size}
        color={obj.color}
    />
    ))

    return (
        <>
            <div className="container">
                <div className="content__top">
                    <Categories categories={categories} value={categoryId} onClickCategory={onClickCategory} />
                    <Sort />
                </div>
                <h2 className="content__title">{categories[categoryId]} ({allGoods} товарів)</h2>

                {status === "error" ? (
                    <div className='content__error-info'><h2>Сталася помилка. Спробуй пізніше<icon>😕</icon></h2></div>
                ) : (
                    <div className="content__items"> {status === "loading" ? [...new Array(6)].map((i, index) => <Skeleton key={index} />) : clothesList}</div>
                )}


                <Pagination currentPage={page} onClickPage={onPageChange} allPages={allPages} />
            </div>
        </>
    )
}
