import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type ThemeState = {
  theme: 'ai' | 'light'
  toggleTheme: () => void
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      theme: 'ai', // default theme is dark AI
      toggleTheme: () => {
        set({ theme: get().theme === 'ai' ? 'light' : 'ai' })
      },
    }),
    { name: 'theme-storage' }
  )
)
