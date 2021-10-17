import React, { useState, useEffect } from 'react';
import Carousel from 'react-elastic-carousel';
import Loader from '../loader/Loader';
import Error from '../error/Error';
import './cardTable.css';


const CardTable = (props) =>  {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

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

    items.length = props.slides;

    if(error) {
        return <Error/>
    } else if (!isLoaded) {
        return <Loader/>
    } else {
        return (
            <div style={{width: '60%', margin: '20px auto' }}>
                <Carousel>
                    {items.map(item => (
                        <div key={item.idSport} className='card'>  
                            <div className='card_list'>
                                <img src={item.strSportThumb} className="card_img" alt="picture_1"></img>
                                <div className='card_title'>{item.strSport}</div>
                                <div className='card_item'>{item.strFormat} </div>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
        );
    } 
};

export default CardTable;
