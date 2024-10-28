import React from 'react';

const Products = ({Product,onAddToCart}) => {
    <div>
        <img src={Product.image} alt={Product.title} className='w-full h-40 object-contain mb-4'/>
        <h2 className='text-lg font-semibold'>{Product.title}</h2>
        <p className='text-golden '>${Product.price}</p>
        <button onClick={()=> onAddToCart(Product)} className='mt-4 bg-blue-500 text-white py-2 px-4 rounded'>
            Add To Cart
            </button>
    </div>
};

export default Products;