import React, { useState } from 'react'
import CommonSection from '../components/UI/CommonSection/CommonSection'
import { Container, Row, Col } from 'reactstrap'
import { NFT__DATA } from '../assets/data/data'
import NftCard from '../components/UI/NftCard/NftCard'
import '../../src/styles/market.css'


const Market = () => {
  const [data,setData] = useState(NFT__DATA)
  const handleCategory = () => {

  }
  const handleItems = () => {
    
  }
  // ====== SORTING DATA BY HIGH, MID, LOW RATE ======
  const handleSort = (e) => {
    const filterValue = e.target.value
    if (filterValue === 'high') {
      const filterData = NFT__DATA.filter(item => item.currentBid >= 6)
      setData(filterData)
    }
    if (filterValue === 'mid') {
      const filterData = NFT__DATA.filter(item => item.currentBid >= 5.50 && item.currentBid < 6)
      setData(filterData)
    } else {
      const filterData = NFT__DATA.filter(item => item.currentBid >= 4.89 && item.currentBid < 5.50)
      setData(filterData)
    }
  }
  return (
    <>
      <CommonSection title='Marketplace'/>
      <section>
        <Container>
          <Row>
            <Col lg='12' className='mb-5'>  
              <div className="marketProductFilter d-flex align-items-center justify-content-between">
                
                <div className="filterLeft d-flex align-items-center gap-5">

                  <div className="allCaterogyFilter">
                    <select onChange={handleCategory}>
                      <option>All Categories</option>
                      <option value="art">Art</option>
                      <option value="music">Music</option>
                      <option value="domain-name">Domain Name</option>
                      <option value="virtual-world">Virtual World</option>
                      <option value="trending-cards">Trending Cards</option>
                    </select>
                  </div>

                  <div className="allCaterogyFilter">
                    <select onChange={handleItems}>
                      <option>All Items</option>
                      <option value="single-item">Single Item</option>
                      <option value="bundle">Bundle</option>
                    </select>
                  </div>

                </div>

                <div className="filterRight">

                  <select onChange={handleSort}>
                    <option>Sort By</option>
                    <option value="high">High Rate</option>
                    <option value="mid">Mid Rate</option>\
                    <option value="low">Low Rate</option>
                  </select>

                </div>

              </div>
            </Col>
            {
              data?.map(item=>(
                <Col lg='3' md='4' sm='6' className='mb-4' key={item.id}>
                  <NftCard data={item} />
                </Col>                
              ))
            }
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Market