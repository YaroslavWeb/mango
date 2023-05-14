import { RefObject, useEffect } from 'react'

export const useClickOutside = <T extends HTMLElement>(
  ref: RefObject<T>,
  callback: () => void,
  condition: boolean,
) => {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node) && condition) {
        callback()
      }
    }
    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [callback, ref, condition])
}
