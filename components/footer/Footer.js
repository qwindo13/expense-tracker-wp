const Footer = () => {
    return (
      <footer className="w-full items-center justify-center py-4 md:py-6 lg:py-8">
        <p className="text-sm md:text-base font-semibold text-center text-[#2c2c2c]">
          © {new Date().getFullYear()} Expense Tracker. All rights reserved.
        </p>
       
      </footer>
    );
  };
  
  export default Footer;
  