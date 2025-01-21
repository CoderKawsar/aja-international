"use client";

import SocialLogin from "@/components/common/SocialLogin";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { MdArrowOutward } from "react-icons/md";

type SignupFormInputs = {
  isSeller: boolean;
  isBuyer: boolean;
  instituteName: string;
  emailOrPhone: string;
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
};

const Signup = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormInputs>();

  const onSubmit = (data: SignupFormInputs) => {
    console.log("Form Data:", data);
    // Handle Signup logic here
    router.push("/signup-otp");
  };
  return (
    <div className="flex items-center my-20 justify-center">
      <div className="bg-white px-12 py-16 rounded-xl box-shadow-base w-full lg:max-w-lg">
        <h2 className="font32 font-bold text-center mb-12">
          Create Your Account
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="">
          {/* Is Seller */}
          <div className="flex gap-x-12 mb-6 pb-2 border-b">
            <div className="flex mt-2">
              <input
                id="isSeller"
                type="checkbox"
                {...register("isSeller")}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label
                htmlFor="acceptTerms"
                className="ml-2 block text-sm text-gray-900"
              >
                Seller
              </label>
            </div>
            {/* Is Buyer */}
            <div>
              <div className="flex mt-2">
                <input
                  id="isBuyer"
                  type="checkbox"
                  {...register("isBuyer")}
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label
                  htmlFor="isBuyer"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Buyer
                </label>
              </div>
            </div>
          </div>

          {/* Institute Name */}
          <div className="mb-6">
            <label
              htmlFor="instituteName"
              className="block text-sm font-medium text-textPrimary"
            >
              Institute Name
            </label>
            <input
              id="instituteName"
              type="text"
              {...register("instituteName", {
                required: "Institute name is required",
              })}
              placeholder="Enter your institute name"
              className={`mt-1 block w-full px-4 py-2.5 border rounded-xl shadow-sm focus:outline-none ${
                errors.instituteName ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.instituteName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.instituteName.message}
              </p>
            )}
          </div>
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
          <div className="mb-6">
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

          {/* ConfirmPassword Field */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-textPrimary"
            >
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              {...register("confirmPassword", {
                required: "Password is required",
              })}
              placeholder="Enter your password"
              className={`mt-1 block w-full px-4 py-2.5 border rounded-xl shadow-sm focus:outline-none ${
                errors.confirmPassword ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* Remember Me Checkbox */}
          <div className="flex mt-2">
            <input
              id="acceptTerms"
              type="checkbox"
              {...register("acceptTerms")}
              className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label
              htmlFor="acceptTerms"
              className="ml-2 block text-sm text-gray-900"
            >
              Accept all terms &amp; conditions
            </label>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full mt-6 font-normal bg-textBrand text-white rounded-xl hover:bg-textBrand/90 transition"
            variant={"default"}
          >
            Register Now
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
          <p className="text-textSecondary text-sm">
            Already have an account?{" "}
          </p>
          <Link
            href="/register"
            className="text-textBrand hover:text-textBrand/80 flex justify-between items-center gap-x-2"
          >
            Login <MdArrowOutward />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
