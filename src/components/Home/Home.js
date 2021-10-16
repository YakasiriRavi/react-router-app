import React from 'react';
import './HomeStyle.css';
import { Carousel } from 'react-bootstrap';

const Home = () => {
    return (
        <div className="home-container">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/images/award.png" height="500px"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Awards</h3>
                        
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/images/rank1.jpg" height="500px"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Our Rankers</h3>
                        
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/images/rank2.JPG" height="1000px"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>2019 Toppers</h3>
                        
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/images/acde.png" height="600px"
                        alt="Fourth slide"
                    />

                    <Carousel.Caption>
                        <h3>Latest Test Series</h3>
                        
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div>
    )
}

export default Home;
