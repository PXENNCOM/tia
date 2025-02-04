import React from 'react'

import Header from '../../components/Header/HeaderController'
import PageHeader from '../../components/PageHeader/index'
import TeamSection from './TeamSection';
import './assets/still.css'

const index = () => {
  return (
    <>
      <Header />
      <PageHeader 
        title="Ekibimizle tanışın"
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias doloribus quo voluptatem!"
      />
      <div className='TeamContainer'>
        <TeamSection />
      </div>
    </>
  )
}

export default index