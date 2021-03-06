import { createContext, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [productsCart, setProductsCart] = useState([]);

  function addProducToCart(id) {
    const copyProductsCart = [...productsCart];

    const item = copyProductsCart.filter((product) => product.id === id);

    if (item.length > 0) {
      item[0].quantity = item[0].quantity + 1;
      alert("Adicionado ao carrinho novamente!");
    } else {
      copyProductsCart.push({ id: id, quantity: 1});
      alert("Adicionado ao carrinho");
    }
    console.log(copyProductsCart);
    
    setProductsCart(copyProductsCart);
  }

  function addProducToCartWithQuantity(id, quantity) {
    const copyProductsCart = [...productsCart];

    const item = copyProductsCart.filter((product) => product.id === id);

    if (item.length > 0) {
      item[0].quantity = quantity;
      alert("Adicionado ao carrinho novamente!");
    } else {
      copyProductsCart.push({ id: id, quantity: quantity});
      alert("Adicionado ao carrinho");
    }
    
    setProductsCart(copyProductsCart);
  }


  function removeProductToCart(id) {
    const copyProductsCart = [...productsCart];

    const item = copyProductsCart.filter((product) => product.id === id);

    if (item.length > 0) {
      if (item[0].quantity > 1) {
        item[0].quantity = item[0].quantity - 1;
        setProductsCart(copyProductsCart);
        alert("item retirado do carrinho");
      } else {
        const arrayFilterd = copyProductsCart.filter(
          (product) => product.id !== id
        );
        setProductsCart(arrayFilterd);
      }
    } else {
      alert("Esse produto não existe no carrinho");
    }
  }

  return (
    <CartContext.Provider
      value={{ productsCart, addProducToCart, removeProductToCart, addProducToCartWithQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
}