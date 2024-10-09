"use client"

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../components/ui/Button";
import FeaturesCard from "../components/cards/FeaturesCard";
import PricingCard from "../components/cards/PricingCard";
import Accordion from "../components/ui/Accordion";
import Marquee from "react-fast-marquee";
import { Wallet, HandCoins, Coins, Landmark, ArrowRight } from "lucide-react";

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
          pricing: result.data.page.landingPagePricingPlans,
          faq: result.data.page.landingPageFaq,
          marquee: result.data.page.landingPageMarquee
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
    return <p>Loading...</p>;
  }

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-screen bg-white rounded-3xl flex items-center bg-cover bg-center h-screen"
        style={{ backgroundImage: `url(${data.hero.heroBackgroundImage?.node?.sourceUrl || '/images/bg.jpg'})` }}
      >
        <div className="absolute inset-0 bg-black/30 rounded-2xl" />
        <div className="container-padding z-10 w-full lg:w-1/2">
          <div className="flex flex-col items-start">
            <h1 className="text-4xl 2xl:text-6xl font-semibold text-white text-left">{data.hero.heroTitle}</h1>
            <p className="text-base 2xl:text-2xl text-white text-left opacity-50 font-medium mt-4">{data.hero.heroSubtitle}</p>
            <div className="flex flex-col md:flex-row md:items-center gap-8 mt-8">
              <Link href={data.hero.ctaButtonLink}>
                <Button className="bg-white !text-[#2c2c2c]">{data.hero.ctaButtonText} <ArrowRight size={20} className="ml-2" /></Button>
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
                alt="Avatar 1"
                width={100}
                height={100}
              />
              <Image
                className="inline-block size-12 rounded-full ring-4 ring-neutral-100"
                src="https://i.pravatar.cc/100?img=2"
                alt="Avatar 2"
                width={40}
                height={40}
              />
              <Image
                className="inline-block size-12 rounded-full ring-4 ring-neutral-100"
                src="https://i.pravatar.cc/100?img=3"
                alt="Avatar 3"
                width={40}
                height={40}
              />
            </div>
            <p className="text-base text-[#2c2c2c]text-left font-medium">Trusted by over +1000 users</p>
          </div>

          <h2 class="text-4xl 2xl:text-5xl font-semibold text-[#2c2c2c]  text-center">Build a stronger financial future, today. </h2>
          <span class="text-base 2xl:text-lg text-[#2c2c2c] opacity-50 font-medium text-center max-w-[283px] sm:max-w-[627px] mx-auto">
            Our app is designed to help you take control of your finances, no matter your experience level. Whether you&apos;re a beginner or an expert, we&apos;ve got you covered.
          </span>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 md:gap-8">
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 ">
            <div className="w-full md:w-1/3">
            <FeaturesCard 
            title="Quick and Easy Expense Logging​" 
            icon={<Wallet className="text-[#2c2c2c]" />} 
            image="/images/phone.png"
            highlight
            />
            </div>
            <div className="w-full md:w-2/3">
            <FeaturesCard title="Categorize and Organize Expenses​" description="Stay organized by categorizing your expenses. From groceries to entertainment, see exactly where your money is going and make smarter financial decisions." icon={<Coins className="text-white" />} />
            </div>
          </div>
        <FeaturesCard title="Categorize and Organize Expenses​" description="Stay organized by categorizing your expenses. From groceries to entertainment, see exactly where your money is going and make smarter financial decisions." icon={<Coins className="text-white" />} />
        </div>
      </section>

      {/* Marquee Section */}
      <section className="overflow-hidden relative">
        <div className="absolute top-0 left-0 bottom-0 bg-gradient-to-r from-neutral-100 to-transparent w-8 lg:w-16 z-10"></div>
        <div className="absolute top-0 right-0 bottom-0 bg-gradient-to-l from-neutral-100 to-transparent w-8 lg:w-16 z-10"></div>
        <Marquee autoFill={true} className="min-h-20 relative">
          <div className="flex flex-row items-center justify-center gap-4 opacity-50 px-8">
            <Image src="/images/logo-dark.svg" alt="Logo" width={48} height={48} />
             <h2 className="text-4xl 2xl:text-5xl font-semibold text-[#2c2c2c]">{data.marquee.marqueeText}</h2>
             </div>
         </Marquee>
      </section>

      {/* Pricing Section - Couldn't get the pricing features from wordpress due to repeaters not being available on the free version of ACF */}
      <section id="pricing" className="container-padding">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-4xl 2xl:text-5xl font-semibold text-[#2c2c2c] mb-16 text-center">Choose the Plan That's Right for You</h2>
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
            features={["Access to basic features", "Basic expense tracking", "Basic income tracking"]}
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
      <section  className="relative bg-[#2c2c2c] rounded-3xl flex items-center min-h-96">
        <div className="container-padding flex flex-col lg:flex-row items-center justify-center gap-8 ">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 w-full h-full ">
            <div className="w-full lg:w-1/2">
              <h2 className="text-4xl 2xl:text-5xl font-semibold text-white ">Frequently Asked Questions</h2>
            </div>
              <div className="w-full lg:w-1/2 flex flex-col items-center justify-center gap-1">
              <Accordion title={data.faq.faqQuestion1}>
              <p>{data.faq.faqAnswer1}</p>
            </Accordion>
            <Accordion title={data.faq.faqQuestion2}>
              <p>{data.faq.faqAnswer2}</p>
            </Accordion>
            <Accordion title={data.faq.faqQuestion3}>
              <p>{data.faq.faqAnswer3}</p>
            </Accordion>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

