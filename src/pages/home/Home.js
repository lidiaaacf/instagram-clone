import React from 'react'
import "./Home.css"
import NavBar from '../../components/navegacao/NavBar'
import Feed from '../../components/feed/Feed'

function Home() {
  return (
    <div className='home'>
        <div className='home_nav'>
            <NavBar></NavBar>
        </div>

        <div className='home_feed'>
            <Feed></Feed>
        </div>

    </div>
  )
}

export default Home;