import { ISkillMasteryInput } from './ISkillMasteryInput'
import { ILanguageProficiencyInput } from './ILanguageProficiencyInput'

export interface IProfileInput {
  first_name?: string
  last_name?: string
  skills: ISkillMasteryInput[]
  languages: ILanguageProficiencyInput[]
}