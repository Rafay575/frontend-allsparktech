interface ServiceHeroData {
    btnText: string;
    btnText2: string;
    btnText3: string;
    title: string;
    description: string;
    formSubtitle: string;
    formTitle: string;
}

interface ServiceLogosData {
    logos: string[];
}

interface ServiceCardItem {
    icon: string;
     number: number | string;
    text: string;
    symbol?: string;
}

interface ServiceCardData {
    title: string;
    cards: ServiceCardItem[];
}

interface ServiceAboutFeature {
    icon: string;
    title: string;
}


interface ServiceAboutData {
    image1: string;
    image2: string;
    image3: string;
    subTitle: string;
    title: string;
    des: string;
    features: ServiceAboutFeature[];
}

interface ServiceProcessStep {
    image: string;
    heading: string;
    des: string;
    dir?: string;
}

interface ServiceProcessData {
    title: string;
    des: string;
    letters: string[];
    process: ServiceProcessStep[];
}

interface ServiceTechnologiesItem {
    name: string;
    Icon: string;
}

interface ServiceTechnologiesData {
    title: string;
    des: string;
    frontend: ServiceTechnologiesItem[];
    backend: ServiceTechnologiesItem[];
    database: ServiceTechnologiesItem[];
    others: ServiceTechnologiesItem[];
}

interface ServiceOfferingCard {
    icon: string;
    heading: string;
    des: string;
    btnText: string;
}

interface ServiceOfferingData {
    title: string;
    letters: string[];
    des: string;
    cards: ServiceOfferingCard[];
}

interface ServiceBannerData {
    image: string;
    Subtitle: string;
    title: string;
    des: string;
    btnText: string;
}

interface ServiceIndusData {
    image1: string;
    image2: string;
    image3: string;
    title: string;
    letters: string[];
    des1: string;
    des2: string;
}

interface ServiceIndustriesItem {
    image: string;
    title: string;
    des: string;
    btnText: string;
}

interface ServiceIndustriesData {
    title: string;
    letters: string[];
    industries: ServiceIndustriesItem[];
}

interface ServiceClientData {
    image1: string;
    image2: string;
    image3: string;
    image4: string;
    imageText: string;
    title: string;
    letters: string[];
    des1: string;
    des2: string;
    lis: string[];
}

interface ServiceFAQItem {
    question: string;
    answer: string;
}

interface ServiceFAQsData {
    image1: string;
    image2: string;
    image3: string;
    subTitle: string;
    title: string;
    faqs: ServiceFAQItem[];
}

interface ServiceContactData {
    image: string;
    subTitle: string;
    title: string;
    btnText: string;
}

export interface ServicePageData {
    serviceHero: ServiceHeroData;
    serviceLogos: ServiceLogosData;
    serviceCard: ServiceCardData;
    serviceAbout: ServiceAboutData;
    serviceProcess: ServiceProcessData;
    serviceTechnologies?: ServiceTechnologiesData;
    serviceOffering: ServiceOfferingData;
    serviceBanner: ServiceBannerData;
    serviceIndus: ServiceIndusData;
    serviceIndustries: ServiceIndustriesData;
    serviceClient: ServiceClientData;
    serviceFAQs: ServiceFAQsData;
    serviceContact: ServiceContactData;
}

export interface ServicePageDataProps {
    servicePageData: ServicePageData
} 
