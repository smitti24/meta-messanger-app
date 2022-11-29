import Image from "next/image";
import Link from "next/link";
import React from "react";
import LogoutButton from "./LogoutButton";

function Header() {
  const session = true;

  if (session)
    return (
      <header className="sticky top-0 z-50 flex justify-between items-center p-10 shadow-sm">
        <div className="flex space-x-2">
          <Image
            className="rounded-full mx-2 object-contain"
            src="https://links.papareact.com/jne"
            alt="Profile Pic"
            height={10}
            width={50}
          />
          <div>
            <p className="text-blue-400">Logged in as:</p>
            <p className="font-bold text-lg">Andre Smith</p>
          </div>
        </div>

        <LogoutButton />
      </header>
    );

  return (
    <header className="sticky top-0 z-50 flex justify-center items-center p-10 shadow-sm">
      <div className="flex flex-col items-center space-y-5">
        <div className="flex space-x-2 items-center">
          <Image
            src="https://links.papareact.com/jne"
            alt="logo"
            height={10}
            width={50}
          />

          <p className="text-blue-400">Welcome to Meta Messanger</p>
        </div>

        <Link href="/auth/signin" className="primary-button">
          {" "}
          Sign In
        </Link>
      </div>

      {/* <div className='flex justify-between m-auto my-10 mx-20'>
            <div>Left</div>
            <div>Right</div>
        </div> */}
    </header>
  );
}

export default Header;
