import React from 'react';
import ItemList from '../components/ItemList/ItemList';

const Products = () => {
    return (
        <div className='product_container'>
            <h1 className='title1'>
                Sports Page
            </h1> 
            <div className='cards_wrapper'>
                <ItemList/>
            </div>      
        </div>
    );
};

export default Products;