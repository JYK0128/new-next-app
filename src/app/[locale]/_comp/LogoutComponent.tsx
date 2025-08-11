"use client";


export function LogoutComponent() {
  const handleLogout = () => {
    location.href = "/api/auth/logout";
  };

  return (
    <div>
      <button onClick={handleLogout}>
        SignOut with Keycloak
      </button>
    </div>
  );
}
