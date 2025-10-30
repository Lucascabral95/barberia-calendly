import { useState, useEffect } from 'react'

interface UseMenuReturn {
  showMenu: boolean
  isOpenMenu: boolean
  toggleMenu: () => void
}

export const useMenu = (): UseMenuReturn => {
  const [showMenu, setShowMenu] = useState<boolean>(false)
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false)

  const toggleMenu = (): void => {
    setShowMenu((prev) => !prev)
    setIsOpenMenu((prev) => !prev)
  }

  useEffect(() => {
    document.body.style.overflow = isOpenMenu ? 'hidden' : 'unset'

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpenMenu])

  return { showMenu, isOpenMenu, toggleMenu }
}
