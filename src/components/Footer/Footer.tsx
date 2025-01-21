import FooterTop from "./FooterTop";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <FooterTop />
      <p className="bg-[#252A30] py-3 text-white text-center">
        Copyright &copy; {currentYear} - AJA International
      </p>
    </div>
  );
};

export default Footer;
