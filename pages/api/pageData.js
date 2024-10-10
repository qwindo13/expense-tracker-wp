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
    landingPageFeatures {
      feature1Title
      feature1Description
      feature1Image {
        node {
          sourceUrl
        }
      }
      feature2Title
      feature2Description
      feature3Title
      feature3Description

    }
    landingPagePricingPlans {
      title
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
    landingPageFaq {
      faqQuestion1
      faqAnswer1
      faqQuestion2
      faqAnswer2
      faqQuestion3
      faqAnswer3
      faqQuestion4
      faqAnswer4
    }
       landingPageMarquee {
      marqueeText
    }
        landingPageTestimonials {
          author1Name
          author1Review
          author1Stars
          author1Image {
            node {
              sourceUrl
            }
          }
          author2Name
          author2Review
          author2Stars
          author2Image {
            node {
              sourceUrl
            }
          }
          author3Name
          author3Review
          author3Stars
          author3Image {
            node {
              sourceUrl
            }
          }
        }
          landingPageCta {
            ctaTitle
            ctaSubtitle
            ctaButtonText
            ctaButtonLink
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