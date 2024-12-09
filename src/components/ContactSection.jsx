import React from 'react'
import upRight from "../assets/upRight.svg";
import envelope from "../assets/envelope.svg";
import phone from "../assets/phone.svg";
import linkedin from "../assets/linkedin.svg";
export default function ContactSection() {
    return (
        <section className='mt-28 px-3 pt-7 font-roboto '>
            <h2 className="text-4xl font-bold mb-4 font-merriweather text-marianBlue">Contactez moi</h2>
            <h3 className="text-2xl mb-4">Je m'appelle Angélique Copéré et je suis ravie que vous soyez intéressé(e) par mes services ! Que vous ayez une question, un projet en tête ou que vous souhaitiez simplement échanger, n'hésitez pas à me contacter.</h3>
            <h4 className='font-semibold text-2xl mb-2'>Comment me joindre ?</h4>
            <ul>
                <li className='flex items-center gap-2'>
                    <img src={linkedin} alt="" className="w-6 h-6" />
                    <a href="https://www.linkedin.com/in/angelique-copere-dev/" target='_blank' className='text-lg'>LinkedIn</a>
                    <img src={upRight} alt="" className="w-4 h-4" />
                </li>
                <li className='flex items-center gap-2'>
                    <img src={envelope} alt="" className="w-6 h-6" />
                    <a href="mailto:angelique.copere@gmail.com" className='text-lg'>angelique.copere@gmail.com</a>
                </li>
                <li className='flex items-center gap-2 text-lg'>
                    <img src={phone} alt="" className="w-6 h-6" />
                    06.63.70.48.67
                </li>
            </ul>
            <h4 className='font-semibold text-2xl my-4'>Ci dessous, la possibilité de réserver un appel avec moi de 30 minutes.</h4>
        </section>
    )
}
