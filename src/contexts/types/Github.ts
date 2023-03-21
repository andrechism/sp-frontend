export type User = {
    login: string
    id: number
    node_id: string
    avatar_url: string
    url: string
    site_admin: boolean
    name: string
    company: string
    location: string
    html_url: string
    created_at: string
}

export type Repository = {
    id: number
    name: string
    full_name: string
    private: boolean
    owner: User
    html_url: string
    description: string
}

export type GetList = {
    users: User[],
    nextPage: string
}