"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { MdArrowOutward } from "react-icons/md";

type OTPFormInputs = {
  digit1: number;
  digit2: number;
  digit3: number;
  digit4: number;
  digit5: number;
  digit6: number;
};

export default function SignupOTP() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<OTPFormInputs>();

  const onSubmit = (data: OTPFormInputs) => {
    console.log("Form Data:", data);
    // Handle login logic here
  };

  return (
    <div className="flex items-center my-20 justify-center">
      <div className="bg-white px-12 py-16 rounded-xl box-shadow-base w-full lg:max-w-lg">
        <h2 className="font32 font-semibold text-center mb-12">
          Enter Verification Code
        </h2>
        <p className="mt-4 text-textSecondary">
          {" "}
          <p className="text-center">
            Enter the otp code that we sent to email{" "}
            <span>coder***@gmail.com</span>. Be careful not to share the code
            with anyone
          </p>
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
          <div className="flex gap-x-4">
            {/* OTP input Field 1 */}
            <div className="mb-6">
              <input
                id="digit1"
                type="number"
                {...register("digit1", {
                  required: "OPT code is required",
                })}
                placeholder="-"
                className={`mt-1 block w-full px-4 py-2.5 border rounded-xl shadow-sm focus:outline-none ${
                  errors.digit1 ? "border-red-500" : "border-gray-300"
                } placeholder:text-center`}
              />
              {errors.digit1 && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.digit1.message}
                </p>
              )}
            </div>
            {/* OTP input Field 2 */}
            <div className="mb-6">
              <input
                id="digit2"
                type="number"
                {...register("digit2", {
                  required: "OPT code is required",
                })}
                maxLength={1}
                placeholder="-"
                className={`mt-1 block w-full px-4 py-2.5 border rounded-xl shadow-sm focus:outline-none ${
                  errors.digit2 ? "border-red-500" : "border-gray-300"
                } placeholder:text-center`}
              />
              {errors.digit2 && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.digit2.message}
                </p>
              )}
            </div>
            {/* OTP input Field 3 */}
            <div className="mb-6">
              <input
                id="digit3"
                type="number"
                {...register("digit3", {
                  required: "OPT code is required",
                })}
                placeholder="-"
                maxLength={1}
                className={`mt-1 block w-full px-4 py-2.5 border rounded-xl shadow-sm focus:outline-none ${
                  errors.digit3 ? "border-red-500" : "border-gray-300"
                } placeholder:text-center`}
              />
              {errors.digit3 && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.digit3.message}
                </p>
              )}
            </div>
            {/* OTP input Field 4 */}
            <div className="mb-6">
              <input
                id="digit4"
                type="number"
                {...register("digit4", {
                  required: "OPT code is required",
                })}
                maxLength={1}
                placeholder="-"
                className={`mt-1 block w-full px-4 py-2.5 border rounded-xl shadow-sm focus:outline-none ${
                  errors.digit4 ? "border-red-500" : "border-gray-300"
                } placeholder:text-center`}
              />
              {errors.digit4 && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.digit4.message}
                </p>
              )}
            </div>
            {/* OTP input Field 5 */}
            <div className="mb-6">
              <input
                id="digit5"
                type="number"
                {...register("digit5", {
                  required: "OPT code is required",
                })}
                maxLength={1}
                placeholder="-"
                className={`mt-1 block w-full px-4 py-2.5 border rounded-xl shadow-sm focus:outline-none ${
                  errors.digit5 ? "border-red-500" : "border-gray-300"
                } placeholder:text-center`}
              />
              {errors.digit5 && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.digit5.message}
                </p>
              )}
            </div>
            {/* OTP input Field 6 */}
            <div className="mb-6">
              <input
                id="digit6"
                type="number"
                {...register("digit6", {
                  required: "OPT code is required",
                })}
                placeholder="-"
                maxLength={1}
                className={`mt-1 block w-full px-4 py-2.5 border rounded-xl shadow-sm focus:outline-none ${
                  errors.digit6 ? "border-red-500" : "border-gray-300"
                } placeholder:text-center`}
              />
              {errors.digit6 && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.digit6.message}
                </p>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full mt-20 font-normal hover:bg-textBrand/80 hover:text-white rounded-xl transition border bg-lightBg text-textSecondary"
            variant={"default"}
          >
            Verify email
          </Button>
        </form>
        {/* Create account if not login */}
        <div className="mt-10 flex justify-between items-center">
          <p className="text-textSecondary text-sm">Send one more OTP? </p>
          <Link
            href="/register"
            className="text-textBrand hover:text-textBrand/80 flex justify-between items-center gap-x-2"
          >
            Resend <MdArrowOutward />
          </Link>
        </div>
      </div>
    </div>
  );
}
