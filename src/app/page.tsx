"use client";

import { AuthContext } from "@/contexts/auth/index.";
import { useContext } from "react";

// import { fetchUser } from "@/services/index";

export default function Home() {
  const { user, login, logOut } = useContext(AuthContext);
  return (
    <>
      <h1>Home page</h1>

      <p>{user?.username}</p>
      <p>{user?.token}</p>
      <button onClick={logOut}>logout</button>
    </>
  );
}
