import React, { createContext, useContext, useState, useEffect } from 'react';

interface AdminContextType {
  isAdmin: boolean;
  setIsAdmin: (value: boolean) => void;
  toggleAdmin: () => void;
}

const AdminContext = createContext<AdminContextType>({
  isAdmin: false,
  setIsAdmin: () => {},
  toggleAdmin: () => {},
});

export const AdminProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      if (urlParams.get('admin') === 'true') {
        localStorage.setItem('admin_mode', 'true');
        return true;
      }
      return localStorage.getItem('admin_mode') === 'true';
    }
    return false;
  });

  const toggleAdmin = () => {
    setIsAdmin((prev) => {
      const next = !prev;
      if (typeof window !== 'undefined') {
        localStorage.setItem('admin_mode', String(next));
      }
      return next;
    });
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'a') {
        e.preventDefault();
        toggleAdmin();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <AdminContext.Provider value={{ isAdmin, setIsAdmin, toggleAdmin }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => useContext(AdminContext);
