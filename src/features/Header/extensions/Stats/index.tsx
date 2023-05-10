import * as S from './styles'

import { Stat } from 'components/Stat'

export const HeaderStats = () => {
  return (
    <S.StatsWrapper>
      <Stat label='Новые звонки' text='20 из 30' progress={66} />
      <Stat label='Качество разговоров' text='40%' progress={40} mod={Stat.mod.yellow} />
      <Stat label='Конверсия в заказе' text='67%' progress={67} mod={Stat.mod.red} />
    </S.StatsWrapper>
  )
}
