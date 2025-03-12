import '../styles/fonts.css'; 
import '../styles/globals.css';
import Button from "./Button";

const Header = () => {
  return (
    <header className="max-w-[1512px]">
        {/* Top header */}
        <div className="top_header flex  h-[158px] px-[72px] items-center justify-between">
          {/* Logo */}
          <div className="header_logo">
            <img src="/images/logo.png" alt="Logo" />
          </div>

          {/* Navigation */}
          <nav className="flex ">
            <a href="#" className=" px-[55px] text-primary">About</a>
            <a href="#" className="pr-[53px] text-primary">How We Give</a>
            <a href="#" className="pr-[54px] text-primary">Donations & Support</a>
            <a href="#" className="pr-[52px] text-primary">News</a>
            <a href="#" className="pr-[66px] text-primary">Contact</a>
          </nav>

          {/* Donate Button */}
          <Button>Donate</Button>
        </div>
    </header>
  );
};

export default Header;
