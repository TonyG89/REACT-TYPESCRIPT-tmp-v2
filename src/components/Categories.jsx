import React from 'react'

export default function Categories({value, onClickCategory,categories}) {
    
    return (
        <div className="categories">
            <ul>
                {
                    categories.map((name, index) => {
                        return <li key={name} onClick={() => onClickCategory(index)} className={value == index ? "active" : ""}>{name}</li>
                    })
                }
            </ul>
        </div>
    )
}
