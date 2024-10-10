"use client"

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ScreenLoader from "../components/ui/ScreenLoader";
import Button from "../components/ui/Button";
import FeaturesCard from "../components/cards/FeaturesCard";
import PricingCard from "../components/cards/PricingCard";
import TestimonialCard from "../components/cards/TestimonialCard";
import Accordion from "../components/ui/Accordion";
import Marquee from "react-fast-marquee";
import { Wallet, HandCoins, Coins } from "lucide-react";

export default function Home() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/pageData');
        const result = await response.json();
        const combinedData = {
          hero: result.data.page.landingPageHero,
          features: result.data.page.landingPageFeatures,
          pricing: result.data.page.landingPagePricingPlans,
          testimonials: result.data.page.landingPageTestimonials,
          faq: result.data.page.landingPageFaq,
          marquee: result.data.page.landingPageMarquee,
          cta: result.data.page.landingPageCta
        };

        setData(combinedData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <ScreenLoader />;
  }

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-screen bg-white rounded-3xl flex items-end md:items-center bg-cover bg-center h-screen"
        style={{ backgroundImage: `url(${data.hero.heroBackgroundImage?.node?.sourceUrl})` }}
      >
        <div className="absolute inset-0 bg-black/30 rounded-2xl" />
        <div className="container-padding z-10 ">
          <div className="flex flex-col items-start w-full lg:w-2/3">

            {/* Winner Leaf  */}
            <div className="flex items-center mb-8">
              <Image src="/images/leaf-left.svg" alt="Left Winner Leaf" width={40} height={40} />
              <div className="flex flex-col items-center justify-center">
                <span className="text-white text-xl font-medium"> 4.9 Stars </span>
                <span className="text-[#0195FF] text-sm font-medium "> 1000+ Reviews </span>
              </div>
              <Image src="/images/leaf-right.svg" alt="Right Winner Leaf" width={40} height={40} />
            </div>

            <h1 className="text-4xl 2xl:text-6xl font-semibold text-white text-left">{data.hero.heroTitle}</h1>
            <p className="text-base 2xl:text-lg text-white text-left opacity-50 font-medium mt-4">{data.hero.heroSubtitle}</p>
            <div className="flex flex-col md:flex-row md:items-center gap-8 mt-8">
              <Link href={data.hero.ctaButtonLink}>
                <Button icon className="bg-white !text-[#2c2c2c]">{data.hero.ctaButtonText}</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container-padding mt-20">
        <div className="flex flex-col items-center justify-center mb-16 gap-8">

          {/* Trusted by */}
          <div className="flex flex-row gap-4 items-center">
            <div className="flex -space-x-2">
              <Image
                className="inline-block size-12 rounded-full ring-4 ring-neutral-100"
                src="https://i.pravatar.cc/100?img=1"
                alt="User Avatar 1"
                width={100}
                height={100}
              />
              <Image
                className="inline-block size-12 rounded-full ring-4 ring-neutral-100"
                src="https://i.pravatar.cc/100?img=2"
                alt="User Avatar 2"
                width={40}
                height={40}
              />
              <Image
                className="inline-block size-12 rounded-full ring-4 ring-neutral-100"
                src="https://i.pravatar.cc/100?img=3"
                alt="User Avatar 3"
                width={40}
                height={40}
              />
            </div>
            <p className="text-base text-[#2c2c2c]text-left font-medium">Trusted by over +1000 users</p>
          </div>

          <h2 className="text-4xl 2xl:text-5xl font-semibold text-[#2c2c2c]  text-center">Build a stronger financial future, today. </h2>
          <span className="text-base 2xl:text-lg text-[#2c2c2c] opacity-50 font-medium text-center max-w-[283px] sm:max-w-[627px] mx-auto">
            Our app is designed to help you take control of your finances, no matter your experience level. Whether you&apos;re a beginner or an expert, we&apos;ve got you covered.
          </span>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 md:gap-8">
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 ">
            <div className="w-full md:w-1/3">
              <FeaturesCard
                title={data.features.feature1Title}
                icon={<Wallet className="text-[#2c2c2c]" />}
                image={data.features.feature1Image?.node?.sourceUrl}
                highlight
              />
            </div>
            <div className="w-full md:w-2/3">
              <FeaturesCard
                title={data.features.feature2Title}
                description={data.features.feature2Description}
                icon={<HandCoins className="text-white" />}
              />
            </div>
          </div>
          <FeaturesCard
            title={data.features.feature3Title}
            description={data.features.feature3Description}
            icon={<Coins className="text-white" />}
          />
        </div>
      </section>

      {/* Marquee Section */}
      <section className="overflow-hidden relative">
        <div className="absolute top-0 left-0 bottom-0 bg-gradient-to-r from-neutral-100 to-transparent w-12 lg:w-16 z-10"></div>
        <div className="absolute top-0 right-0 bottom-0 bg-gradient-to-l from-neutral-100 to-transparent w-12 lg:w-16 z-10"></div>
        <Marquee autoFil className="min-h-20">
          <div className="flex flex-row items-center justify-center gap-4 opacity-50 px-8 w-auto">
            <Image src="/images/logo-dark.svg" alt="Logo" width={48} height={48} />
            <h2 className="text-4xl 2xl:text-5xl font-semibold text-[#2c2c2c]">{data.marquee.marqueeText}</h2>
          </div>
        </Marquee>
      </section>

      {/* Testimonials Section */}
      <section className=" bg-[#2c2c2c] rounded-3xl flex flex-col items-center min-h-96">
        <div className="container-padding flex flex-col  items-center justify-center gap-8 my-16 lg:my-20 ">
          <div className="flex flex-col items-center justify-center mb-16 gap-8">
            <h2 className="text-4xl 2xl:text-5xl font-semibold text-white text-center">What our users are saying</h2>
            <span className="text-base 2xl:text-lg text-white opacity-50 font-medium text-center max-w-[283px] sm:max-w-[627px] mx-auto">
              Discover how our expense tracking app has transformed the financial lives of our users. Read their stories and see why they love our platform.
            </span>
          </div>
          <div className="flex flex-col items-center justify-center gap-8 relative w-full">
            <div className="absolute top-0 -left-2 bottom-0 bg-gradient-to-r from-[#2c2c2c] to-transparent w-12 lg:w-16 z-10"></div>
            <div className="absolute top-0 -right-2 bottom-0 bg-gradient-to-l from-[#2c2c2c] to-transparent w-12 lg:w-16 z-10"></div>
            <Marquee autoFill={true} >
              <div className="flex items-center justify-center gap-8 mr-8">
                <TestimonialCard
                  authorImage={data.testimonials.author1Image?.node?.sourceUrl}
                  authorName={data.testimonials.author1Name}
                  review={data.testimonials.author1Review}
                  stars={data.testimonials.author1Stars}
                />
                <TestimonialCard
                  authorImage={data.testimonials.author2Image?.node?.sourceUrl}
                  authorName={data.testimonials.author2Name}
                  review={data.testimonials.author2Review}
                  stars={data.testimonials.author2Stars}
                />
                <TestimonialCard
                  authorImage={data.testimonials.author3Image?.node?.sourceUrl}
                  authorName={data.testimonials.author3Name}
                  review={data.testimonials.author3Review}
                  stars={data.testimonials.author3Stars}
                />
              </div>
            </Marquee>
            <Marquee autoFill direction="right">
              <div className="flex items-center justify-center gap-8 mr-8">
                <TestimonialCard
                  authorImage={data.testimonials.author1Image?.node?.sourceUrl}
                  authorName={data.testimonials.author1Name}
                  review={data.testimonials.author1Review}
                  stars={data.testimonials.author1Stars}
                />
                <TestimonialCard
                  authorImage={data.testimonials.author2Image?.node?.sourceUrl}
                  authorName={data.testimonials.author2Name}
                  review={data.testimonials.author2Review}
                  stars={data.testimonials.author2Stars}
                />
                <TestimonialCard
                  authorImage={data.testimonials.author3Image?.node?.sourceUrl}
                  authorName={data.testimonials.author3Name}
                  review={data.testimonials.author3Review}
                  stars={data.testimonials.author3Stars}
                />
              </div>
            </Marquee>
          </div>
        </div>
      </section>

      {/* Pricing Section - Couldn't get the pricing features from wordpress due to repeaters not being available on the free version of ACF */}
      <section id="pricing" className="container-padding my-20">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-4xl 2xl:text-5xl font-semibold text-[#2c2c2c] mb-16 text-center">{data.pricing.title}</h2>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">

          {/* Pricing Plan 1 */}
          <PricingCard
            title={data.pricing.pricingPlan1Title}
            description={data.pricing.pricingPlan1Description}
            price={data.pricing.pricingPlan1Price}
            features={["Access to basic features", "Basic expense tracking", "Basic income tracking"]}
          />

          {/* Pricing Plan 2 */}
          <PricingCard
            mostPopular
            title={data.pricing.pricingPlan2Title}
            description={data.pricing.pricingPlan2Description}
            price={data.pricing.pricingPlan2Price}
            features={["Access to basic features", "Basic expense tracking", "Basic income tracking", "Advanced income tracking", "Advanced expense tracking"]}
          />

          {/* Pricing Plan 3 */}
          <PricingCard
            title={data.pricing.pricingPlan3Title}
            description={data.pricing.pricingPlan3Description}
            price={data.pricing.pricingPlan3Price}
            features={["Access to basic features", "Basic expense tracking", "Basic income tracking"]}
          />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative bg-white rounded-3xl flex items-center min-h-96">
        <div className="container-padding flex flex-col lg:flex-row items-center justify-center gap-8 ">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 w-full h-full ">
            <div className="w-full lg:w-1/2">
              <h2 className="text-4xl 2xl:text-5xl font-semibold text-[#2c2c2c] ">Frequently Asked Questions</h2>
            </div>
            <div className="w-full lg:w-1/2 flex flex-col items-center justify-center gap-1">
              {Object.keys(data.faq)
                .filter(key => key.startsWith('faqQuestion'))
                .map((questionKey, index) => {
                  const answerKey = `faqAnswer${index + 1}`;
                  return (
                    <Accordion key={questionKey} title={data.faq[questionKey]}>
                      <p>{data.faq[answerKey]}</p>
                    </Accordion>
                  );
                })}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative bg-[#2c2c2c] rounded-3xl flex items-center min-h-96">
        <div className="container-padding flex flex-col lg:flex-row items-center justify-center gap-8 ">
          <div className="flex flex-col items-start md:items-center justify-center gap-4">
            <h2 className="text-4xl 2xl:text-5xl font-semibold text-white ">{data.cta.ctaTitle}</h2>
            <span className="text-base 2xl:text-lg text-white opacity-50 font-medium text-left md:text-center md:max-w-[627px] mx-auto">
              {data.cta.ctaSubtitle}
            </span>
            <Link href={data.cta.ctaButtonLink} className="mt-8">
              <Button className="bg-white !text-[#2c2c2c]" icon>{data.cta.ctaButtonText}</Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}