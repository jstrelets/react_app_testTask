import React from 'react';
import CardTable from '../components/CardTable/CardTable';


const Home = () => {
    
    return (
        <div >
            <h1 className='title'>
                Home Page
            </h1>
            <CardTable slides={8}/>
        </div>
    );
};

export default Home;