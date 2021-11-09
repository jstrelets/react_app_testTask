import React from 'react';
import CardTable from '../components/CardTable/CardTable';
import '../components/CardTable/cardTable.css';

const Home = () => {
    
    return (
        <div className='slider_block'>
            <h1 className='title'>
                Home Page
            </h1>
            <CardTable slides={8}/>
        </div>
    );
};

export default Home;