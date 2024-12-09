import React, { useState } from 'react'
import { LayoutPagecontact } from '../components/layout/LayoutPagecontact'
import TabAbout from '../components/ui/TabAbout'
import Mentions from '../components/sectionsPageAbout/Mentions'
import CGU from '../components/sectionsPageAbout/CGU'
import CGV from '../components/sectionsPageAbout/CGV'


export default function About() {
    const [activeTab, setActiveTab] = useState('Mentions légales')

    const navigationTab = [
        { name: "Mentions légales" },
        { name: "CGU" },
        { name: "CGV" },
    ]

    const renderContent = () => {
        switch (activeTab) {
            case "Mentions légales":
                return <Mentions />
            case "CGU":
                return <CGU />
            case "CGV":
                return <CGV />
            default:
                return null
        }
    }

    return (
        <LayoutPagecontact>
            <section className='mt-32 mb-10 px-4'>
                <div className='flex gap-2'>
                    {navigationTab.map((item) => (
                        <TabAbout
                            key={item.name}
                            onClick={() => setActiveTab(item.name)}
                            isActive={item.name === activeTab}
                        >
                            {item.name}
                        </TabAbout>
                    ))}
                </div>
                {renderContent()}
            </section>
            <img
                src="./src/assets/Logo_FD_Enligne_Bluegradient.webp"
                alt="Logo FreeDev"
                className='w-52 h-22 ml-4 md:w-52 md:h-20 shadow-lg shadow-blue-400'
            />
        </LayoutPagecontact>
    )
}
