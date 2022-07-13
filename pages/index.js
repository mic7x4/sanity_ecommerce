import React from 'react'
import HeroBanner from '../components/HeroBanner'

const Home = () => {
  return (
    <>
    <HeroBanner/>
    <div className='products-heading'>
      <h2>Best Selling Products</h2>
      <p>Speaker of many variants</p>
    </div>
    <div className='products-container'>
      {
        ['product 1','product 2'].map((product) => (product))
      }
    </div>
    Footer
    </>
  )
}

export default Home