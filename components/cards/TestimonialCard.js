import Image from "next/image"
import { Star, StarHalf } from "lucide-react"

const TestimonialCard = ({ authorImage, authorName, review, stars, className }) => {

    // Function to render stars based on the number of stars provided
    const renderStars = () => {
        const fullStars = Math.floor(stars);
        const halfStar = stars % 1 !== 0;
        const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

        return (
            <>
                {Array(fullStars).fill().map((_, i) => (
                    <Star key={`full-${i}`} className="text-yellow-400 fill-current" />
                ))}
                {halfStar && <StarHalf className="text-yellow-400 fill-current" />}
                {Array(emptyStars).fill().map((_, i) => (
                    <Star key={`empty-${i}`} className="text-yellow-400 opacity-50" />
                ))}
            </>
        );
    };

    return (
        <div className="flex flex-row flex-grow">
            <div className={`max-w-md p-8 flex flex-col gap-4 bg-white dark:bg-neutral-800 rounded-3xl justify-between ${className} h-full`}>
                <div className="flex flex-col gap-4">
                    <div className="flex text-2xl">{renderStars()}</div>
                    <p className="text-[#2c2c2c] dark:text-white text-xl">{review}</p>
                </div>
                <div className="flex gap-2 items-center">
                    {authorImage && (<Image src={authorImage} alt={authorName} height={100} width={100} className='h-10 w-10 rounded-full' />)}
                    <span className="opacity-50">{authorName}</span>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;
