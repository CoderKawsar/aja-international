import Link from "next/link";
import { CiMail } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const FooterTop = () => {
  return (
    <div className="grid grid-cols-5 gap-x-6 justify-between bg-textBrand py-16 px-28">
      <div className="">
        <h1 className="text-white flex items-center">
          <span className="text-5xl uppercase font-bold">AJA</span>{" "}
          International
        </h1>
        <h5 className="my-4 text-md font-semibold text-white">Address</h5>
        <p className="text-sm text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="justify-self-center">
        <h3 className="mb-6 text-md font-semibold text-white">Products</h3>
        <div className="flex flex-col gap-3 text-white">
          <Link href="#" className="text-sm">
            JoomShaper
          </Link>
          <Link href="#" className="text-sm">
            Themeum
          </Link>
          <Link href="#" className="text-sm">
            Droip
          </Link>
          <Link href="#" className="text-sm">
            Icofont
          </Link>
        </div>
      </div>
      <div className="justify-self-center">
        <h3 className="mb-6 text-md font-semibold text-white">Company</h3>
        <div className="flex flex-col gap-3 text-white">
          <Link href="#" className="text-sm">
            About
          </Link>
          <Link href="#" className="text-sm">
            Careers
          </Link>
          <Link href="#" className="text-sm">
            Conact
          </Link>
        </div>
      </div>
      <div className="justify-self-center">
        <h3 className="mb-6 text-md font-semibold text-white">Resources</h3>
        <div className="flex flex-col gap-3 text-white">
          <Link href="#" className="text-sm">
            Blog
          </Link>
          <Link href="#" className="text-sm">
            Press
          </Link>
          <Link href="#" className="text-sm">
            Brand
          </Link>
        </div>
      </div>
      <div className="text-white">
        <h3 className="mb-6 text-md font-semibold text-white">Connect</h3>
        <div className="flex items-center gap-x-4 mb-6">
          <Link
            href="#"
            className="inline-block p-3 border border-white bg-blackBg rounded-full"
          >
            <FaFacebookF />
          </Link>
          <Link
            href="#"
            className="inline-block p-3 border border-white bg-blackBg rounded-full"
          >
            <FaTwitter />
          </Link>
          <Link
            href="#"
            className="inline-block p-3 border border-white bg-blackBg rounded-full"
          >
            <FaInstagram />
          </Link>
          <Link
            href="#"
            className="inline-block p-3 border border-white bg-blackBg rounded-full"
          >
            <FaLinkedinIn />
          </Link>
        </div>
        <div className="flex items-center mb-3">
          <CiMail className="text-xl" />
          <p className="ml-2 text-sm tracking-wide">j3M0s@example.com</p>
        </div>
        <div className="flex items-center">
          <BsTelephone className="text-xl" />
          <p className="ml-2 tracking-widest text-sm">+880 1711 111111</p>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
