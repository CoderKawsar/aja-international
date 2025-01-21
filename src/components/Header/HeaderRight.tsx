import Image from "next/image";
import languageEngIcon from "@/assets/images/icon/england-flag-language-icon.jpg";
import { MdKeyboardArrowDown } from "react-icons/md";
import Link from "next/link";

const HeaderRight = () => {
  return (
    <div className="flex items-center gap-4 justify-end">
      <div className="flex items-center gap-2">
        <div>
          <Image src={languageEngIcon} width={24} height={24} alt="" />
        </div>
        <p className="text-white">EN</p>
        <MdKeyboardArrowDown className="text-white" />
      </div>
      <Link
        href="/login"
        className="flex items-center gap-2 text-white bg-[#2A3037] py-2 px-6 rounded-xl"
      >
        Sign in
      </Link>
      <Link
        href="/signup"
        className="flex items-center gap-2 bg-white text-primary py-2 px-6 rounded-xl"
      >
        Sign up
      </Link>
    </div>
  );
};

export default HeaderRight;
