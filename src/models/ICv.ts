import { IUser } from './IUser'
import { IProject } from './IProject'
import { ISkillMastery } from './ISkillMastery'
import { ILanguageProficiency } from './ILanguageProficiency'

export interface ICv {
    id: string
    created_at: string
    name: string
    description: string
    user?: IUser
    projects: IProject[]
    skills: ISkillMastery[]
    languages: ILanguageProficiency[]
    is_template: boolean
}