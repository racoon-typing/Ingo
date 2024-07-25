import { $api } from "../api/api"
import { LoginFormData } from "../pages/login-page/LoginPage";

export const userService = {
    async createUser(userData: LoginFormData) {
        try {
            const response = await $api.post('/users', userData);
            return response.data;
        } catch (error) {
            console.error('Error creating user:', error);
            throw error;
        }
    },

    async getUser(id: string) {
        try {
            const response = await $api.get(`/users/${id}`);
            return response.data;
        } catch (error) {
            console.error('Error get user:', error);
            throw error;
        }
    },

    async deleteUser(id: string) {
        try {
            const response = await $api.delete(`/users/${id}`);
            return response.data;
        } catch (error) {
            console.error('Error get user:', error);
            throw error;
        }
    },
}
