import Image from "next/image"

const FeaturesCard = ({ title, description, icon, image, highlight }) => {
    return (
        <div className={`flex flex-col ${highlight ? 'bg-[#5870F6]' : 'bg-white'} rounded-3xl p-4 md:p-6 lg:p-8 relative h-full overflow-hidden`}>
        <div className={`p-3 rounded-full ${highlight ? 'bg-white' : 'bg-[#0195FF]'} aspect-square flex items-center justify-center w-10 h-10`}>
          {icon}
        </div>
        <h3 className={`text-2xl 2xl:text-3xl font-semibold ${highlight ? 'text-white' : 'text-[#2c2c2c]'} my-4`}>{title}</h3>
        {description && <p className="text-base 2xl:text-lg text-[#2c2c2c] opacity-50 font-medium">{description}</p>}
        {image && <Image src={image} alt={title} className="mt-8 md:mt-auto self-center md:self-end -mb-8" width={200} height={400} />}
      </div>
    );
};

export default FeaturesCard;