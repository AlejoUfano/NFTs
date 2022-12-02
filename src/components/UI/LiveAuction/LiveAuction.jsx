import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import img01 from '../../../assets/images/img-01.jpg'
import ava01 from '../../../assets/images/ava-01.png'

const LiveAuction = () => {
  return (
    <section>
        <Container>
            <Row>
                <Col lg='12' className='mb-4'>
                    <div className="liveAuctionTop d-flex align-items-center justify-content-between">
                        <h3>Live Auction</h3>
                        <span><Link to='/market'>Explore more</Link></span>
                    </div>
                </Col>
                <Col lg='3'>
                    
                    <div className='singleNftCard'>
                        
                        <div className="nftImg">
                            <img src={img01} alt="" className='w-100' />
                        </div>
                        
                        <div className="nftContent">
                            
                            <h5 className='nftTitle'>Travel Monkey Club</h5>
                            <div className="creatorInfoWrapper">

                                <div className="creatorImg">
                                    <img src={ava01} alt="" className='w-100' />
                                </div>
                                
                                <div className="creatorInfo d-flex align-items-center justify-content-between">

                                    <div className='w-50'>
                                        <h6>Created By</h6>
                                        <p>Trista Francis</p>
                                    </div>

                                    <div className='w-50'> 
                                        <h6>Current Bid</h6>
                                        <p>3.13 ETH</p>
                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>

                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default LiveAuction