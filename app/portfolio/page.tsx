import Breadcrumb from '@/components/Common/Breadcrumb'
import TechStack from '@/components/TechStack/TechStack'
import Testimonials from '@/components/Testimonials'
import ClientComponent from '@/components/client/client'
import Portfolio from '@/components/portfolio/portfolio'
import React from 'react'

function page() {
  return (
    <>
    <Breadcrumb pageName="Portfolio Page"
        description="Our projects that are done by us are shown here"/>
    <Portfolio />
    <ClientComponent />
    <Testimonials />
    <TechStack />
    </>
  )
}

export default page