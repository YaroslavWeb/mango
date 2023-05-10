import * as S from './styles'

export enum E_StatMod {
  green = 'green',
  yellow = 'yellow',
  red = 'red',
}

interface I_StatProps {
  mod?: E_StatMod
  label: string
  text: string
  progress: number
}

const StatComponent = ({ mod = E_StatMod.green, label, text, progress }: I_StatProps) => {
  return (
    <S.StatWrapper>
      <div>
        <label>{label}</label> <S.StatText $mod={mod}>{text}</S.StatText>
      </div>
      <S.StatProgress $mod={mod} $progress={progress} />
    </S.StatWrapper>
  )
}

StatComponent.mod = E_StatMod

export const Stat = StatComponent
