import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import CommonSection from '../components/UI/CommonSection/CommonSection.jsx'
import NftCard from '../components/UI/NftCard/NftCard.jsx'
import ava from '../assets/images/ava-01.png'
import img from '../assets/images/img-01.jpg'
import '../styles/create.css'

const Create = () => {
  const item = {
    id: "07",
    title: "Civilian",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam adipisci cupiditate officia, nostrum et deleniti vero corrupti facilis minima laborum nesciunt nulla error natus saepe illum quasi ratione suscipit tempore dolores. Recusandae, similique modi voluptates dolore repellat eum earum sint.",
    imgUrl: img,
    creator: "Kiran Ram",
    creatorImg: ava,
    currentBid: 6.13,
  }
  return (
    <>
      <CommonSection title='Create Item'/>

      <section>
        <Container>
          <Row>
            <Col lg='3' md='4' sm='6'>
              <h5 className='mb-4 text-light'>Preview Item</h5>
              <NftCard data={item}/>
            </Col>
            <Col lg='9' md='8' sm='6'>
              <div className="createItem">
                <form>

                  <div className="formInput">
                    <label htmlFor="">Upload File</label>
                    <input type="file" className='uploadInput' />
                  </div>

                  <div className="formInput">
                    <label htmlFor="">Price</label>
                    <input type="number" placeholder='Enter price (ETH)' />
                  </div>

                  <div className="formInput">
                    <label htmlFor="">Minimum Bid</label>
                    <input type="number" placeholder='Enter minimum bid' />
                  </div>

                 <div className='d-flex align-items-center justify-content-between'>
                   <div className="formInput w-50">
                     <label htmlFor="">Starting Date</label>
                     <input type="date" />
                   </div>
                  
                   <div className="formInput w-50">
                     <label htmlFor="">Expiration Date</label>
                     <input type="date" />
                   </div>
                 </div>

                  <div className="formInput">
                    <label htmlFor="">Description</label>
                    <textarea name="" id="" rows="7" className='w-100' placeholder='Enter description'></textarea>
                  </div>


                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Create