"use client";

import LoadingLoader from "@/components/reusableComponents/LoadingLoader";
import MyLink from "@/components/reusableComponents/MyLink";
import { useAuth } from "@clerk/nextjs";

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isLoaded, sessionId } = useAuth();

  if (!isLoaded) {
    return <LoadingLoader />;
  }

  if (!sessionId) {
    return (
      <main
        style={{ marginTop: 50, marginBottom: 300 }}
        className="mx-auto my-16 max-w-screen-xl px-4 py-10 sm:px-6 lg:px-8"
      >
        <section className="mx-auto mt-8 max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">Login Required</h1>
          <p className="mt-4 text-gray-500">
            you need to login to access this page
          </p>
          <MyLink className="text-blue-500 underline" href="/signin">
            signin
          </MyLink>
        </section>
      </main>
    );
  }

  return <>{children}</>;
}
