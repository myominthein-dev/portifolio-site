import React from 'react'
import Container from './Container'
import ContactForm from './ContactForm'
import SectionHeader from './SectionHeader'
//service_6zo91x5 = service id
//template_yx97cxe 
const ContactSection = () => {
  return (
    <section className='min-h-screen  3xl:min-h-[800px] mt-20' id='contact'>
      <Container>
        <SectionHeader>Get In Touch</SectionHeader>
        <ContactForm/>
      </Container>
    </section>
  )
}

export default ContactSection