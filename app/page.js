"use client"

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../components/ui/Button";
import PricingCard from "../components/pricing/PricingCard";
import { Wallet, HandCoins, Coins, Landmark, ArrowRight } from "lucide-react";

export default function Home() {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://expenses-tracker-fc76f9.ingress-alpha.ewp.live/wp-json/wp/v2/pages/71');
        const result = await response.json();
        setData(result.acf);  
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <p>Loading</p>;
  }


  return (
    <>

      {/* Hero Section */}
      <section
        className=" relative min-h-screen bg-white rounded-3xl flex flex-col items-center justify-center bg-cover bg-center h-screen"
        style={{ backgroundImage: `url("/images/bg.jpg")` }}
      >
        <div className="absolute inset-0 bg-black/30 rounded-2xl" />
        <div className="flex flex-col items-start z-10 container-padding overflow-hidden max-w-sm">
          <h1 className="text-4xl 2xl:text-6xl font-medium text-white text-left leading-normal">{data.hero_title}</h1>
          <p className="text-base 2xl:text-2xl text-white text-left opacity-50 font-medium mt-4">Expense Tracker is your personal finance manager, designed to help you take control of your finances with confidence and ease.</p>
          <div className="flex flex-row items-center gap-8 mt-8">
            <Link href="https://expense-tracker-phi-lyart.vercel.app/login"><Button className="bg-white !text-[#2c2c2c]">Get Started Now <ArrowRight size={20} className="ml-2" /></Button></Link>
            <div className="flex flex-row gap-4 items-center">
              <div className="flex -space-x-2">
                <Image
                  className="inline-block size-8 rounded-full ring-2 ring-white/30"
                  src="https://i.pravatar.cc/32?img=1"
                  alt="Avatar 1"
                  width={40}
                  height={40}
                />
                <Image
                  className="inline-block size-8 rounded-full ring-2 ring-white/30"
                  src="https://i.pravatar.cc/32?img=2"
                  alt="Avatar 2"
                  width={40}
                  height={40}
                />
                <Image
                  className="inline-block size-8 rounded-full ring-2 ring-white/30"
                  src="https://i.pravatar.cc/32?img=3"
                  alt="Avatar 3"
                  width={40}
                  height={40}
                />
              </div>
              <p className="text-base text-white text-left font-medium">Trusted by over +1000 users</p>
            </div>
          </div>

        </div>
      </section>

      {/* Feedbacks Section */}
      <section className="container-padding">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-4xl 2xl:text-5xl font-semibold text-[#2c2c2c] mb-6">Trusted By More Than 1000+ Users</h2>
        </div>
      </section>

      {/* Features Section */}
      <section className="container-padding">
        <div className="flex flex-col items-center justify-center">
          <h2 class="text-4xl 2xl:text-5xl font-semibold text-[#2c2c2c] mb-16 text-center">Get Instant Access <br></br>to Your Financial History​</h2>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 md:gap-8">
          <div className="flex gap-4 md:gap-8 ">
            <div className="flex flex-col bg-white rounded-3xl p-4 md:p-6 lg:p-8">
              <div className="p-3 rounded-full bg-[#0195FF] aspect-square flex items-center justify-center w-10 h-10">
                <Wallet className="text-white" />
              </div>
              <h3 class="text-2xl 2xl:text-3xl font-semibold text-[#2c2c2c] my-4">Quick and Easy Expense Logging​</h3>
              <p class="text-base 2xl:text-lg text-[#2c2c2c] opacity-50 font-medium">
                Add expenses and income in just a few clicks. Whether it&apos;s a small purchase or a large deposit, tracking your daily transactions has never been easier.
              </p>
            </div>
            <div className="flex flex-col bg-white rounded-3xl p-4 md:p-6 lg:p-8">
              <div className="p-3 rounded-full bg-[#0195FF] aspect-square flex items-center justify-center w-10 h-10">
                <Coins className="text-white" />
              </div>
              <h3 class="text-2xl 2xl:text-3xl font-semibold text-[#2c2c2c] my-4">Categorize and Organize Expenses​</h3>
              <p class="text-base 2xl:text-lg text-[#2c2c2c] opacity-50 font-medium">
                Stay organized by categorizing your expenses. From groceries to entertainment, see exactly where your money is going and make smarter financial decisions.
              </p>
            </div>

          </div>
          <div className="flex flex-col bg-white rounded-3xl p-4 md:p-6 lg:p-8">
            <div className="p-3 rounded-full bg-[#0195FF] aspect-square flex items-center justify-center w-10 h-10">
              <HandCoins className="text-white" />
            </div>
            <h3 class="text-2xl 2xl:text-3xl font-semibold text-[#2c2c2c] my-4">Edit and Review Your Financial History</h3>
            <p class="text-base 2xl:text-lg text-[#2c2c2c] opacity-50 font-medium">
              Need to correct an entry or take a deeper look at your past transactions? Our app makes it easy to edit expenses and view your complete financial history.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container-padding">
        <div className="flex flex-col items-center justify-center">
          <h2 class="text-4xl 2xl:text-5xl font-semibold text-[#2c2c2c] mb-16 text-center">Choose the Plan That's Right for You</h2>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">  

          <PricingCard
            title="Basic"
            description="For those who want to keep track of their expenses and income."
            price="$9.99"
            features={["Access to basic features", "Basic expense tracking", "Basic income tracking"]}
          />   
          <PricingCard
            mostPopular
            title="Pro"
            description="For those who want to keep track of their expenses and income."
            price="$19.99"
            features={["Access to basic features", "Basic expense tracking", "Basic income tracking"]}
          />   
          <PricingCard
            title="Enterprise"
            description="For those who want to keep track of their expenses and income."
            price="$29.99"
            features={["Access to basic features", "Basic expense tracking", "Basic income tracking"]}
          />   

        </div>
      </section>
    </>
  );
}
