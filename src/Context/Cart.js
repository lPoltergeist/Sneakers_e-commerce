import { createContext, useState } from "react";
import ProductData from "../Components/ProductData"

export const CartContext = createContext({})

export const CartProvider = ({children}) =>{
    const [cartItems, setCartItens] = useState([]);
    const handleAddToCart = () => setCartItens(ProductData);

    const [ProductQuantity, setQuantity] = useState(0);
    const AddCart = () => setQuantity(ProductQuantity + 1);
    const RemoveCart = () => setQuantity(ProductQuantity - 1);

    return (
        <CartContext.Provider value={{handleAddToCart, cartItems, handleAddToCart, AddCart, RemoveCart, ProductQuantity}}>{children}</CartContext.Provider>
    )
} 