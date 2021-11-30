import React from 'react'
import ContentLoader from "react-content-loader"

import styles from './Card.modules.scss'

function Card({id, title, img, price, onFavorite, onClickPlus, favorited=false, added=false, loading=false}) {
    const [isAdded, setIsAdded] = React.useState(added)
    const [isFavorite, setIsFavorite] = React.useState(favorited)

    const handleAdding = () => {
        onClickPlus({id, title, img, price})
        setIsAdded(true)
    }

    const onClickFavorite = () => {
        onFavorite({id, title, img, price})
        setIsFavorite(!isFavorite)

    }

    return (
        <div className="card mt-10">
            {loading ? 
                <ContentLoader
                    speed={2}
                    width={155}
                    height={250}
                    viewBox="0 0 155 265"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb">
                    <rect x="1" y="0" rx="10" ry="10" width="155" height="155" />
                    <rect x="0" y="167" rx="5" ry="5" width="155" height="15" />
                    <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
                    <rect x="1" y="234" rx="5" ry="5" width="80" height="25" />
                    <rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
                </ContentLoader> :
                <div>
                    <div className="favorite" onClick={onClickFavorite}>
                        <img width={15} height={15} src={ isFavorite ? '/img/fill_heart.svg' : '/img/empty_heart.svg'} alt="unliked" />
                    </div>
                    <img width={143} height={122} src={img} alt="Nike78young" />
                    <h5>{title}</h5>
                    <div className="d-flex justify-between">
                        <div className="d-flex flex-column">
                            <span>Цена:</span>
                            <b>{price} руб.</b>
                        </div>
                            <img className={styles.plus} onClick={function(event){ handleAdding()}}
                            width={14} height={14} src={isAdded ? "/img/verified_full.png": "/img/verified.png"} alt="" />
                    </div>
                </div>
            }

    </div>
    )
}

export default Card