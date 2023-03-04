import React, { useEffect, useState } from 'react'
import './Hero.css';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';

const Hero = ({ entertainment }) => {
    console.log("entertainment in hero")
    console.log(entertainment)

    const carouselSize = 20;
    const [carouselItems, setCarouselItems] = useState();

    const getCarouselItems = (entertainment) => {
        const itemsWithPoster = entertainment.filter((element) => {
            return element.poster !== "";
        })

        const result = [];
        for (let i = 0; i < carouselSize; i++) {
            let item = itemsWithPoster.at(Math.floor(Math.random() * itemsWithPoster.length));
            result.push(item);
        }

        // remove duplicates if any
        let resultsNoDuplicates = [];
        result.forEach((item) => {
            if (!resultsNoDuplicates.includes(item)) {
                resultsNoDuplicates.push(item);
            }
        })

        // check that resultsNoDup is not empty
        if (resultsNoDuplicates.length == 0) {
            resultsNoDuplicates = itemsWithPoster.slice(0, carouselSize);
        }
        setCarouselItems(resultsNoDuplicates);
    }

    useEffect(() => {
        getCarouselItems(entertainment);
    }, [entertainment])

    console.log("carouselItems in hero")
    console.log(carouselItems)

    return (
        <div>
            {carouselItems &&
                <Carousel>
                    {carouselItems.map((item) => {
                        return (
                            <Paper key={item.id}>
                                <div className='entertainment-card-container'>
                                    <div className='entertainment-card' style={{ "--img": `url(${item.backdrops[0]})` }}>
                                        <div className='entertainment-detail'>
                                            <div className='entertainment-poster'>
                                                <img src={item.poster} alt="film poster" />
                                            </div>
                                            <div className='entertainment-title'>
                                                <h4>{item.title}</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Paper>
                        )
                    })}
                </Carousel>
            }
        </div>
    )
}

export default Hero
