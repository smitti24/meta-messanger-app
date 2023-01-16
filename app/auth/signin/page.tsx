import React from "react";
import { getProviders, signIn } from "next-auth/react";
import Image from "next/image";
import SignInComponent from "./SignInComponent";

async function SignInPage() {
  const providers = await getProviders();

  return (
    <div>
      <div className="flex justify-center items-center">
        <Image
          className="mx-2 my-2 object-cover bg-transparent"
          width={150}
          height={150}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Facebook_Messenger_logo_2020.svg/2048px-Facebook_Messenger_logo_2020.svg.png"
          alt="Profile Picture"
        />
      </div>

      <SignInComponent providers={providers} />
    </div>
  );
}

export default SignInPage;
