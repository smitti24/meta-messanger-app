"use client";

function LogoutButton() {
  return (
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => console.log("Hello")}
      >
        Sign Out
      </button>
    </div>
  );
}

export default LogoutButton;
