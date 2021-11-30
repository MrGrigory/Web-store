import { Link } from 'react-router-dom'

function Header(props) {
    return (
    <header className="d-flex justify-between align-center p-20">

        <div className="d-flex align-center">
            <Link to="/">
                <img width={160} height={160} src="/img/logo.png" alt="logo"/>
            </Link>
            <div className="headerInfo">
                <h3 className="text-uppercase logo-settings">Cosmetics</h3>
                <p сlassName="sing_under"> Магазин лучшей косметики</p>
            </div>
        </div>
        <ul className="d-flex justify-between cu-p">
            <li onClick={props.onClickCart}>
                    <img width={40} height={40} src="/img/basket.png" alt="basket" />
            </li>
            <li className="p-10">
                <span className="text-center text-price pt-10"> 1205 руб </span>
            </li>
            <li className="ml-5">
                <Link to='/favorites'>
                    <img width={45} height={45} src="/img/link_heart.png" alt="favorite" />
                </Link>
            </li>
            <li>
                <img width={45} height={45} src="/img/account.png" alt="account" />
            </li>
        </ul>
    </header>
    )
}

export default Header