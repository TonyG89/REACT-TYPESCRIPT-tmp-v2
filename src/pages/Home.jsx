import React from 'react'

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import ClothesBlock from '../components/ClothesBlock';
import Skeleton from '../components/ClothesBlock/Skeleton'

export default function Home() {
    const [clothes, setClothes] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)
  
    React.useEffect(() => {
      fetch("https://630927d6722029d9dddf3c35.mockapi.io/blank_clothes")
        .then((res) => res.json())
        .then(arr => {
          setClothes(arr)
          setIsLoading(false)
        })
    }, [])
  
    return (
        <>
            <div className="content__top">
                <Categories />
                <Sort />
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
            </div>
        </>
    )
}
