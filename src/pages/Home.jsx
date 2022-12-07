import React from 'react'
import HeroSection from '../components/UI/HeroSection'
import LiveAuction from '../components/UI/LiveAuction/LiveAuction'
import SellerSection from '../components/UI/SellerSection/SellerSection'
import StepSection from '../components/UI/StepSection/StepSection'
import TrendingSection from '../components/UI/TrendingSection/TrendingSection'

const Home = () => {
  return (
    <>
      <HeroSection />
      <LiveAuction />
      <SellerSection />
      <TrendingSection />
      <StepSection />
    </>
  )
}

export default Home