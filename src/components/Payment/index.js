import styles from './Payment.modules.scss'

function Payment() {
    return (
   
            <div className="payments p-40 ">
                <div className="d-flex align-center justify-between mb-40">
                    <h1 className="">Cпособы оплаты</h1>
                </div>
                <div className="d-flex flex-wrap  justify-center">
                    <div className="type_payments">
                        <div>
                            <h3>Онлайн-оплата
                            </h3>
                            <p>Оплата на сайте и в мобильном приложении производится через сервис ЮKassa. Международный стандарт безопасности для платежей с карт PCI DSS.</p>
                            <p>Оплатить заказ можно:
                            </p>
                            <ul className="grap_menu">
                                <li>банковской картой (Visa, MasterCard, MIR, JCB)</li>
                                <li>через интернет-банк (Сбер Онлайн, Альфа-Клик, Тинькофф)</li>
                                <li>с помощью ApplePay и GooglePay, если поддерживает устройство</li>


                            </ul>
                            <img className="mt-10" src="/img/payment_logo.png" alt="logo_payment"/>
                        </div>
                    </div>
                    <div className="type_payments">
                            <div>
                                <h3>При получении
                                </h3>
                                <p>Оплатить заказ можно:
                                </p>
                                <ul className="grap_menu">
                                    <li>наличными на кассе магазина или при получении у курьера</li>
                                    <li>банковской картой в магазине и в большинстве регионов при доставке курьером</li>
                           


                                </ul>
                            </div>
                    </div>
                    <div className="type_payments">
                        <div>
                            <h3>
                            Подарочными сертификатами
                            </h3>
                            <p>Сертификатом и Электронным Подарочным Сертификатом Street Beat можно оплатить до 100% покупки:</p>
                            <ul className="grap_menu">
                                <li>в розничном магазине
                                </li>
                                <li>при онлайн-оплате на сайте</li>
                            </ul>
                            <p>
                            Если номинал сертификата больше покупки, то сумма подарочного сертификата будет списана полностью.
                            </p>
                        </div>
                    </div>
                    <div className="type_payments">
                    <div>
                        <h3>Бонусными баллами
                        </h3>
                        <p>Бонусной картой Street Beat можно оплатить до 30% покупки</p>
                        <ul className="grap_menu">
                            <li>в розничном магазине</li>
                            <li>при онлайн-оплате на сайте</li>
                        </ul>
                        <p>
                        При оплате на сайте привяжи карту в личном кабинете и выбери онлайн-оплату.
                        </p>

                        <p>
                        Бонусные баллы нельзя списать на товары со скидкой, на некоторые релизные модели и Jordan Retro.
                        </p>
                    </div>
                    </div>

 


                    
                
            </div>
            
        </div>

    )
}

export default Payment