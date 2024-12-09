import React from 'react'
import caretRight from "../../assets/caretRight.svg"
import check from "../../assets/check.svg"


export default function CardServices() {
    const services = [
        {
            title: "Développement de sites web",
            description: "Que ce soit pour une création complète ou une simple mise à jour, je suis à vos côtés pour concrétiser votre projet de site internet. Profitez d'une présence en ligne efficace pour booster le développement de votre activité.",
            propositions: ["Optimisation SEO", "Animations", "Accessibilité", "Référencement"],
            etapes: ["Élaboration du cahier des charges", "Développement du site"],
            fournitures: ["Wireframe ou prototype", "Design system(logo, couleurs choisies, typographie)"],
            details: [],
        },
        {
            title: "Maintenance de sites web",
            description: "Je propose un service complet de maintenance pour garantir la performance et la fiabilité de votre site web. Cela inclut l’optimisation de la vitesse, la surveillance des erreurs et des mises à jour régulières pour un site toujours à jour et fonctionnel.",
            propositions: ["Optimisation des performances", "Surveillance du site", "Améliorations et ajouts de contenu"],
            etapes: ["Élaboration du cahier des charges", "Maintenance du site"],
            fournitures: [],
            details: [
                [
                    "Optimisation des images",
                    "Minification des fichiers CSS/JS",
                    "Configuration de la mise en cache",
                    "Optimisation pour les utilisateurs mobiles et tablette"
                ],
                [
                    "Vérification régulière que le site est en ligne et fonctionne correctement",
                    "Contrôler les pages et liens brisés et les corriger",
                    "Détection des erreurs 404, 500, et autres erreurs serveur"
                ],
                [
                    "Ajouter de nouvelles pages, produits, articles ou sections sur le site",
                    "Réactualisation des visuels en fonction des nouvelles tendances ou des besoins du client",
                    "Ajouter de nouvelles fonctionnalités en fonction des besoins du client (formulaires, animations, e-commerce)"],
            ],
        }
    ]
    return (
        <>
            {services.map((service) => (
                <article key={service.title} className="p-2 rounded-md border border-marianBlue shadow-md shadow-marianBlue">
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
                            <li key={index} className="flex flex-col gap-2 font-semibold">
                                <div className="flex items-center gap-2">
                                    <img src={caretRight} alt="" className="w-4 h-4" />
                                    {proposition}
                                </div>
                                {service.details[index] && service.details[index].length > 0 && (
                                    <ul className="flex flex-col gap-4 pl-6">
                                        {service.details[index].map((detail, detailIndex) => (
                                            <div className="flex items-center gap-2">
                                                <img src={check} alt="" className="w-4 h-4" />
                                                <li key={detailIndex} className="font-semibold pl-2">
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
        </>
    )
}
