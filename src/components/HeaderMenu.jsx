import { NavLink } from "react-router-dom";

import { useSelector } from "react-redux/es/hooks/useSelector";

import styles from './HeaderMenu.module.scss'

const HeaderMenu = () => {
    const goods = useSelector(state => state.cart.goods);
    return (
        <div className={styles.header}>
        <div>
            <h1>Logo</h1>
        </div>
        <menu>
            <ul>
                <li><NavLink to="/shop">Shop</NavLink></li>
                <li><NavLink to="/cart">Cart <span>{goods.length > 0 ? goods.length : ""}</span></NavLink></li>
            </ul>
        </menu>
        </div>
    )
}

export default HeaderMenu;