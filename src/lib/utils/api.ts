import { BASE_API } from "$lib/constants";
import { Axios } from "axios";

const axiosInstance = new Axios({
    baseURL: BASE_API, headers: {
        "Content-Type": "application/json"
    }
})

const apiRequest = async (method: "post" | "get" | "put" | "delete" | "patch", endpoint: string, data?: any, headers?: any) => {
    const response = await axiosInstance[method](endpoint, JSON.stringify(data), { headers: { ...headers } })

    const responseData = JSON.parse(response.data)
    const status = response.status
    const statusText = response.statusText

    return {
        ok: status < 400,
        data: responseData,
        statusText
    }
}

export const request = {
    get: async (endpoint: string) =>
        await apiRequest("get", endpoint),
    post: async (endpoint: string, data: any) =>
        await apiRequest("post", endpoint, data),
    put: async (endpoint: string, data: string) =>
        await apiRequest("put", endpoint, data),
    delete: async (endpoint: string) =>
        await apiRequest("delete", endpoint)
}