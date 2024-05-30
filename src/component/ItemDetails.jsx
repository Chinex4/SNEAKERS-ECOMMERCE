import React, { useContext, useState } from 'react'
import { PRODUCTS } from '../util/data'
import { CartContext } from '../context/CartContext'

const ItemDetails = ({ product }) => {
  const {
    cart,
    addToCart,
    increaseQuantity, 
    decreaseQuantity
  } = useContext(CartContext)

  const handleAddToCart = (item) => {
    addToCart(item)
  }
  const handleIncrement = (id) => {
    increaseQuantity(id)
  }
  const handleDecrement = (id) => {
    decreaseQuantity(id)
  }
  return (
    <div className='px-6 mt-6 lg:basis-[37%]'>
      <ul>
        {
          PRODUCTS.map(item => {
            return (
              <div key={item.id}>
                <p className='text-primary-orangee font-bold uppercase text-sm tracking-widest'>
                  Sneaker Company
                </p>
                <h1 className='mt-4 text-3xl lg:text-4xl font-bold'>
                  {item.title}
                </h1>
                <p className='mt-4 text-neutral-grayishBlue mb-4'>
                  {item.description}
                </p>
                <div className='flex lg:flex-col justify-between lg:items-start items-center'>
                  <div className='flex space-x-8 lg:space-x-4 items-center'>
                    <h1 className='text-2xl font-bold'>
                      ${item.price}
                    </h1>
                    <span className='bg-primary-paleOrange rounded-md px-3 py-1 text-primary-orangee font-bold text-sm'>
                      50%
                    </span>
                  </div>
                  <p className="text-neutral-grayishBlue line-through text-lg">
                    $250.00
                  </p>
                </div>

                <div className='flex flex-col lg:flex-row space-y-8 lg:space-y-0 mt-8 lg:space-x-6'>
                  <div className='rounded-2xl bg-neutral-lightGrayishBlue text-xl flex justify-between items-center px-6 lg:px-2 lg:basis-[40%] py-2'>
                    <button
                      onClick={() => handleDecrement(item.id)}
                      disabled={cart.length > 0 ? cart[0].quantity === 0 : true}
                      className='btn btn-ghost text-primary-orangee text-3xl '>-</button>
                    <span className='font-bold'>{cart.length > 0 ? cart[0].quantity : 0}</span>
                    <button
                      onClick={() => handleIncrement(item.id)}
                      className='btn btn-ghost text-primary-orangee text-3xl'>+</button>
                  </div>
                  <button
                    onClick={() => handleAddToCart(item)}
                    className='flex space-x-6 lg:space-x-3 justify-center items-center bg-primary-orangee text-white py-4 rounded-2xl lg:grow'>
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                    </span>
                    <span>
                      Add to cart
                    </span>
                  </button>
                </div>
              </div>
            )
          })
        }
      </ul>

    </div>
  )
}

export default ItemDetails
