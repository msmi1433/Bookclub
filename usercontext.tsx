import React, { createContext, useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const UserContext = createContext({ uid: "" });

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [uid, setUid] = useState("UPkTcLApbhTK5vCyNpM2TwKN9i22");
  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUid(user.uid);
      }
    });
  }, []);
  return (
    <UserContext.Provider value={{ uid }}>{children}</UserContext.Provider>
  );
};
