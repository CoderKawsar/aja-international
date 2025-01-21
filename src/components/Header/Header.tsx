import Link from "next/link";
import HeaderBottom from "./HeaderBottom";
import HeaderRight from "./HeaderRight";
import { Search } from "./Search";

const Header = () => {
  return (
    <div>
      <div className="flex bg-textBrand px-28 py-3 justify-between items-center">
        <div className="">
          <Link href="/" className="flex items-center gap-2">
            <h1 className="text-white flex items-center">
              <span className="text-5xl uppercase font-bold">AJA</span>{" "}
              International
            </h1>
          </Link>
        </div>
        <div className="">
          <Search />
        </div>
        <div className="">
          <HeaderRight />
        </div>
      </div>
      <HeaderBottom />
    </div>
  );
};

export default Header;
