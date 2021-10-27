import React, { useState, useEffect } from 'react';
import Loader from '../loader/Loader';
import Error from '../error/Error';


const ItemList = () =>  {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [start] = useState(0);
    const [limit] = useState(8);

    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/all_sports.php')
        .then(res => res.json())
        .then((result) => {
                setIsLoaded(true);
                setItems(result.sports);
            },  
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        );
    }, []);

    const sports = items.slice(start, limit);

    if(error) {
        return <Error/>
    } else if (!isLoaded) {
        return <Loader/>
    } else {
        return (
            <div style={{display: 'flex', flexWrap: 'wrap' }}>
                {sports.map((item) => (
                    <div key={item.idSport} className='card_sport'>
                        <img src={item.strSportThumb} className="card_img_sport" alt="picture_1"></img>
                        <div className='card_content'>
                            <div className='card_title'>{item.strSport}</div>
                            <div className='card_text'>{item.strFormat} </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    } 
};

export default ItemList;
