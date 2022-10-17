import React from 'react'

export default function Categories() {
    const [activeCategory, setActiveCategory] = React.useState(2)

    const onClickCategory = (index) => {
        setActiveCategory(index)
    }

    const categories = ["Усі", "Худі", "Світшоти", "Футболки"]

    return (
        <div className="categories">
            <ul>
                {
                    categories.map((value, index) => {
                        return <li key={value} onClick={() => onClickCategory(index)} className={activeCategory === index ? "active" : ""}>{value}</li>
                    })
                }
            </ul>
        </div>
    )
}
