import React, { useRef } from 'react'
import CommonSection from '../components/UI/CommonSection/CommonSection.jsx'
import { Container, Row, Col } from 'reactstrap'
import '../styles/contact.css'

const Contact = () => {

  const nameRef = useRef('')
  const emailRef = useRef('')
  const subjectRef = useRef('')
  const messageRef = useRef('')

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <>
      <CommonSection title='Contact'/>
      <section>
        <Container>
          <Row>
            <Col lg='6' md='6' className='m-auto text-center'>
              <h2>Drop a message</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe quia ratione dolorem non dolor illo eos natus earum in tenetur.</p>
              <div className="contact mt-4">
                <form onSubmit={handleSubmit}>
                  <div className="formInput">
                    <input type="text" placeholder='Enter your name' ref={nameRef} />
                  </div>
                  <div className="formInput">
                    <input type="email" placeholder='Enter your email' ref={emailRef} />
                  </div>
                  <div className="formInput">
                    <input type="text" placeholder='Enter subject' ref={subjectRef} />
                  </div>
                  <div className="formInput">
                    <textarea rows="8" placeholder='Write message' ref={messageRef}></textarea>
                  </div>
                  <button className="sendBtn">Send a Message</button>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Contact