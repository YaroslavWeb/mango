import * as S from './styles'

export const HeaderDate = () => {
  const date = new Date()
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    month: 'short',
    day: 'numeric',
  }
  const formattedDate = date.toLocaleDateString('ru-RU', options)

  const capitalizedDate = formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1)

  return <S.HeaderDateWrapper>{capitalizedDate}</S.HeaderDateWrapper>
}
