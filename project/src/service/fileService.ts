import { $api } from "../api/api";

export const fileService = {
    async getFiles() {
        try {
            const response = await $api.get('/files');
            return response.data;
        } catch (error) {
            console.error('Error creating user:', error);
            throw error;
        }
    },

}