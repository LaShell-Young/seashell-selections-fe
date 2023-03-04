import React from 'react'
import Hero from '../hero/Hero'


const Home = ({ entertainment }) => {
    console.log("entertainment in home")
    console.log(entertainment)
    return (
        <>
            {entertainment &&
                <Hero entertainment={entertainment} />
            }
        </>
        // <Hero entertainment={entertainment} />
    )
}

export default Home
