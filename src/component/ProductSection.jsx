import React from 'react'
import ItemDetails from './ItemDetails'
import ItemImage from './ItemImage'
import { PRODUCTS } from '../util/data'


const ProductSection = () => {
    return (
        <section className='flex flex-col lg:flex-row lg:items-center lg:mt-28 lg:px-40 pb-12 lg:gap-[8rem] lg:justify-center'>
            <ItemImage />
            <ItemDetails product={PRODUCTS[0]}/>
        </section>
    )
}

export default ProductSection
