export interface User {
    id: string
    first_name: string
    last_name: string
    accessToken: string
    refreshToken: string
    username: string
    createdAt: Date
    updatedAt: Date
}

export interface Category {
    id: string
    name: string
    userId: string
    createdAt: Date
    updatedAt: Date
}