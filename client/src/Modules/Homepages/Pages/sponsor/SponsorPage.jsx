import React from 'react'
import Hero from './Hero'   // ✅ remove { }
import ImpactPlan from './ImpactPlan'
import TransparencySection from './TransparencySection'
import ContributionSection from './ContributionSection'
const SponsorPage = () => {     // ✅ Capital S
    return (
        <>
            <Hero />
            <ImpactPlan />
            <TransparencySection />
            {/* <ContributionSection /> */}
        </>
    )
}

export default SponsorPage;     // ✅ default export