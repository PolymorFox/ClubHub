import { useContext, createContext, useState, type ReactNode } from "react";

type User = {
  name: string;
  email: string;
  password: string;
  school: string;
};

type AuthContextType = {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
  isAuthenticated: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  // This is meant to be used to protect certain routes from being accessed without the user being logged in
  let isAuthenticated = false;

  const login = (user: User) => {
    setUser(user);
    isAuthenticated = true;
  };
  const logout = () => {
    setUser(null);
    isAuthenticated = false;
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used inside <AuthProvider>");
  }
  return context;
}
