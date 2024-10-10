import { Check } from "lucide-react";

const PricingCard = ({ title, description, features, price, mostPopular  }) => {
    return (
        <div className={`flex flex-col bg-white rounded-3xl p-4 md:p-6 lg:p-8 ${mostPopular ? '!bg-[#0195FF] text-white shadow-xl ' : ''}`}>
            <div className="flex w-full justify-between items-center">
            <h3 className={`text-2xl 2xl:text-3xl font-semibold text-[#2c2c2c] ${mostPopular ? 'text-white' : ''}`}>{title}</h3>
            {mostPopular && <span className="text-sm font-medium text-[#2c2c2c] bg-white px-2 py-1 rounded-xl flex items-center">Most Popular 🔥</span>}
            </div>
            <p className={`text-base 2xl:text-lg text-[#2c2c2c] opacity-50 font-medium mt-2 ${mostPopular ? 'text-white' : ''}`}>{description}</p>
            <div className="flex flex-row items-center gap-2 my-8">     
                <h3 className={`text-2xl 2xl:text-3xl font-semibold text-[#2c2c2c] ${mostPopular ? 'text-white' : ''}`}>{price}</h3>
                <p className={`text-sn 2xl:text-base text-[#2c2c2c] opacity-50 font-medium ${mostPopular ? 'text-white' : ''}`}>/month</p>
            </div>
       
             <ul>
                    {features.map((feature, index) => (
                        <li key={index} className="flex flex-row items-center gap-2"><Check className={`${mostPopular ? 'text-white' : 'text-[#0195FF]'}`} size={16} />{feature}</li>
                    ))}
                </ul>
        </div>
    );
};

export default PricingCard;