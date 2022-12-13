import React from 'react'
import CommonSection from '../components/UI/CommonSection/CommonSection.jsx'
import { Link, useParams } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'
import { NFT__DATA } from '../assets/data/data'
import LiveAuction from '../components/UI/LiveAuction/LiveAuction.jsx'
import '../styles/nftDetails.css'

const NftDetails = () => {
  const { id } = useParams()

  const singleNft = NFT__DATA.find(item  => item.id === id)
  
  return (
    <>
      <CommonSection title={singleNft.title}/>
      
      <section>
        <Container>
          <Row>
            <Col lg='6' md='6' sm='6'>
              <img src={singleNft.imgUrl} alt="" className='w-100 singleNftImg'/>
            </Col>
            <Col lg='6' md='6' sm='6'>
              <div className="singleNftContent">
                <h2>{singleNft.title}</h2>

                <div className='d-flex align-items-center justify-content-between mt-4 mb-4'>

                  <div className='d-flex align-items-center gap-4 singleNftSeen'>
                    <span><i class="ri-eye-line"></i> 234</span>
                    <span><i class="ri-heart-line"></i> 123</span>
                  </div>
                
                  <div className='d-flex align-items-center gap-2 singleNftMore'>
                    <span><i class="ri-send-plane-line"></i></span>
                    <span><i class="ri-more-2-line"></i></span>
                  </div>

                </div>

                <div className="nftCreator d-flex gap-3">
                  <div className="creatorImg">
                    <img src={singleNft.creatorImg} alt="" className='w-100'/>
                  </div>
                  <div className="creatorDetail">
                    <p>Created By</p>
                    <h6>{singleNft.creator}</h6>
                  </div>
                </div>

                <p className='my-4'>{singleNft.desc}</p>
                <button className='singleNftBtn d-flex align-items-center gap-2 w-100'><i class="ri-shopping-bag-line"></i><Link to='/wallet'>Place a Bid</Link></button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <LiveAuction/>
    </>
  )
}

export default NftDetails