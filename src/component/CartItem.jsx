import React, { useContext } from 'react'
import deleteIcon from "../assets/images/icon-delete.svg"
import { CartContext } from '../context/CartContext';


const CartItem = (props) => {
    const { id, title, quantity, total, price, image } = props.item;
    const { deleteItem } = useContext(CartContext)

    const handleRemoveFromCart = (id) => {
        deleteItem(id)
    }


    return (
        <div className='my-4 flex space-x-6 items-center text-neutral-grayishBlue'>
            <img className='w-10 rounded-md' src={image} alt="itemImage" />
            <div>
                <p>
                    {title}
                </p>
                <p className='space-x-2'>
                    <span>${price} x {quantity}</span>
                    <span className='text-black font-semibold'>${total}</span>
                </p>
            </div>
            <button onClick={() => handleRemoveFromCart(id)} className='cursor-pointer'>
                <img src={deleteIcon} alt="delete icon" />
            </button>
        </div>
    )
}

export default CartItem
