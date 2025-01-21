"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { MdArrowOutward } from "react-icons/md";
import { useRef } from "react";

type OTPFormInputs = {
  digit1: string;
  digit2: string;
  digit3: string;
  digit4: string;
  digit5: string;
  digit6: string;
};

export default function SignupOTP() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<OTPFormInputs>();

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const onSubmit = (data: OTPFormInputs) => {
    console.log("Form Data:", data); // Logs form data
    router.push("/otp-confirmation");
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value;
    if (/^[0-9]$/.test(value)) {
      setValue(`digit${index + 1}` as keyof OTPFormInputs, value); // Update form state
      if (inputRefs.current[index + 1]) {
        inputRefs.current[index + 1]?.focus(); // Move to the next input
      }
    } else {
      e.target.value = ""; // Clear invalid input
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (
      e.key === "Backspace" &&
      !e.currentTarget.value &&
      inputRefs.current[index - 1]
    ) {
      inputRefs.current[index - 1]?.focus(); // Move to the previous input
    }
  };

  return (
    <div className="flex items-center my-20 justify-center">
      <div className="bg-white px-12 py-16 rounded-xl box-shadow-base w-full lg:max-w-lg">
        <h2 className="font32 font-semibold text-center mb-12">
          Enter Verification Code
        </h2>
        <p className="text-center text-textSecondary">
          Enter the otp code that we sent to email{" "}
          <span className="text-textPrimary">coder***@gmail.com</span>. Be
          careful not to share the code with anyone
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
          <div className="flex gap-x-4">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="mb-6">
                <input
                  id={`digit${index + 1}`}
                  type="text"
                  maxLength={1}
                  {...register(`digit${index + 1}` as keyof OTPFormInputs, {
                    required: true,
                    pattern: /^[0-9]$/,
                  })}
                  ref={(el) => {
                    inputRefs.current[index] = el;
                  }}
                  placeholder="-"
                  onChange={(e) => handleInputChange(e, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  className={`mt-1 block w-full px-4 py-2.5 border rounded-xl shadow-sm focus:outline-none text-center ${
                    errors[`digit${index + 1}` as keyof OTPFormInputs]
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                />
              </div>
            ))}
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
