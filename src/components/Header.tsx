import '../styles/fonts.css'; 
import '../styles/globals.css';
import Button from "./Button";

const Header = () => {
  return (
    <header className="max-w-[1512px] mx-auto px-[72px]">
        {/* Top header */}
        <div className="top_header flex    h-[158px] items-center justify-between">
          {/* Logo */}
          <div className="header_logo">
            <img src="/images/logo.png" alt="Logo" />
          </div>

          {/* Navigation */}
          <nav className="flex ">
            <a href="#" className=" font-['Yellix-SemiBold'] px-[55px] text-primary">About</a>
            <a href="#" className="font-['Yellix-SemiBold'] pr-[53px] text-primary">How We Give</a>
            <a href="#" className="font-['Yellix-SemiBold'] pr-[54px] text-primary">Donations & Support</a>
            <a href="#" className="font-['Yellix-SemiBold'] pr-[52px] text-primary">News</a>
            <a href="#" className="font-['Yellix-SemiBold'] pr-[66px] text-primary">Contact</a>
          </nav>

          {/* Donate Button */}
          <Button>Donate</Button>
        </div>
    </header>
  );
};

export default Header;
