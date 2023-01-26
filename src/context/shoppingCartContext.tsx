import React, { ReactNode, useContext, useState } from "react";

// declare the type for the shoppingCartContext
type ShoppingCartContext = {
  getItemQuantity: (id: number) => number;
  increaseItemQuantity: (id: number) => void;
  decreaseItemQuantity: (id: number) => void;
  removeItemFromCart: (id: number) => void;
};

const ShoppingCartContext = React.createContext({} as ShoppingCartContext);

// create a custom hook for accessing the context:
const useCartContext = () => {
  return useContext(ShoppingCartContext);
};

// declare a type for props
type shoppingCartPropType = {
  children: ReactNode;
};

// define a cart item type:
type CartItem = {
  id: number;
  quantity: number;
};

const ShopingCartContextProvider = (props: shoppingCartPropType) => {
  // the cartItems state is a list of CartItem property
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // define the cartItems functions:
  const getItemQuantity = (id: number) => {
    return (
      cartItems.find((item) => {
        return item.id === id;
      })?.quantity || 0
    );
  };

  const increaseItemQuantity = (id: number) => {
    setCartItems((currCartItems) => {
      // find if the cartItem exist in cartItem state: if exist -> increment, if not -> create one
      if (
        currCartItems.find((item) => {
          return item.id === id;
        }) == null
      ) {
        const newCartItems = [...currCartItems, { id: id, quantity: 1 }];
        return newCartItems;
      } else {
        return currCartItems.map((item) => {
          if (item.id === id) {
            return { id: id, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const decreaseItemQuantity = (id: number) => {
    setCartItems((currCartItems) => {
      // find if the cartItem exist in cartItem state: if exist -> increment, if not -> create one
      if (
        currCartItems.find((item) => {
          return item.id === id;
        })?.quantity == 1
      ) {
        const newCartItems = currCartItems.filter((item) => {
          return item.id !== id;
        });
        return newCartItems;
      } else {
        return currCartItems.map((item) => {
          if (item.id === id) {
            return { id: id, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const removeItemFromCart = (id: number) => {
    setCartItems((currCartItems) => {
      return currCartItems.filter((item) => {
        return item.id !== id;
      });
    });
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseItemQuantity,
        decreaseItemQuantity,
        removeItemFromCart,
      }}
    >
      {props.children}
    </ShoppingCartContext.Provider>
  );
};

export { ShoppingCartContext, ShopingCartContextProvider, useCartContext };
