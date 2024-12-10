import React from 'react'
import CardServices from './ui/CardServices'
import CTAButton from "./ui/CTAButton";

export default function ServicesSection() {
  return (
    <section id="services" className='flex flex-col gap-4 my-7 px-3 md:p-12'>
      <h2 className="text-4xl font-bold mb-4 font-merriweather">
        Mes services
      </h2>
      <CTAButton onClick={() => handleClick(navigationButton[0].href)}>
        Prendre rendez-vous
      </CTAButton>
      <CardServices />
    </section>
  )
}
