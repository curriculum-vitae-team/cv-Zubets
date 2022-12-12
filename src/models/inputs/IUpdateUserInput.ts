import { IProfileInput } from './IProfileInput'

export interface IUpdateUserInput {
  profile: IProfileInput
  cvsIds: string[]
  departmentId?: string
  positionId?: string
}