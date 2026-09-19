import { createContext, useContext, useState, type ReactNode } from 'react';

type User = {
  name: string,
  role: string,
  permissions: string[]
};

const UserContext = createContext<{
  user: User;
  setUser: (u: User) => void;
} | null>(null);

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User>({
    name: 'Alice',
    role: "admin",
    permissions: ["create_events", "delete_events", "remove_users", "admit_users"]
  });
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error('useUser must be used within UserProvider');
  return ctx;
}
