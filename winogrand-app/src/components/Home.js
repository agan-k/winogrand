import React from 'react'
import './Home.css'
import homeImage from '../assets/home_image2.jpg'

const Home = () => {

        return (
                <div className="home-container">
                        <img src={homeImage}/>
                        <h1>Garry Winogrand</h1>
                </div>
        )
}
export default Home;
