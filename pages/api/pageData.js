export default async function handler(req, res) {
  const graphqlQuery = {
    query: `
     query GetPageData {
  page(id: "71", idType: DATABASE_ID) {
    title
    landingPageHero { 
      heroTitle
      heroSubtitle
      ctaButtonText
      ctaButtonLink
      heroBackgroundImage {
        node {
          sourceUrl
        }
      } 
    }
      landingPagePricingPlans {
      pricingPlan1Title
      pricingPlan1Description
      pricingPlan1Price
      pricingPlan2Title
      pricingPlan2Description
      pricingPlan2Price
      pricingPlan3Title
      pricingPlan3Description
      pricingPlan3Price
      }
  }
}
    `
  };

  try {
    const response = await fetch('https://expenses-tracker-fc76f9.ingress-alpha.ewp.live/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(graphqlQuery),
    });

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching WordPress data:', error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}