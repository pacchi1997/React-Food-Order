import { useContext } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";

function Cart(props) {
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const onRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const onAddHandler = (item) => {
    cartCtx.addItem({...item,amount: 1})
  };


  const cartItems = (
    <ul className={styles["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={onRemoveHandler.bind(null,item.id)}
          onAdd={onAddHandler.bind(null,item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onHide={props.onHideCart}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onHideCart}>
          close
        </button>
        {hasItems && <button className={styles.button}>order</button>}
      </div>
    </Modal>
  );
}

export default Cart;
