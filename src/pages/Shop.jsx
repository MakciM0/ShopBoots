import { dataBase } from "../dataBase/dataBase";
import { useDispatch, useSelector } from "react-redux";
import { addItem, deleteItem } from "../store/cartSlice";

import styles from './Shop.module.scss'

const Shop = () => {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.cart.goods);
     

    const handleBuy = (e) =>{
        const isItemInCart = items.some((item) => item.id === e.id)
        if (isItemInCart) {
            dispatch(deleteItem(e));
          } else {
            dispatch(addItem(e));
          }
    }
     

    return (
        <div className={styles.shop_page}>
            <div className={styles.shop}>
                <h1>SHOP</h1>
                <div className={styles.goods}>
                    {dataBase.map(el =>
                    <div key={el} className={styles.item}>
                        <h3>{el.name}</h3>
                        <img src={"./img/" + el.img} alt={el.name}></img>
                        <button 
                            onClick={() => handleBuy(el)}>
                            {items.some((item) => item.id === el.id) >  0 ? "Убрать из корзины" : "В Корзину"}
                        </button>
                    </div>
                    )}  
                </div>
            </div>
        </div>
    )
}

export default Shop;