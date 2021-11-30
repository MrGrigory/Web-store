import './App.css';
import { Route } from 'react-router-dom'
import Home from './pages/Home'
import Favorites from './pages/Favorites';
import axios from 'axios'
import Header from './components/Header'
import Drawer from './components/Drawer'
import Contact from './components/Contact';
import Payment from './components/Payment';
import Footer from './components/Footer'

import React from 'react';


function App() {
  const URL_BACKEND = 'https://61784edfbb979200171ff681.mockapi.io'
  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])
  const [searchValue, setSearchValue] = React.useState('')
  const [favorites, setFavorites] = React.useState([])
  const [cartOpened, setCartOpened] = React.useState(false)

  React.useEffect(() => {
    async function fetchData() {
      const itemsResponse = await axios.get(`${URL_BACKEND}/items`)
      const cartsResponse = await axios.get(`${URL_BACKEND}/cart`)
      const favoriteResponse = await axios.get(`${URL_BACKEND}/favorites`)
  
      setItems(itemsResponse.data)
      setCartItems(cartsResponse.data)
      setFavorites(favoriteResponse.data)
    }
    fetchData()
  }, [])
  
  const addToCart = (obj) => {
    console.log(obj)
    try {
      if (cartItems.find((item) => item.id === obj.id)) {
        axios.delete(`https://61784edfbb979200171ff681.mockapi.io/cart/${obj.id}`)
        setCartItems(prev => prev.filter(item => item.id !== obj.id))
      }
      else {
        axios.post('https://61784edfbb979200171ff681.mockapi.io/cart', obj)
        setCartItems(prev => [...prev, obj])
      }

    }
    catch (error) {
      console.log(error)
    }

  }
  const onRemoveItem = (id) => {
    axios.delete(`https://61784edfbb979200171ff681.mockapi.io/cart/${id}`)
    setCartItems((prev) => prev.filter(item => item.id !== id))

  }
  const onAddToFavorite = async (obj) => {
    console.log(obj)
    try {
      if (favorites.find((favObj) => favObj.id === obj.id)) {
        axios.delete(`https://61784edfbb979200171ff681.mockapi.io/favorites/${obj.id}`)
        setFavorites((prev) => prev.filter(item => item.id !== obj.id))
      }
      else {
        const { data } = await axios.post('https://61784edfbb979200171ff681.mockapi.io/favorites', obj)
        setFavorites(prev => [...prev, data])
      }
    }
    catch (error) {
      alert('Не удалось добавить в фавориты');
      console.error(error);
    }
  }
  

  const onChangeSearchIput = (event) => {
    setSearchValue(event.target.value)
  }

  
  return (
    <div>
      <div className="wrapper clear">

        {cartOpened ? <Drawer items={cartItems} onCloseCart={() => setCartOpened(false)} onRemove={onRemoveItem}/> : null}
        <Header onClickCart={() => setCartOpened(true)} />

        <Route path="/" exact>
          <Home
            items={items}
            cartItems={cartItems}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            onChangeSearchIput={onChangeSearchIput}
            onAddToFavorite={onAddToFavorite}
            addToCart={addToCart}
          />
        </Route> 
            <Route path="/favorites" exact>
          <Favorites
            favorites={favorites}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            onChangeSearchIput={onChangeSearchIput}
            onAddToFavorite={onAddToFavorite}
            addToCart={addToCart}
          />
        </Route> 
        <Route path="/contact" exact>
          <Contact/>
        </Route>
        <Route path="/payment" exact>
          <Payment/>
        </Route>

      </div>
      <div className="d-block">
          <Footer/>
      </div>
      
    </div>
  );
}

export default App;
