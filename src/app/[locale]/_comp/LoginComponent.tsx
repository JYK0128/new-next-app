"use client";


export function LoginComponent() {
  const handleLogin = () => {
    location.href = "/api/auth/login";
  };

  return (
    <div>
      <button onClick={handleLogin}>
        SignIn with Keycloak
      </button>
    </div>
  );
}
