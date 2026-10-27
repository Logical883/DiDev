import { createContext, useContext, useState, type ReactNode } from 'react'
import { BrandFilm } from './BrandFilm'

const FilmContext = createContext<(() => void) | null>(null)

export function FilmProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  const [session, setSession] = useState(0)

  return (
    <FilmContext.Provider
      value={() => {
        setSession((value) => value + 1)
        setOpen(true)
      }}
    >
      {children}
      <BrandFilm key={session} open={open} onClose={() => setOpen(false)} />
    </FilmContext.Provider>
  )
}

export function useFilm() {
  const openFilm = useContext(FilmContext)
  if (!openFilm) throw new Error('Brand film is unavailable')
  return openFilm
}
