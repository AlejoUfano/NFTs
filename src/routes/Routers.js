import React from 'react'

import { Routes, Route, Navigate } from 'react-router-dom'

import Home from '../pages/Home.jsx'
import Wallet from '../pages/Wallet.jsx'
import Contact from '../pages/Contact.jsx'
import EditProfile from '../pages/EditProfile.jsx'
import Market from '../pages/Market.jsx'
import SellerProfile from '../pages/SellerProfile.jsx'
import NftDetails from '../pages/NftDetails.jsx'
import Create from '../pages/Create.jsx'

const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to='/home'/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/wallet' element={<Wallet/>} />
        <Route path='/edit-profile' element={<EditProfile/>} />
        <Route path='/market' element={<Market/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/seller-profile' element={<SellerProfile/>} />
        <Route path='/details/:id' element={<NftDetails/>} />
        <Route path='/create' element={<Create/>} />    
    </Routes>
  )
}

export default Routers