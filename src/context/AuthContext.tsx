"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";
import { getCurrentUserAction } from "@/features/auth/actions/userActions";
import { logoutAction } from "@/features/auth/actions/logoutAction"; // مسیرت رو اصلاح کن
import { User } from "@/features/auth/types/user.types";

type AuthContextType = {
  user: User | null;
  loading: boolean;
  isLoggedIn: boolean;
  refreshUser: () => Promise<void>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  isLoggedIn: false,
  refreshUser: async () => {},
  logout: async () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  //   Get User Data
  const fetchUser = useCallback(async () => {
    setLoading(true);
    try {
      const { success, user } = await getCurrentUserAction();
      setUser(success && user ? user : null);
    } catch (err) {
      console.error("Error loading user:", err);
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, []);

  //   Logout User
  const logout = useCallback(async () => {
    try {
      const result = await logoutAction();
      if (result.success) {
        setUser(null);
      }
    } catch (err) {
      console.error("Logout Error:", err);
    }
  }, []);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  const isLoggedIn = !!user;

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        isLoggedIn,
        refreshUser: fetchUser,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
