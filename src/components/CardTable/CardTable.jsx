import React, { useState, useEffect } from 'react';
import Carousel from 'react-simply-carousel';
import Loader from '../loader/Loader';
import Error from '../error/Error';
import './cardTable.css';
import { MarginLeft } from './MarginLeft';

const CardTable = (props) =>  {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [activeSlide, setActiveSlide] = useState(0);

    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/all_sports.php')
        .then(res => res.json())
        .then((result) => {
                setItems(result.sports);
                setIsLoaded(true);
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
            <div>
                <Carousel
                    updateOnItemClick
                    activeSlideIndex={activeSlide}
                    onRequestChange={setActiveSlide}
                    forwardBtnProps={{
                        children: ">",
                        style: {
                        position: "relative",
                        left: '-40px',
                        fontSize: '40px',
                        width: 70,
                        height: 70,
                        minWidth: 70,
                        alignSelf: "center",
                        borderRadius: '100%',
                        backgroundColor: 'white'
                        }
                    }}
                    backwardBtnProps={{
                        children: "<",
                        style: {
                        position: "relative",
                        left: '35px',
                        fontSize: '40px',
                        width: 70,
                        height: 70,
                        minWidth: 70,
                        alignSelf: "center",
                        borderRadius: '100%',
                        zIndex: 1,
                        backgroundColor: 'white'
                        }
                    }}
                    innerProps={{
                        // style: {
                        // // maxWidth: "100% !important",
                        // minWidth: '80%',
                        // backgroundColor: 'blue'
                        // }
                    }}
                    itemsToShow={3}
                    speed={400}
                    infinite={false}
                >
                    {items.map(item => (
                        <MarginLeft>
                            <div key={item.idSport} className='card'>
                                <img  src={item.strSportThumb} className="card_img" alt="picture_1"/>
                                <div className='card_content'>
                                    <div className='card_title'>{item.strSport}</div>
                                    <div className='card_text'>{item.strFormat}</div>
                                </div>
                            </div>
                        </MarginLeft>
                    ))}
                </Carousel>
            </div>
        );
    } 
};

export default CardTable;

