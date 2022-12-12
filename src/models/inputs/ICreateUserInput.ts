import { IAuthInput } from './IAuthInput'
import { IProfileInput } from './IProfileInput'

export interface ICreateUserInput {
  auth: IAuthInput
  profile: IProfileInput
  cvsIds: string[]
  departmentId?: string
  positionId?: string
  role: string
}