import { ChangeEvent, useState } from 'react'

import { HeaderDate, HeaderStats } from './extensions'
import * as S from './styles'

import { SearchField } from 'components/SearchField'

export const Header = () => {
  const [searchValue, setSearchValue] = useState('')

  const handleChangeSearchValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  const handleClearSearchValue = () => {
    setSearchValue('')
  }

  return (
    <S.Header>
      <HeaderDate />
      <HeaderStats />
      <SearchField
        value={searchValue}
        onChange={handleChangeSearchValue}
        onClear={handleClearSearchValue}
      />
    </S.Header>
  )
}
