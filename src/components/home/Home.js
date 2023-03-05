import React from 'react'
import EntertainmentList from '../entertainment/EntertainmentList'
import Hero from '../hero/Hero'


const Home = ({ entertainment }) => {
    console.log("entertainment in home")
    console.log(entertainment)
    return (
        <div>
            {entertainment &&
                <div>
                    <Hero entertainment={entertainment} />
                    <EntertainmentList entertainment={entertainment} />
                </div>
            }
        </div>
        // <Hero entertainment={entertainment} />
    )
}

export default Home
