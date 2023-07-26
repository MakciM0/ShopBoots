import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { plusItem, minusItem, deleteItem} from "../store/cartSlice";

import styles from './Cart.module.scss'

const Cart = () => {
    const dispatch = useDispatch();
    const goods = useSelector(state => state.cart.goods);
    const total = useSelector(state => state.cart.total);

    const minusCount = (e) => {
        dispatch(minusItem(e)); 

    }

    const plusCount = (e) => {   
        dispatch(plusItem(e));
    }

    return (
        <div className={styles.cart_page}>
            <div className={styles.cart}>
                <h1>Cart</h1>
                <div>
                    <ul className={styles.items}>
                        {goods.map((item) => (
                            <li className={styles.item}>
                                <p>Название : {item.name}</p>
                                <p>Цена : {item.price}</p>
                                <img src={"./img/" + item.img} alt={item.name}></img>
                                <p>Количество : 
                                    <span onClick={() => minusCount(item)}>-</span> 
                                    {item.count} 
                                    <span onClick={() => plusCount(item)}>+</span>
                                </p>
                                <button onClick={() => dispatch(deleteItem(item))}>Убрать из корзины</button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={styles.order}>
                    <p>Итоговая цена корзины = {total}</p>
                    <button>Сделать заказ</button>
                </div>
            </div> 
        </div>
    )
}

export default Cart;