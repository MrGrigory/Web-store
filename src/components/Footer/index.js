import styles from './Footer.modules.scss'

function Footer() {
    return (
<footer>
  <section className="cloud">
      <div className="wave wave1"></div>
      <div className="wave wave2"></div>
      <div className="wave wave3"></div>
      <div className="wave wave4"></div>

  </section>
  <section className="ft-main">
    <div className="ft-main-item">
      <h2 className="ft-title">О нас </h2>
      <ul>
        <li><a href="#">Главная</a></li>
        <li><a href="#">Избранное</a></li>
        <li><a href="#">Способы оплаты</a></li>
        <li><a href="#">Способы доставки</a></li>
      </ul>
    </div>
    <div className="ft-main-item">
      <h2 className="ft-title">Дополнительная информация</h2>
      <ul>
        <li><a href="#">Служба возврата</a></li>
        <li><a href="#">Карьера</a></li>
        <li><a href="#">Подарочные сертификаты</a></li>
      </ul>
    </div>

    <div className="ft-main-item">
      <h2 className="ft-title">Свяжитесь с нами</h2>
      <p>Получать рассылку по новым поварам</p>
      <form>
        <input type="email" name="email" placeholder="Ваш email"/>
        <input type="submit" value="Подписка"/>
      </form>
    </div>
  </section>


  <section className="ft-legal">
    <ul className="ft-legal-list">
      <li><a href="#">Условия &amp; Требования</a></li>
      <li><a href="#">Публичные политики</a></li>
      <li>&copy; 2021 Copyright by Вечерин Г.</li>
    </ul>
  </section>
</footer>
    )
}

export default Footer