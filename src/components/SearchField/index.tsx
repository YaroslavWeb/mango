import { ChangeEventHandler, useEffect, useRef, useState } from 'react'

import * as S from './styles'

import MediaClose from 'assets/icons/app/close.svg'
import MediaSearch from 'assets/icons/app/search.svg'

interface I_SearchFieldProps {
  value: string
  onChange: ChangeEventHandler<HTMLInputElement>
  onClear: () => void
  placeholder?: string
}

export const SearchField = ({ onChange, onClear, value, placeholder }: I_SearchFieldProps) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [isActive, setIsActive] = useState(false)

  const handleChangeActive = (value: boolean) => () => {
    setIsActive(value)
  }

  useEffect(() => {
    if (isActive) {
      inputRef.current?.focus()
    }
  }, [isActive])

  return (
    <S.SearchFieldWrapper>
      {isActive || value ? (
        <S.SearchFieldInput>
          <span>
            <MediaSearch />
          </span>
          <input
            ref={inputRef}
            onBlur={handleChangeActive(false)}
            onChange={onChange}
            value={value}
          />
          {value && (
            <span onClick={onClear}>
              <MediaClose />
            </span>
          )}
        </S.SearchFieldInput>
      ) : (
        <S.SearchFieldInner onClick={handleChangeActive(true)}>
          <MediaSearch />
          {placeholder && <span>{placeholder}</span>}
        </S.SearchFieldInner>
      )}
    </S.SearchFieldWrapper>
  )
}
