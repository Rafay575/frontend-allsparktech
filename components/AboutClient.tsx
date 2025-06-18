// app/about/AboutClient.tsx
'use client';

import Topnav from '@/components/Topnav';
import Navbar2 from '@/components/Navbar2';
import HeroSection from '@/components/HeroSection';
import Footer2 from '@/components/Footer2';
import ServiceCards from '@/components/ServiceCards';
import AboutPageComponent from '@/components/AboutPageComponent';
import CoreValuesSemiCircle from '@/components/CoreValuesSemiCircle';
import React, { Suspense } from 'react';

const AboutClient = () => {
  return (
    <>
      <Topnav />
      <Navbar2 />
      <HeroSection
        title="About Us"
        backgroundImage="breadcrum.webp"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About Us', href: '/About' },
        ]}
      />
      <ServiceCards />

      <Suspense fallback={<div>Loading About Page...</div>}>
        <AboutPageComponent />
      </Suspense>

      <CoreValuesSemiCircle />
      <Footer2 />
    </>
  );
};

export default AboutClient;
