import React from 'react'
import '../../index.css'

import HeaderController from '../../components/Header/HeaderController'
import Hero from './HeroSection'
import HomeGallery from './HomeGallery/index'
import HomeDesc from './HomeDesc/index'
import HomePotcast from './HomePotcast/index'
import HomeSSS from './HomeSSS/index'
import HomeFooter from './HomeFooter/index'



import SocialMediaBox from '../../components/SocialMediaBox'


const index = () => {
  return (
    <div>
        <SocialMediaBox />
        <HeaderController />
        <Hero />
        <HomeGallery />
        <HomeDesc />
       <div style={{ background: "linear-gradient(45deg, #000000, #1a1a1a)" , width:"100%"}}>
        <HomePotcast />
        <HomeSSS />
       </div>
       <HomeFooter />
    </div>
  )
}    

export default index