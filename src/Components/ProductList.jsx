import React, {useEffect, useState} from 'react';
import Products from './Products';
import axios from 'axios';



const ProductList = ({ onAddToCart }) => {
    const [products, setProduct] = useState([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(response => setProduct(response.data))
            .catch(error => console.error("Error Fetching Products:", error));
    }, []);
    
    return (
        <div className='grid grid-col-1 sm:grid-cols-2 lg:grid-col-4 gap-6 p-6'>
            { products.map(product => (
                <Products key={product.id} Product={product} onAddToCart={onAddToCart}/>
            ))}
        </div>
    );
};

export default ProductList;