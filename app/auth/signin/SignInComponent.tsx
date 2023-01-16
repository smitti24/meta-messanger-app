"use client";
import React from "react";
import { getProviders, signIn } from "next-auth/react";

type Props = {
  providers: Awaited<ReturnType<typeof getProviders>>;
};

function SignInComponent({ providers }: Props) {
  return (
    <div className="flex justify-center my-10">
      {Object.values(providers!).map((provider) => (
        <div key={provider.name}>
          <button
            className="w-100 bg-gradient-to-r from-blue-600 to-blue-400 p-4 rounded-xl"
            onClick={() =>
              signIn(provider.id, {
                callbackUrl: process.env.VERCEL_URL || "http://localhost:3000",
              })
            }
          >
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
}

export default SignInComponent;
