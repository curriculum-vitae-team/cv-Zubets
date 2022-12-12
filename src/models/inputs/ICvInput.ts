import { ISkillMasteryInput } from './ISkillMasteryInput'
import { ILanguageProficiencyInput } from './ILanguageProficiencyInput'

export interface ICvInput {
  name: string
  description: string
  userId?: string
  projectsIds: string[]
  skills: ISkillMasteryInput[]
  languages: ILanguageProficiencyInput[]
  is_template: boolean
}