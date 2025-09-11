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
// Interface for individual technology items (unchanged, matches JSON)
interface ServiceTechnologiesItem {
    name: string;
    Icon: string;
}

// New interface for each technology category (e.g., Frontend, Backend)
interface ServiceTechnologyCategory {
    name: string; // e.g., "Frontend", "Backend"
    techs: ServiceTechnologiesItem[]; // Array of technologies like { name: "React.js", Icon: "react.png" }
}

// Updated interface for the technologies section
interface ServiceTechnologiesData {
    title: string; // e.g., "Technologies We Use for Custom Software Development"
    des: string; // Description
    technologies: ServiceTechnologyCategory[]; // Array of categories like Frontend, Backend, etc.
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
