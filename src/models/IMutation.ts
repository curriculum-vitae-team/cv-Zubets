import { IAuthInput } from './inputs/IAuthInput'
import { IAuthResult } from './results/IAuthResult'
import { ICvInput } from './inputs/ICvInput'
import { ICv } from './ICv'
import { IDeleteResult } from './results/IDeleteResult'
import { IDepartmentInput } from './inputs/IDepartmentInput'
import { IDepartment } from './IDepartment'
import { ILanguageInput } from './inputs/ILanguageInput'
import { ILanguage } from './ILanguage'
import { IPositionInput } from './inputs/IPositionInput'
import { IPosition } from './IPosition'
import { IAvatarInput } from './inputs/IAvatarInput'
import { IProjectInput } from './inputs/IProjectInput'
import { IProject } from './IProject'
import { ISkillInput } from './inputs/ISkillInput'
import { ISkill } from './ISkill'
import { ICreateUserInput } from './inputs/ICreateUserInput'
import { IUser } from './IUser'
import { IUpdateUserInput } from './inputs/IUpdateUserInput'

export interface IMutation {
    signup(auth: IAuthInput): IAuthResult
    createCv(cv: ICvInput): ICv
    updateCv(id: string, cv: ICvInput): ICv
    deleteCv(id: string): IDeleteResult
    unbindCv(id: string): ICv
    createDepartment(department: IDepartmentInput): IDepartment
    updateDepartment(id: string, department: IDepartmentInput): IDepartment
    deleteDepartment(id: string): IDeleteResult
    createLanguage(language: ILanguageInput): ILanguage
    updateLanguage(id: string, language: ILanguageInput): ILanguage
    deleteLanguage(id: string): IDeleteResult
    createPosition(position: IPositionInput): IPosition
    updatePosition(id: string, position: IPositionInput): IPosition
    deletePosition(id: string): IDeleteResult
    uploadAvatar(id: string, avatar: IAvatarInput): string
    deleteAvatar(id: string): void
    createProject(project: IProjectInput): IProject
    updateProject(id: string, project: IProjectInput): IProject
    deleteProject(id: string): IDeleteResult
    createSkill(skill: ISkillInput): ISkill
    updateSkill(id: string, skill: ISkillInput): ISkill
    deleteSkill(id: string): IDeleteResult
    createUser(user: ICreateUserInput): IUser
    updateUser(id: string, user: IUpdateUserInput): IUser
    deleteUser(id: string): IDeleteResult
}