import { ICv } from './ICv'
import { IDepartment } from './IDepartment'
import { ILanguage } from './ILanguage'
import { IPosition } from './IPosition'
import { IProject } from './IProject'
import { ISkill } from './ISkill'
import { IUser } from './IUser'
import { IAuthInput } from './inputs/IAuthInput'
import { IAuthResult } from './results/IAuthResult'

export interface IQuery {
    cvs: ICv[]
    departments: IDepartment[]
    languages: ILanguage[]
    positions: IPosition[]
    projects: IProject[]
    skills: ISkill[]
    users: IUser[]

    project(id: string): IProject
    user(id: string): IUser    
    login(auth: IAuthInput): IAuthResult
    position(id: string): IPosition
    cv(id: string): ICv
}