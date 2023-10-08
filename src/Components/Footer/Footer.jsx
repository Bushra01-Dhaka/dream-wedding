import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#99627A] mt-16">
      <footer className="container mx-auto footer p-10 text-white ">
        <aside>
          <Link to="/" className="px-4">
            <h1 className="text-xl text-center md:text-justify md:text-xl font-bold">Dream Wedding</h1>
            <p className="md:text-center font-bold text-[12px]">
              Est. 2020
            </p>
          </Link>
        </aside>
        <nav>
          <header className="footer-title">Services</header>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
