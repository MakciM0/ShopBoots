import { NavLink } from "react-router-dom";

import { useSelector } from "react-redux/es/hooks/useSelector";

import styles from './HeaderMenu.module.scss'

const HeaderMenu = () => {
    const goods = useSelector(state => state.cart.goods);
    return (
        <header>
        <h1 className={styles.logo}>Logo</h1>
        <menu>
            <ul>
                <li><NavLink to="/shop">Shop</NavLink></li>
                <li><NavLink to="/cart">Cart <span>{goods.length > 0 ? goods.length : ""}</span></NavLink></li>
            </ul>
        </menu>
        </header>
    )
}

export default HeaderMenu;