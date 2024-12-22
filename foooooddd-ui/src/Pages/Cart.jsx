import React, { useState } from 'react'

const Cart = () => {

    const [cartItems, setCartItems] = useState([
      { image: 'assets/images/resources/cart1.jpg', name: 'Shrimp and oyster soup', details: '200 g / 354 kcal', price: 65.39, quantity: 2 },
      { image: 'assets/images/resources/cart2.jpg', name: 'Rib-eye steaks', details: '200 g / 354 kcal', price: 45.99, quantity: 1 },
      { image: 'assets/images/resources/cart3.jpg', name: 'Greek salad', details: '200 g / 354 kcal', price: 30.49, quantity: 3 },
    ]);
    const [couponCode, setCouponCode] = useState('');
    const [deliveryFee] = useState(25);
    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const totalPrice = subtotal + deliveryFee;
  
    const incrementQuantity = (index) => {
      setCartItems((prev) =>
        prev.map((item, i) => (i === index ? { ...item, quantity: item.quantity + 1 } : item))
      );
    };
  
    const decrementQuantity = (index) => {
      setCartItems((prev) =>
        prev.map((item, i) =>
          i === index && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
        )
      );
    };
  
    const updateQuantity = (index, value) => {
      const quantity = Math.max(1, parseInt(value, 10) || 1);
      setCartItems((prev) =>
        prev.map((item, i) => (i === index ? { ...item, quantity } : item))
      );
    };
  
    const removeItem = (index) => {
      setCartItems((prev) => prev.filter((_, i) => i !== index));
    };
  
    const applyCoupon = () => {
      if (couponCode === 'DISCOUNT10') {
        alert('Coupon applied! 10% discount.');
        setCartItems((prev) =>
          prev.map((item) => ({ ...item, price: item.price * 0.9 }))
        );
      } else {
        alert('Invalid coupon code.');
      }
    };
  
    const updateCart = () => {
      alert('Cart updated!');
    };
  
    const proceedToCheckout = () => {
      alert('Proceeding to checkout...');
    };
  
  return (

    
    <>
      <section className="pager-section text-center">
  <div className="fixed-bg bg4" />
  <div className="container">
    <div className="pager-head">
      <h2>Cart</h2>
      <ul>
        <li>
          <a href="#" title="">
            Home
          </a>
        </li>
        <li>
          <span>Cart</span>
        </li>
      </ul>
    </div>
    {/*pager-head end*/}
  </div>
</section>

<section className="sec-block">
  <div className="container">
    <div className="cart-page">
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Subtotal</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item, index) => (
            <tr key={index}>
              <td>
                <div className="cart-prod-info d-flex flex-wrap align-items-center">
                  <img src={item.image} alt={item.name} />
                  <div className="cart-pro-info">
                    <h4><a href="#" title="">{item.name}</a></h4>
                    <span>{item.details}</span>
                  </div>
                </div>
              </td>
              <td>
                <div className="item-counter">
                  <button
                    className="plus-btn"
                    type="button"
                    onClick={() => incrementQuantity(index)}
                  >
                    +
                  </button>
                  <input
                    type="number"
                    className="quantity"
                    value={item.quantity}
                    min="1"
                    onChange={(e) => updateQuantity(index, e.target.value)}
                  />
                  <button
                    className="minus-btn"
                    type="button"
                    onClick={() => decrementQuantity(index)}
                  >
                    -
                  </button>
                </div>
              </td>
              <td><span className="price">${item.price.toFixed(2)}</span></td>
              <td><strong className="sub-total">${(item.price * item.quantity).toFixed(2)}</strong></td>
              <td>
                <button
                  className="remove-item"
                  onClick={() => removeItem(index)}
                >
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="row justify-content-end align-items-center">
        <div className="col-lg-8">
          <div className="update-cart">
            <button className="btn-default" onClick={updateCart}>Update cart</button>
          </div>
          <div className="coupan-code">
            <div className="form-group">
              <input
                type="text"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                placeholder="Coupon number"
                className="form-control half-radius"
              />
              <button
                className="btn-default"
                onClick={applyCoupon}
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-end">
        <div className="col-lg-5">
          <div className="price-table">
            <ul>
              <li><h4>Subtotal</h4><span>${subtotal.toFixed(2)}</span></li>
              <li><h4 className="delivery">Delivery</h4><span>${deliveryFee.toFixed(2)}</span></li>
              <li><h4 className="total-price">Total</h4><span>${totalPrice.toFixed(2)}</span></li>
            </ul>
            <button className="btn-default text-center w-100" onClick={proceedToCheckout}>
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>






    </>
  )
}

export default Cart
