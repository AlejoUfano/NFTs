import React from 'react'
import HeroSection from '../components/UI/HeroSection'
import LiveAuction from '../components/UI/LiveAuction/LiveAuction'
import SellerSection from '../components/UI/SellerSection/SellerSection'

const Home = () => {
  return (
    <>
      <HeroSection />
      <LiveAuction />
      <SellerSection />
    </>
  )
}

export default Home