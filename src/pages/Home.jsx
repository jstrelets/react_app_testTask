import React from 'react';
import CardTable from '../components/CardTable/CardTable';
import '../components/CardTable/cardTable.css';

const Home = () => {
    
    return (
        <div className='product_container'>
            <h1 className='title'>
                Home Page
            </h1>
            <div className='slider_wrapper'>
                <CardTable slides={8}/>
            </div>
        </div>
    );
};

export default Home;