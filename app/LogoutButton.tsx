"use client";
import { signOut } from "next-auth/react";

function LogoutButton() {
  return (
    <div>
      <button className="primary-button" onClick={() => signOut()}>
        Sign Out
      </button>
    </div>
  );
}

export default LogoutButton;
