"use client";

import { useForm } from "react-hook-form";
import { CiSearch } from "react-icons/ci";

type Inputs = {
  search: string;
};

export const Search = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  return (
    <div className="w-[500px]">
      <form onSubmit={handleSubmit(() => {})} className="relative w-full">
        {/* Input field */}
        <input
          type="text"
          {...register("search", { required: true })}
          className="py-2 px-10 rounded-xl w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-sm placeholder:text-[#757575] placeholder:font-light"
          placeholder="Search everything at your online store"
        />
        {/* Icon inside input */}
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl">
          <CiSearch />
        </div>
        {/* Error message */}
        {errors.search && (
          <span className="text-red-500 text-sm mt-1 block">
            This field is required
          </span>
        )}
      </form>
    </div>
  );
};
