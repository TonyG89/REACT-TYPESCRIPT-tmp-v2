import React from 'react';
import './scss/app.scss';
import Header from './components/Header'
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';


function App() {
  return (
    <>
      <div className="App">
        <div class="wrapper">
          <Header />
          <div class="content">
            <div class="container">
              <div class="content__top">
                <Categories />
                <Sort />
              </div>
              <h2 class="content__title">Все пиццы</h2>
              <div class="content__items">
                <PizzaBlock title="Мексиканская" price={500} />
                <PizzaBlock title="чили" price="200" />
                <PizzaBlock title="Мексиканская" price="140" />
                <PizzaBlock title="Мексиканская" price="0" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
