import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Products from './pages/Products/Products'
import About from './pages/About'
import Blog from './pages/Blog'
import Layout from './pages/Layout'
import NoPage from './pages/NoPage'
import DetailProduct from './pages/DetailProduct'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path='products' element={<Products />} />
          <Route path='about-us' element={<About />} />
          <Route path='blog' element={<Blog />} />
          <Route path='*' element={<NoPage/>}/>

          {/* Detail Product */}
          <Route path='product/:id' element={<DetailProduct/>}/>
        </Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
