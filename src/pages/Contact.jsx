import React from 'react'
import CallSection from "../components/CallSection"
import { LayoutPagecontact } from '../components/layout/LayoutPagecontact'
import ContactSection from '../components/ContactSection'

export default function Contact() {
  return (
    <LayoutPagecontact>
      <ContactSection />
      <CallSection />
    </LayoutPagecontact>
  )
}
