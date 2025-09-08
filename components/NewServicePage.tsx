import Industries from '@/components/Industries'
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
import {ServicePageDataProps} from "@/lib/types"

export default function NewServicePage({servicePageData}:ServicePageDataProps) {
    console.log(servicePageData)
    return (
        <>
            <ServiceHero serviceHero={servicePageData.serviceHero} />
            <Logos serviceLogos={servicePageData.serviceLogos} />
            <ServiceCard serviceCard={servicePageData.serviceCard} />
            <ServiceAbout serviceAbout={servicePageData.serviceAbout} />
            <ServiceProcess serviceProcess={servicePageData.serviceProcess} />
            {servicePageData.serviceTechnologies && <ServiceTechnologies serviceTechnologies={servicePageData.serviceTechnologies}/>}
            <ServicesOffering serviceOffering={servicePageData.serviceOffering} />
            <ServicesBanner serviceBanner={servicePageData.serviceBanner} />
            <ServicesIndus serviceIndus={servicePageData.serviceIndus} />
            <Industries serviceIndustries={servicePageData.serviceIndustries} />
            <ServicesClients serviceClient={servicePageData.serviceClient} />
            <ServiceFaqs serviceFAQs={servicePageData.serviceFAQs} />
            <ServiceContact serviceContact={servicePageData.serviceContact} />
        </>
    )
}
