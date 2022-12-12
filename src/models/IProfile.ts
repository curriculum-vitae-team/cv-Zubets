import { ISkillMastery } from './ISkillMastery'
import { ILanguageProficiency } from './ILanguageProficiency'

export interface IProfile {
    id: string
    created_at: string
    first_name?: string
    last_name?: string
    full_name?: string
    avatar?: string
    skills: ISkillMastery[]
    languages: ILanguageProficiency[]
}