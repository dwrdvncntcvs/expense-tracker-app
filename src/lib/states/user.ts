import { writable } from "svelte/store";
import type { User } from "../../types/state";

export const user = writable<User | undefined>(undefined)

export const setUser = (userData: User) => {
    user.set(userData)
}
export const removeUser = () => {
    user.set(undefined)
}