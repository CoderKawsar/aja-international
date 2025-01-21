"use client";

import SocialLogin from "@/components/common/SocialLogin";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { MdArrowOutward } from "react-icons/md";

type LoginFormInputs = {
  emailOrPhone: string;
  password: string;
  rememberMe: boolean;
};

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const onSubmit = (data: LoginFormInputs) => {
    console.log("Form Data:", data);
    // Handle login logic here
  };

  return (
    <div className="flex items-center my-20 justify-center">
      <div className="bg-white px-12 py-16 rounded-xl box-shadow-base w-full lg:max-w-lg">
        <h2 className="font32 font-semibold text-center mb-12">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="">
          {/* Email or Phone Field */}
          <div className="mb-6">
            <label
              htmlFor="emailOrPhone"
              className="block text-sm font-medium text-textPrimary"
            >
              Phone/Email
            </label>
            <input
              id="emailOrPhone"
              type="text"
              {...register("emailOrPhone", {
                required: "Phone or email is required",
              })}
              placeholder="Enter your phone or email"
              className={`mt-1 block w-full px-4 py-2.5 border rounded-xl shadow-sm focus:outline-none ${
                errors.emailOrPhone ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.emailOrPhone && (
              <p className="text-red-500 text-sm mt-1">
                {errors.emailOrPhone.message}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-textPrimary"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              {...register("password", { required: "Password is required" })}
              placeholder="Enter your password"
              className={`mt-1 block w-full px-4 py-2.5 border rounded-xl shadow-sm focus:outline-none ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Remember Me Checkbox */}
          <div className="flex justify-between mt-2">
            <div className="flex items-center">
              <input
                id="rememberMe"
                type="checkbox"
                {...register("rememberMe")}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label
                htmlFor="rememberMe"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember Me
              </label>
            </div>
            <div>
              <Link href="/forgot-password" className="text-red-500 text-sm">
                Forgot Password?
              </Link>
            </div>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full mt-6 font-normal bg-textBrand text-white rounded-xl hover:bg-textBrand/90 transition"
            variant={"default"}
          >
            Login
          </Button>
        </form>
        {/* Section break(form break) */}
        <div className="mt-8 mb-10 flex items-center w-full">
          <div className="flex-1 h-[1px] bg-gradient-to-r from-white to-textSecondary"></div>
          <p className="text-textSecondary text-sm px-4 whitespace-nowrap">
            Or Continue with
          </p>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-textSecondary to-white"></div>
        </div>
        {/* Social Login Buttons */}
        <SocialLogin />
        {/* Create account if not login */}
        <div className="mt-10 flex justify-between items-center">
          <p className="text-textSecondary text-sm">Not registered yet? </p>
          <Link
            href="/register"
            className="text-textBrand hover:text-textBrand/80 flex justify-between items-center gap-x-2"
          >
            Create an account <MdArrowOutward />
          </Link>
        </div>
      </div>
    </div>
  );
}
