import React from 'react'

function Hero(Props) {
    if(Props.heroName==='Thanos'){
        throw new Error("Real Hero")
    }
  return (
    <div>{Props.heroName}
    </div>
  )
}

export default Hero