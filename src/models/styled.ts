import { RuleSet } from 'styled-components/dist/types'

export type T_StyledVariants<E extends string | number> = {
  [key in E]?: RuleSet<any>
}
