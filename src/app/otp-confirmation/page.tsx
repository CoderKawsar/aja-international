"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaCheck } from "react-icons/fa6";

const OTPConfirmation = () => {
  return (
    <div className="flex items-center my-20 justify-center">
      <div className="bg-white px-12 py-16 rounded-xl box-shadow-base w-full md:max-w-md lg:max-w-lg xl:max-w-xl">
        <div className="bg-greenBg p-2.5 w-fit mx-auto rounded-full mb-6">
          <div className="flex items-center justify-center w-fit mx-auto p-2 bg-textBrand rounded-full">
            <FaCheck className=" text-white text-3xl" />
          </div>
        </div>
        <h2 className="font32 font-semibold text-center">Congratulations</h2>
        <h2 className="font32 font-semibold text-center mb-4">
          Email Successfully Verified
        </h2>
        <p className="text-center text-textSecondary mb-4">
          Your email has been successfully verified! You can now access all
          features. Thank you for confirming your email address.
        </p>
        <Link href="/">
          <Button
            className="w-full mt-6 font-normal bg-textBrand text-white rounded-xl hover:bg-textBrand/90 transition"
            variant={"default"}
          >
            Continue
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default OTPConfirmation;
