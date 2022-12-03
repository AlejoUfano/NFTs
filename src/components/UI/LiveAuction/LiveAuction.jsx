import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import img01 from '../../../assets/images/img-01.jpg'
import ava01 from '../../../assets/images/ava-01.png'
import './liveAuction.css'
import { NFT__DATA } from '../../../assets/data/data'
import NftCard from '../NftCard/NftCard'

const LiveAuction = () => {
  return (
    <section>
        <Container>
            <Row>
                <Col lg='12' className='mb-5'>
                    <div className="liveAuctionTop d-flex align-items-center justify-content-between">
                        <h3>Live Auction</h3>
                        <span><Link to='/market'>Explore more</Link></span>
                    </div>
                </Col>                
                    
                    {
                        NFT__DATA.map(item =>(
                            <Col lg='3' className='mb-4'>
                                <NftCard data={item} key={item.id}/>
                            </Col>
                        ))
                    }

            </Row>
        </Container>
    </section>
  )
}

export default LiveAuction