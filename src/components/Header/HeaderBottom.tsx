import HeaderBottomMenuBar from "./HeaderBottomMenuBar";

const HeaderBottom = () => {
  return (
    <div className="flex justify-between items-center px-28 py-3 text-white bg-[#F1F5F8]">
      <div>
        <HeaderBottomMenuBar />
      </div>
      <div className="cursor-pointer text-textPrimary">Become a seller</div>
    </div>
  );
};

export default HeaderBottom;
