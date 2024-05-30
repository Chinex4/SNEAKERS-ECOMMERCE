import React, { useContext } from 'react'
import { PRODUCTS } from '../util/data'
import CartItem from './CartItem'
import { CartContext } from '../context/CartContext'

const Cart = ({...props}) => {
    const {
        cart
    } = useContext(CartContext)
    return (
        <div {...props}>
            <div className="card-body">
                <span className="font-bold text-lg">Cart</span>
                <hr />

                <ul>
                    {
                        cart.map((item) => {
                            return <CartItem
                                key={item.id}
                                item={{
                                    id: item.id,
                                    title: item.title,
                                    quantity: item.quantity,
                                    total: item.totalPrice,
                                    price: item.price,
                                    image: item.image,
                                    item
                                }}
                            />
                        })
                    }
                </ul>

                <div className="card-actions">
                    <button className="btn rounded-lg bg-primary-orangee text-white btn-block font-semibold">
                        Checkout
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Cart
