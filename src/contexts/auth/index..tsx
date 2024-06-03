"use client";
import { createContext, useState } from "react";

export type UserProps = {
  username: string;
  token: string;
};

type AuthContextProps = {
  user: UserProps | null;
  login: (user: UserProps) => void;
  logOut: () => void;
};

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserProps | null>({
    username: "pedro",
    token: "123456",
  });

  const login = (user: UserProps) => {
    setUser(user);
    console.log(user);
  };

  const logOut = () => {
    console.log("logout");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
