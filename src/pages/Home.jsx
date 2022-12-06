import React from 'react'
import HeroSection from '../components/UI/HeroSection'
import LiveAuction from '../components/UI/LiveAuction/LiveAuction'
import SellerSection from '../components/UI/SellerSection/SellerSection'
import TrendingSection from '../components/UI/TrendingSection/TrendingSection'

const Home = () => {
  return (
    <>
      <HeroSection />
      <LiveAuction />
      <SellerSection />
      <TrendingSection />
    </>
  )
}

export default Home