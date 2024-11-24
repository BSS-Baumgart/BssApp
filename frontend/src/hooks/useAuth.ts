import { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

interface DecodedToken {
  exp: number;
  [key: string]: any;
}

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | undefined>(
    undefined
  );

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const decoded: DecodedToken = jwtDecode(token);
          const isTokenValid = decoded.exp * 1000 > Date.now();
          setIsAuthenticated(isTokenValid);

          if (!isTokenValid) {
            localStorage.removeItem("token");
          }
        } catch (error) {
          console.error("Invalid token:", error);
          setIsAuthenticated(false);
          localStorage.removeItem("token");
        }
      } else {
        setIsAuthenticated(false);
      }
    };

    checkAuth();
  }, []);

  const login = (token: string) => {
    localStorage.setItem("token", token);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  return { isAuthenticated, login, logout };
};

export default useAuth;
