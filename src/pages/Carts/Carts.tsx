import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import cart from './Carts.module.css'
import { useNavigate } from 'react-router'
import { Cart } from '../../services/interfaces'

const Carts = () => {
  const carts: Cart = useSelector((state: RootState) => state.addToCard);
  useSelector((state: RootState) => console.log(state.addToCard));
  const getTotalQuantity = () => {
    let total = 0
    carts.cart.forEach((item) => {
      total += item.quantity
    });
    return total
  }
  const Navigateto = useNavigate();
  const handleToCart = () => {
    Navigateto('/cart')
  }
  return (
    <div className={cart['wrap-cart']} onClick={handleToCart}>
      <i className="bi bi-cart2"></i>
      <span className={cart['cart-quantity']}>{getTotalQuantity()}</span>
    </div>
  )
}

export default Carts