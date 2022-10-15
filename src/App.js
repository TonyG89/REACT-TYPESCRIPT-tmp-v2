import React from 'react';
import './scss/app.scss';
import Header from './components/Header'
import Categories from './components/Categories';
import Sort from './components/Sort';
import ClothesBlock from './components/ClothesBlock';

import clothes from './assets/blank_clothes.json'


function App() {
  return (
    <>
      <div className="App">
        <div className="wrapper">
          <Header />
          <div className="content">
            <div className="container">
              <div className="content__top">
                {/* <Categories /> */}
                <Sort />
              </div>
              <h2 className="content__title">Усі</h2>
              <div className="content__items">
                {
                  clothes.map(obj => (
                    <ClothesBlock key={obj.id}
                    title={obj.title + " " + obj.color} 
                    price={obj.price} 
                    link={obj.link} 
                    brand={obj.brand} 
                    sizes={obj.size} />
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
