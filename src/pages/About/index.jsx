import React from 'react'

import Header from '../../components/Header/HeaderController'
import PageHeader from '../../components/PageHeader/index'

import './still.css'


const index = () => {
  return (
    <>
    <Header />
    <PageHeader 
        title="Hakkımızda"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam dolorum earum, neque accusamus aliquam maxime explicabo magni velit?"
    />
    <div className='aboutContainer'>
        <div className='aboutDesc'>

        </div>
    </div>
    </>
  )
}

export default index