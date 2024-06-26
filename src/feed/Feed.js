import React from 'react'
import "./Feed.css"
import "./Recomendados"
import Recomendados from './Recomendados'

function Feed() {
  return (
    <div className='feed'>

      <div className='feed_esquerda'>
        Feed
      </div>

      <div className='feed_direita'>
        <Recomendados/>
      </div>

    </div>
  )
}

export default Feed