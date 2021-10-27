import React from 'react';
import ItemList from '../components/ItemList/ItemList';

const Products = () => {
    return (
        <div style={{flex: 1, marginTop: '40px'}}>
            <h1 className='title_sport'>
                Sports Page
            </h1> 
            <div className='cards_wrapper'>
                <ItemList/>
            </div>             
        </div>
    );
};

export default Products;