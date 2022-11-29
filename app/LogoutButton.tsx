"use client";

function LogoutButton() {
  return (
    <div>
      <button className="primary-button" onClick={() => console.log("Hello")}>
        Sign Out
      </button>
    </div>
  );
}

export default LogoutButton;
