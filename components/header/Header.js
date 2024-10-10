import Link from 'next/link';
import Image from 'next/image';
import Button from '../ui/Button';

const Header = () => {
  return (
    <header className='w-full  absolute top:4 lg:top-8 left-0 right-0 container-padding  z-20'>
      <div className=' rounded-full p-4 w-full flex flex-row items-center justify-between'>
        <Link href="/"><Image src="/images/logo.svg" height={48} width={48} className='rounded-2xl' alt="Logo" priority /></Link>
        <div className='flex flex-row items-center gap-4'>
          <Link href="https://expense-tracker-phi-lyart.vercel.app/login"><Button className="bg-white !text-[#2c2c2c]">Get Started Now</Button></Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
