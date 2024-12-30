import React from 'react'
import caretRight from "../../assets/caretRight.svg"
import check from "../../assets/check.svg"
import services from '../../lib/card_services'


export default function CardServices() {
    
    return (
        <div className="md:flex md:flex-row md:gap-6 md:mt-6">
            {services.map((service) => (
                <article key={service.title} className={`p-2 rounded-md border border-marianBlue shadow-md shadow-marianBlue md:w-[550px] ${service.title === "Développement de sites web" ? "h-[500px]" : ""}`}>
                    <h3 className="text-marianBlue text-2xl font-semibold my-2 font-merriweather">{service.title}</h3>
                    <p className="text-lg font-medium">{service.description}</p>
                    <h4 className='text-marianBlue font-semibold'>Processus :</h4>
                    <div className='flex flex-col items-start gap-3 mt-2'>
                        {service.etapes.map((etape) => (
                            <span className='px-3 py-2 rounded-full border-2 border-marianBlue'>{etape}</span>
                        ))}
                    </div>
                    <ul className="text-lg my-3">
                        {service.propositions.map((proposition, index) => (
                            <li key={index} className="flex flex-col gap-2">
                                <div className="flex items-center gap-2 font-semibold">
                                    <img src={caretRight} alt="" className="w-4 h-4" />
                                    {proposition}
                                </div>
                                {service.details[index] && service.details[index].length > 0 && (
                                    <ul className="flex flex-col gap-3 pl-6 mb-3">
                                        {service.details[index].map((detail, detailIndex) => (
                                            <div className="flex items-center gap-2">
                                                <img src={check} alt="" className="w-4 h-4" />
                                                <li key={detailIndex} className="text-xl pl-2">
                                                    {detail}
                                                </li>
                                            </div>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>


                    {service.fournitures && (
                        <p><span className='font-bold'>A fournir :</span> {service.fournitures}</p>
                    )}
                </article>
            ))}
        </div>
    )
}
