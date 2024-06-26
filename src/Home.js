import React from 'react'
import "./Home.css"
import NavBar from './navegacao/NavBar'
import Feed from './feed/Feed'

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