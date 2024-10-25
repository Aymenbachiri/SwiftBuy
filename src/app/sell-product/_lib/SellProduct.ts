"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { type ProductFormData, productSchema } from "./ProductSchema";

export function SellProduct() {
  const [loading, setLoading] = useState(false);
  const [captcha, setCaptcha] = useState(false);
  const { user } = useUser();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProductFormData>({
    resolver: zodResolver(productSchema),
  });

  const registerProduct = async (data: ProductFormData): Promise<void> => {
    const res = await fetch("/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.error || "Failed to add product");
    }
  };

  const onSubmit = useCallback(
    async (data: ProductFormData) => {
      if (!captcha) {
        toast.error("Captcha verification failed");
        return;
      }

      if (user) {
        data.creator = user.fullName || (user.lastName as string);
      }

      setLoading(true);
      try {
        await toast.promise(registerProduct(data), {
          loading: "Adding product...",
          success: "Product added successfully!",
          error: (err: Error) => err.message || "Failed to add product",
        });

        reset();
        setCaptcha(false);
      } catch (error) {
        console.error("Product addition error:", error);
        toast.error("An unexpected error occurred");
      } finally {
        setLoading(false);
        router.push("/dashboard");
      }
    },
    [captcha, reset, router, user],
  );

  const handleCaptchaChange = useCallback((value: boolean) => {
    setCaptcha(value);
  }, []);

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    loading,
    setCaptcha: handleCaptchaChange,
    captcha,
  };
}
