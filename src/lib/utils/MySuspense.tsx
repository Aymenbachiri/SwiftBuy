import LoadingLoader from "@/components/reusableComponents/LoadingLoader";
import { Suspense } from "react";

export function MySuspense({ children }: { children: React.ReactNode }) {
  return <Suspense fallback={<LoadingLoader />}>{children}</Suspense>;
}
