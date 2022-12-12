import { IUser } from '../IUser'

export interface IAuthResult {
  user: IUser
  access_token: string
}