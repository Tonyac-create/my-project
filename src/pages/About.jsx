import React from 'react'
import { LayoutPagecontact } from '../components/layout/LayoutPagecontact'
import TabAbout from '../components/ui/TabAbout'

export default function About() {
    const navigationTab = [
        { name: "Mentions légales" },
        { name: "CGU" },
        { name: "CGV" },
    ]
    return (
        <LayoutPagecontact>
            <section className='mt-32 px-4'>
                <div className='flex gap-2'>
                    {navigationTab.map((item) => (
                        <TabAbout key={item.name}>
                            {item.name}
                        </TabAbout>
                    ))}
                </div>
            </section>
        </LayoutPagecontact>
    )
}
