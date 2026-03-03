import { create } from "zustand";
import { persist } from "zustand/middleware";


type Theme = "dark" | "light" | "system"

type ThemeStore = {
    theme: Theme;
    toggleTheme: () => void;
    setTheme: (theme: Theme) => void;
    
}

const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      theme: "light", 
      toggleTheme: () =>
        set((state) => ({
          theme: state.theme === "dark" ? "light" : "dark",
        })),
      setTheme: (theme) => set({ theme }),
    }),
    {
      name: "theme",
    },
  ),
);

export default useThemeStore;
