import styles from './Contact.modules.scss'

function Contact() {
    return (
   

        <div className="contact p-40">
            <div className="d-flex align-center justify-between mb-40">
                <h1 className="">Способы доставки</h1>
            </div>
                <div className="d-flex justify-center">
                    <div className="type_delivery">
                        <img className="hero_delivery" src="/img/car_green@2x.jpeg" alt=""/>
                        <div>
                            <h3>Стандартная доставка
                            </h3>
                            <p>Доставим заказ завтра при подтверждении
                             заказа до <time>18:00</time>, если такая опция доступна при оформлении</p>
                            <p>Возможные интервалы доставки:</p>
                            <ul className="grap_menu">
                                <li>Пн: 10:00 — 22:00</li>
                                <li>Вт: 10:00 — 22:00</li>
                                <li>Ср: 10:00 — 22:00</li>
                                <li>Чт: 10:00 — 22:00</li>
                                <li>Пт: 10:00 — 22:00</li>
                                <li>Сб: 10:00 — 19:00</li>
                                <li>Вс: 10:00 — 19:00</li>


                            </ul>
                            <p>
                            Стоимость доставки — <b>350</b> руб.
                            </p>
                        </div>
                    </div>
                    <div className="type_delivery">
                        <img className="hero_delivery" src="/img/store.webp" alt=""/>
                        <div>
                            <h3>Забрать в магазине
                            </h3>
                            <p>Забери свой заказ в одном из магазинов в г. Москва.
                            Если товар есть в наличии в выбранном магазине, то уже через 30 минут после оформления.</p>
                        </div>
                    </div>
                    <div className="type_delivery">
                        <img className="hero_delivery" src="/img/postmat.png" alt=""/>
                        <div>
                            <h3>Доставка в Постамат
                            </h3>
                            <p>Можно забрать свой заказ в одном из автоматических терминалов (постаматов) или в Пунктах Выдачи Заказов.</p>
                            <p className="pt-5">В постаматах можно оплатить заказ банковской картой, а в ПВЗ — наличными или картой.</p>
                 
                            <p>
                            Стоимость доставки — <b>200</b> руб.
                            </p>
                        </div>
                    </div>
                    
                
            </div>
        </div>
    
    )
}

export default Contact