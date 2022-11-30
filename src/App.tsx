import { Route, Routes } from 'react-router-dom';
import './scss/app.scss';

import Header from './components/Header'
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';
import ClothesCard from './pages/ClothesCard'

// import clothes from './assets/blank_clothes.json'

function App() {
  return (
    <>
      <div className="App">
        <div className="wrapper">
          <Header />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/clothes/:id" element={<ClothesCard />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;