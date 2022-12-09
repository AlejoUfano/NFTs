import React from 'react'
import './seller.css'
import { Container, Row, Col } from 'reactstrap'
import { SELLER__DATA } from '../../../assets/data/data'

const SellerSection = () => {
  return (
    <section>
        <Container>
            <Row>
                <Col lg='12' className='mb-5'>
                    <div className="sellerSectionTitle ">
                        <h3>Top Seller</h3>
                    </div>
                </Col>
                {
                    SELLER__DATA.map((item, index)=>
                    <Col lg='2' md='3' sm='4' xs='6' key={item.id} className='mb-4'>
                    <div className="singleSellerCard d-flex align-items-center gap-3">
                        <div className="sellerImg">
                            <img src={item.sellerImg} alt="" className='w-100' />
                        </div>
                        <div className="sellerContent">
                            <h6>{item.sellerName}</h6>
                            <h6>{item.currentBid} ETH</h6>
                        </div>
                    </div>
                </Col>)
                }
                
            </Row>
        </Container>
    </section>
  )
}

export default SellerSection