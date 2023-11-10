import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';

const CartItems = () => {
  const { all_product, cardItems, removeFromCart, setCardItems } = useContext(ShopContext);

  if (!Array.isArray(all_product) || typeof cardItems !== 'object') {
    return <div>Error: Invalid product data or cart items.</div>;
  }

  return (
    <div className='cartitems'>
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        const quantity = cardItems[e.id] || 0;

        if (quantity > 0) {
          return (
            <div key={e.id} className="cartitems-format">
              <img src={e.image} alt="" className='carticon-product-icon' />
              <p>{e.name}</p>
              <p>₹{e.new_price}</p>
              <div>
                <button
                  className='cartitems-quantity-btn'
                  onClick={() => setCardItems((prevCardItems) => ({
                    ...prevCardItems,
                    [e.id]: prevCardItems[e.id] + 1
                  }))}
                >
                  +
                </button>
                <span className='cartitems-quantity'>{quantity}</span>
                <button
                  className='cartitems-quantity-btn'
                  onClick={() => setCardItems((prevCardItems) => ({
                    ...prevCardItems,
                    [e.id]: Math.max(0, prevCardItems[e.id] - 1)
                  }))}
                >
                  -
                </button>
              </div>
              <p>₹{e.new_price * quantity}</p>
              <img
                src={remove_icon}
                onClick={() => removeFromCart(e.id)}
                alt=""
              />
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default CartItems;
