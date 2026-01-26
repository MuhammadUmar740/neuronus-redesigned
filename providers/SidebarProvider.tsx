"use client";
import React, { createContext, useState, ReactNode } from "react";

export interface SidebarContextType {
  isSidebarVisible: boolean;
  showSidebar: () => void;
  hideSidebar: () => void;
  toggleSidebar: () => void;
}

export const SidebarContext = createContext<SidebarContextType | undefined>(
  undefined
);

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const showSidebar = () => setIsSidebarVisible(true);
  const hideSidebar = () => setIsSidebarVisible(false);
  const toggleSidebar = () => setIsSidebarVisible((prev) => !prev);

  return (
    <SidebarContext.Provider
      value={{ isSidebarVisible, showSidebar, hideSidebar, toggleSidebar }}
    >
      {children}
    </SidebarContext.Provider>
  );
};
