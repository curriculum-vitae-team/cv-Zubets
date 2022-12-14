export interface IProjectInput {
  name: string
  internal_name?: string
  description: string
  domain: string
  start_date: string
  end_date?: string
  team_size: number
  skillsIds: string[]
}