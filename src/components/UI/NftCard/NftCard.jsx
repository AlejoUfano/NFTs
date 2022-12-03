import React from 'react'
import { Link } from 'react-router-dom'
import img01 from '../../../assets/images/img-01.jpg'
import ava01 from '../../../assets/images/ava-01.png'


const NftCard = ({data}) => {
  return (
    <div className='singleNftCard'>
                        
                        <div className="nftImg">
                            <img src={data.imgUrl} alt="" className='w-100' />
                        </div>
                        
                        <div className="nftContent">
                            
                            <h5 className='nftTitle'><Link to={`/market/${data.id}`}>{data.title}</Link></h5>
                            <div className="creatorInfoWrapper d-flex gap-3">

                                <div className="creatorImg">
                                    <img src={data.creatorImg} alt="" className='w-100' />
                                </div>
                                
                                <div className="creatorInfo w-100 d-flex align-items-center justify-content-between">

                                    <div>
                                        <h6>Created By</h6>
                                        <p>{data.creator}</p>
                                    </div>

                                    <div> 
                                        <h6>Current Bid</h6>
                                        <p>{data.currentBid} ETH</p>
                                    </div>

                                </div>

                            </div>

                            <div className='mt-3 d-flex align-items-center justify-content-between'>

                                <button className='bidBtn d-flex align-items-center gap-2'>
                                    <i class="ri-shopping-bag-line"></i> 
                                    Place Bid
                                </button>
                                
                                <span className='historyLink'><Link to='#'>View History</Link></span>

                            </div>

                        </div>
                    </div>
  )
}

export default NftCard