import React, { useState, useEffect } from 'react';

const Cart = ({ state, dispatch }) => {
  const { cart } = state;

  const [total, setTotal] = useState(0);

  const changeQty = (id, qty) => {
    dispatch({
      type: 'CHANGE_CART_QTY',
      payload: { id, qty },
    });
  };

  useEffect(() => {
    setTotal(
      cart.reduce(
        (acc, currValue) => acc + Number(currValue.price) * currValue.qty,
        0
      )
    );
  }, [cart]);

  return (
    <div
      styles={{
        display: 'flex',
        flexDirection: 'column',
        margin: 10,
        backgroundColor: '#ececec',
        padding: 10,
        width: '20%',
      }}
    >
      <b style={{ fontSize: 30, alignSelf: 'center' }}></b>
      <b style={{ alignSelf: 'center' }}>Subtotal: ${total}</b>
      {cart.length > 0 ? (
        cart.map((prod) => (
          <div
            key={prod.title}
            style={{
              display: 'flex',
              padding: 10,
              border: '1px solid grey',
              margin: 5,
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex', gap: 10 }}>
              <img
                src={prod.thumbnail}
                alt={prod.title}
                style={{ height: 70, objectFit: 'cover' }}
              />

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-evenly',
                  flexDirection: 'column',
                }}
              >
                <span>{prod.title}</span>
                <b>${prod.price}</b>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
              <button onClick={() => changeQty(prod.id, prod.qty - 1)}>
                -
              </button>
              <span>{prod.qty}</span>
              <button onClick={() => changeQty(prod.id, prod.qty + 1)}>
                +
              </button>
            </div>
          </div>
        ))
      ) : (
        <span style={{ padding: 20, alignSelf: 'center' }}>Cart is EMPTY!</span>
      )}
    </div>
  );
};

export default Cart;
