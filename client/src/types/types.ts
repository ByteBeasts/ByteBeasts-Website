export interface TeamMember {
  id: string
  name: string
  role: string
  image: string
  specialty?: string
  social: {
    twitter?: string
    github?: string
    linkedin?: string
  }
}
