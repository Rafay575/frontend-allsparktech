import Footer2 from '@/components/Footer2'
import Industries from '@/components/Industries'
import Navbar2 from '@/components/Navbar2'
import ServiceAbout from '@/components/ServiceAbout'
import ServiceCard from '@/components/ServiceCard'
import ServiceContact from '@/components/ServiceContact'
import ServiceFaqs from '@/components/ServiceFaqs'
import ServiceHero from '@/components/ServiceHero'
import Logos from '@/components/ServiceLogos'
import ServiceProcess from '@/components/ServiceProcess'
import ServicesBanner from '@/components/ServicesBanner'
import ServicesClients from '@/components/ServicesClients'
import ServicesIndus from '@/components/ServicesIndus'
import ServicesOffering from '@/components/ServicesOffering'
import ServiceTechnologies from '@/components/ServiceTechnologies'
import React from 'react'

export default function page() {
    return (
        <>
            <Navbar2 />
            <ServiceHero/>
            <Logos/>
            <ServiceCard/>
            <ServiceAbout/>
            <ServiceProcess/>
            <ServiceTechnologies/>
            <ServicesOffering/>
            <ServicesBanner/>
            <ServicesIndus/>
            <Industries/>
            <ServicesClients/>
            <ServiceFaqs/>
            <ServiceContact/>
            <Footer2/>
        </>
    )
}
