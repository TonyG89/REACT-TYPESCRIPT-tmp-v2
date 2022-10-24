import React from 'react';
import { createContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import './scss/app.scss';

import Header from './components/Header'
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';

// import clothes from './assets/blank_clothes.json'

export const AppContext = createContext(null)

function App() {
  const [search, setSearch] = React.useState('')
  return (
    <>
      <div className="App">
        <div className="wrapper">
          <AppContext.Provider value={{ search: search, setSearch: setSearch }}>
            <Header />
          </AppContext.Provider>
          <div className="content">
            <Routes>
              <Route path="/" element={<Home search={search}/>} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
