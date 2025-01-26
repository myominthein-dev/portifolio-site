'use client'
import React from 'react'
import { Spotlight } from './ui/SpotLight'
import Container from './Container'

const HeroSection = () => {
  return (
      <section id='home' className='min-h-screen mt-10 z-50'>
        <Container>
          <Spotlight />
           Hero
         </Container>
    </section>
  )
}

export default HeroSection