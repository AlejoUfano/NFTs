import React from 'react'
import { Container } from 'reactstrap'
import './commonSection.css'

const CommonSection = ({title}) => {
  return (
    <section className='commonSection'>
        <Container className='text-center'><h2>{title}</h2></Container>
    </section>
  )
}

export default CommonSection