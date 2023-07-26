import { useMatch } from 'react-router-dom';
import { useState } from 'react';
import { dataBase } from '../dataBase/dataBase';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, deleteItem } from "../store/cartSlice";

import styles from './ItemPage.module.scss';

const ItemPage = () => {
    const dispatch = useDispatch();
    const match = useMatch('/Shop/:name');
    const nameMatch = match.params.name;
    const item = dataBase.find((el) =>{
        return el.name === nameMatch;
      })

    const items = useSelector((state) => state.cart.goods);

    const [currentImg, setCurrentImg] = useState(0);

    const handleBuy = (e) =>{
        const isItemInCart = items.some((item) => item.id === e.id)
        if (isItemInCart) {
            dispatch(deleteItem(e));
          } else {
            dispatch(addItem(e));
          }
    }
    

    return (
        <div className={styles.item_page}>
            <div className={styles.item}>
                <div className={styles.imgs}>
                    <img src={"/img/" + item.img[currentImg]} alt={item.name}></img>
                    <div className={styles.img_button}>
                        <button onClick={() =>{if(currentImg > 0)setCurrentImg(currentImg-1)}}><span className={styles.arrow_left}></span></button>
                        <button onClick={() =>{if(currentImg < item.img.length-1)setCurrentImg(currentImg + 1)}}> <span className={styles.arrow_right}></span></button> 
                    </div>
                    
                </div>
                <div className={styles.info}>
                    <p>Название: {item.name}</p>
                    <p>Цена: {item.price}</p>
                    <p>Выберите размер</p>
                    <select>
                        {item.select.map(el =>
                            <option>{el}</option>
                        )}
                    </select>
                    <button
                        onClick={() => handleBuy(item)}>
                        {items.some((el) => el.id === item.id) >  0 ? "Убрать из корзины" : "В Корзину"}
                    </button>
                </div>
            </div>
            
        </div>
    )
}

export default ItemPage;