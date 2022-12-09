import React from 'react'
import './modal.css'

const Modal = ({setShowModal}) => {
  return (
    <div className="modalWrapper">
      <div className="singleModal">

        <span className='closeModal'><i class="ri-close-line" onClick={()=>setShowModal(false)}></i></span>

        <h6 className='text-center text-light'>Place a Bid</h6>
        <p className='text-center text-light'>You must bid at least <span className='money'>5.13 ETH</span></p>

        <div className="inputItem mb-4">
          <input type="number" placeholder='00 : 00 ETH'/>
        </div>

        <div className="inputItem mb-3">
          <h6>Enter Quantity, 7 available</h6>
          <input type="number" placeholder='Enter quantity'/>
        </div>

        <div className='d-flex align-items-center justify-content-between'>
          <p>You must bid at least</p>
          <span className='money'>5.13 ETH</span>
        </div>

        <div className='d-flex align-items-center justify-content-between'>
          <p>Service Fee</p>
          <span className='money'>0.19 ETH</span>
        </div>

        <div className='d-flex align-items-center justify-content-between'>
          <p>Total Bid Amount</p>
          <span className='money'>5.32 ETH</span>
        </div>

        <button className="placeBidBtn">
          Place a Bid
        </button>

      </div>
      
    </div>
  )
}

export default Modal