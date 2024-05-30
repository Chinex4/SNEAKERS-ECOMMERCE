import React, { createContext, useReducer } from 'react'

export const CartContext = createContext({
    cart: [],
    addToCart: () => { },
    increaseQuantity: () => { },
    decreaseQuantity: () => { },
    deleteItem: () => { },
})

const cartReducer = (state, action) => {
    if (action.type === "ADD_TO_CART") {
        const newItem = action.payload
        const existingItem = state.find(item => {
            return item.id === newItem.id
        })

        if (!existingItem) {
            return [
                ...state,
                {
                    ...newItem,
                    quantity: 1,
                }
            ]
        } else {
            return state.map(item => item.id === newItem.id ? (
                {
                    ...item,
                    quantity: item.quantity + 1,
                    totalPrice: item.totalPrice + item.price
                }
            ) : item)
        }
    }
    if (action.type === "INCREASE_QUANTITY") {
        return state.map(item => item.id === action.payload.id ? (
            {
                ...item,
                quantity: item.quantity + 1,
                totalPrice: item.totalPrice + item.price
            }
        ) : item)
    }
    if (action.type === "DECREASE_QUANTITY") {
        return state.map(item => item.id === action.payload.id ? (
            {
                ...item,
                quantity: item.quantity > 1 ? item.quantity - 1 : 1,
                totalPrice: item.quantity > 1 ? item.totalPrice - item.price : item.totalPrice
            }
        ) : item)
    }
    if (action.type === "REMOVE_FROM_CART") {
        return state.filter(item => item.id !== action.payload.id)
    }

    return state;
}


const initialState = []

const CartContextProvider = ({children}) => {
    const [cart, dispatchCart] = useReducer(cartReducer, initialState)

    const addToCart = (item) => {
        dispatchCart({
            type: "ADD_TO_CART",
            payload: item
        })
    }
    const increaseQuantity = (id) => {
        dispatchCart({
            type: "INCREASE_QUANTITY",
            payload: { id }
        })
    }
    const decreaseQuantity = (id) => {
        dispatchCart({
            type: "DECREASE_QUANTITY",
            payload: { id }
        })
    }
    const deleteItem = (id) => {
        dispatchCart({
            type: "REMOVE_FROM_CART",
            payload: { id }
        })
    }

    const cartValue = {
        cart,
        totalQuantity: cart.totalQuantity,
        addToCart,
        increaseQuantity,
        decreaseQuantity, 
        deleteItem
    }
    return (
        <CartContext.Provider value={cartValue}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider
