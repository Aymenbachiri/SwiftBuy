"use client";

import { InputField } from "@/components/reusableComponents/InputField";
import { Recaptcha } from "@/components/reusableComponents/Recaptcha";
import { SellProductBtn } from "./SellProductBtn";
import { SellProduct } from "../_lib/SellProduct";

export default function SellProductForm() {
  const { register, handleSubmit, errors, loading, captcha, setCaptcha } =
    SellProduct();

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mb-0 mt-8 max-w-md space-y-4"
    >
      <InputField
        label="Product Title"
        type="text"
        placeholder="Enter the product title"
        registration={register("title")}
        error={errors.title}
      />
      <label className="block text-sm font-medium text-gray-700">
        Product Description
      </label>
      <textarea
        {...register("description")}
        placeholder="Enter a description for your product"
        className="mb-2 w-full resize-none rounded-md border p-2"
      />
      {errors.description ? (
        <p className="text-red-500">{errors.description.message}</p>
      ) : null}
      <select {...register("category")} className="mb-2 w-full border p-2">
        <option value="" disabled>
          {"Select a category"}
        </option>
        <option value="men">{"men"}</option>
        <option value="women">{"women"}</option>
        <option value="electronics">{"electronics"}</option>
        <option value="jewelery">{"jewelery"}</option>
      </select>
      {errors.category && (
        <p className="text-red-500">{errors.category.message}</p>
      )}
      <InputField
        label="ImageUrl"
        type="text"
        placeholder="Example: www.unsplash.com/photos/1352"
        registration={register("imageurl")}
        error={errors.imageurl}
      />
      <InputField
        label="Price"
        type="number"
        placeholder="Enter the price"
        registration={register("price")}
        error={errors.price}
      />
      <Recaptcha onChange={() => setCaptcha(true)} />
      <SellProductBtn captcha={captcha} loading={loading} />
    </form>
  );
}
