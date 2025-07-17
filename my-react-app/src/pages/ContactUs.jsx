import React from 'react'
import { Link } from 'react-router-dom'
import Contact from '../components/contactUs/contact'
import Form from '../components/contactUs/form'
import GoogleMap from '../components/contactUs/map'
import './ContactUs.css'

function ContactUs() {
  return (
    <div>
      <Contact ></Contact>
      <div className="group">
        <Form ></Form>
        <div className="google-map">
          <GoogleMap ></GoogleMap>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
