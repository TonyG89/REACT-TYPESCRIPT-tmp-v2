import React from 'react'
import styles from './NotFoundBlock.module.scss';

const NotFoundBlock = () => {
    return (
        <>
        <div className="container">
            <h1>
                <span>
                    😮
                </span>
                <br />
                Сторінка не знайдена
            </h1>
            <p>На жаль, такої сторінки в нашому інтернет-магазині немає</p>
            </div>
        </>
    )
}

export default NotFoundBlock