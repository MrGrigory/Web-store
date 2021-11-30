import React from 'react';
import Card from '../components/Card'

function Favorites({ favorites,  onAddToFavorite, addToCart }) {
    return (
        <div className="content p-40">
            <div className="d-flex align-center justify-between mb-40">
                <h1 className="">Мои закладки</h1>
                
            </div>
            
            <div className="d-flex flex-wrap align-center justify-center">
                    {favorites
                    .map((obj, index) => (
                        <Card key={index}
                        favorited={true}
                        onFavorite={(obj) => onAddToFavorite(obj)}
                        onClickPlus={(obj) => addToCart(obj)}
                        {...obj}
                        
                    />
                ))}
            </div>


        </div>
    )
}

export default Favorites