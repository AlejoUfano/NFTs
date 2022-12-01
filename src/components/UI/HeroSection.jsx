import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'
import './heroSection.css'
import heroImg from '../../assets/images/hero.jpg'

const HeroSection = () => {
  return (
    <section className="heroSection">
        <Container>
            <Row>
                <Col lg='6' md='6'>
                    <div className="heroContent">
                        <h2>Discover rare digital art and collect <span>sell extraordinary</span> NFTs</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam labore omnis eveniet odit alias. Maxime sunt repellat cumque perspiciatis velit.</p>
                        <div className="heroBtns d-flex align-items-center gap-4">
                            <button className='exploreBtn d-flex align-items-center gap-2'> <i class="ri-rocket-line"></i> <Link to='/market'>Explore</Link></button>
                            <button className='createBtn d-flex align-items-center gap-2'> <i class="ri-ball-pen-line"></i> <Link to='/create'>Create</Link></button>
                        </div>
                    </div>
                </Col>
                <Col lg='6' md='6'>
                    <div className="heroImg">
                        <img src={heroImg} alt="" className='w-100'/>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default HeroSection