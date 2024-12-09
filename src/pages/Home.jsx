import React from 'react'
import ProjectsSection from "../components/ProjectsSection"
import ServicesSection from "../components/ServicesSection"
import StackSection from "../components/StackSection"
import HeroSection from '../components/HeroSection'
import { MainLayout } from '../components/layout/Layout'

export default function Home() {
    return (
        <MainLayout>
            <HeroSection />
            <StackSection />
            <ProjectsSection />
            <ServicesSection />
        </MainLayout>

    )
}
