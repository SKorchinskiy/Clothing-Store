import { createContext, useEffect, useState } from "react";
import { observeStateChange } from "../configs/firebase.config";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export function UserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = observeStateChange((user) => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
