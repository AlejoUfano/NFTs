import React from 'react'
import './stepSection.css'
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'

const STEP__DATA = [
    {
        title: 'Setup your wallet',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dignissimos aspernatur modi aut autem sapiente.',
        icon: 'ri-wallet-line',
        link: '/wallet'
    },
    {
        title: 'Create your collection',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dignissimos aspernatur modi aut autem sapiente.',
        icon: 'ri-layout-masonry-line',
        link: '/create'
    },
    {
        title: 'Add your NFTs',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dignissimos aspernatur modi aut autem sapiente.',
        icon: 'ri-image-line',
        link: '/market'
    },
    {
        title: 'List them for sale',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dignissimos aspernatur modi aut autem sapiente.',
        icon: 'ri-list-check',
        link: '/market'
    }
]


const StepSection = () => {
  return (
    <section>
        <Container>
            <Row>
                <Col lg='12' className='mb-4'>
                    <h3 className="stepTitle">Create and sell your NFTs</h3>
                </Col>
                {
                    STEP__DATA.map((item, index)=>
                        <Col lg='3' md='4' sm='6' key={index} className='mb-4'>
                            <div className="singleStepItem">
                                <span><i class={item.icon}></i></span>
                                <div className="stepItemContent">
                                     <h5>
                                     <Link to={item.link}>{item.title}</Link>
                                    </h5>
                                    <p className='mb-0'>{item.desc}</p>
                                </div>
                            </div>
                        </Col>
                    )
                }
            </Row>
        </Container>
    </section>
  )
}

export default StepSection