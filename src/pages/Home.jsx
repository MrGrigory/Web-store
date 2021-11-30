import React from 'react';

import Card from '../components/Card'

function Home({ items, cartItems, searchValue, setSearchValue, onChangeSearchIput, onAddToFavorite, addToCart }) {
    
    const renderItems = () => {
        return items.filter((item) => item.title.toLowerCase().includes(searchValue))
                    .map((obj, i) => (
                        <Card key={i}
                            {...obj}
                            onFavorite={() => onAddToFavorite(obj)}
                            onClickPlus={(obj) => addToCart(obj)}
                            added={cartItems.some(item => Number(item.id) === Number(obj.id))}
                            
                    />
                ))
    }

    return (
        <div className="content p-40">
            <div className="d-flex align-center justify-between mb-40">
                <h1 className="">{searchValue ? `Поиск по запросу "${searchValue}"` : "Вся косметика"}</h1>
                <div className="searchBlock d-flex ">
                <img className="search"  width={16} height={16} src="/img/search.png" alt="search"/>
                {searchValue && (
                    <img className="clear cu-p" onClick={() => setSearchValue('')} width={20} height={20} src="/img/exit.png" alt="exit from search" />
                )}

                <input placeholder="Поиск " onChange={onChangeSearchIput} value={searchValue}/>
            
                </div>
            </div>
            
            <div className="d-flex flex-wrap align-center justify-center">
                {
                    renderItems()
                }
            </div>


        </div>
    )
}

export default Home