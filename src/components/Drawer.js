function Drawer({onCloseCart, onRemove, items= []}) {
    return (
        <div className="overlay">
            <div className="drawer">
                <h2 className="d-flex justify-between">
                    Корзина
                    <img onClick={ onCloseCart} width={24} height={24} src="/img/exit.png"  alt="Close the drawer"/>
                </h2>

                {
                    items.length > 0 ? 
                    <div>
                        <div className="items">
                    

                        { items.map((obj) => (
                            <div className="cartItem d-flex align-center mt-20">
                            <div style={ {backgroundImage: `url(${obj.img}`}} className="cartItemImg">
                            
                            </div>
                            <div className="ml-10 flex">
                                <p className="mb-5">{obj.title}</p>
                                <span>{obj.price}</span>
                            </div>
                            <img className="removeBtn" onClick={() => onRemove(obj.id)} src="/img/exit.png" alt="close"/>
        
                            </div>

                        ))     
                        }

                    
                        </div>

                        <div className="totalBlock">
                            <ul className="">
                                <li className="d-flex">
                                    <span>Итого</span>
                                    <div></div>
                                    <b> 23 890 руб.</b>
                                </li>
                                <li className="d-flex">
                                    <span>Налог 5%:</span>
                                    <div></div>
                                    <b> 1078 руб. </b>
                                </li>
                            </ul>
                            <button>Оформить заказ</button>
                        </div>
                    </div>
                            

                

                    
                  
                     : 

                    <div className="d-flex cartEmpty align-center justify-center flex-column flex">
                        <img className="mb-20" width={120} height={120} src="" alt="empty cart"/>
                        <h2>Корзина пуста</h2>
                        <p className="opacity-6">
                            Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
                        </p>
                        <button className="greenButton">
                            <img src="" alt=""/>
                            Вернуться назад
                        </button>
                    </div>
                }




          </div>
      </div>
    )
}

export default Drawer