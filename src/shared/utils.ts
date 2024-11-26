import { baseURL } from "@/services/api"

export const getFullPath = (path: string) => {
    let x = baseURL + path;
    return x;
}