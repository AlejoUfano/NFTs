import React from 'react'
import './trending.css'
import { Container, Row, Col } from 'reactstrap'
import NftCard from '../NftCard/NftCard'
import { NFT__DATA } from '../../../assets/data/data'

const TrendingSection = () => {
  return (
    <section>
        <Container>
            <Row>
                <Col lg='12' className='mb-5'>
                    <h3 className="trendingTitle">Trending</h3>
                </Col>
                {
                    NFT__DATA.slice(0,8).map(item=>(
                        <Col lg='3' md='4' sm='6' key={item.id} className='mb-4'>
                            <NftCard data={item}/>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    </section>
  )
}

export default TrendingSection