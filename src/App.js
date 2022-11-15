import React, { createContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import './scss/app.scss';

import { useSelector, useDispatch } from 'react-redux'
// import {} from './redux/slices/filterSlice'

import Header from './components/Header'
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';

// import clothes from './assets/blank_clothes.json'

export const SearchContext = createContext(null)

function App() {
  const [search, setSearch] = React.useState('')
  return (
    <>
      <div className="App">
        <div className="wrapper">
          <SearchContext.Provider value={{ search, setSearch }}>
            <Header />
            <div className="content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </SearchContext.Provider>
        </div>
      </div>
    </>
  );
}

export default App;
