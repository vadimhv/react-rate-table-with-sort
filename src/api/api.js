import * as axios from 'axios';

let instance = axios.create({
    baseURL: 'http://localhost:8000/',
});

export const participantsAPI = {
    getParticipants() {
        return instance.get(`participants`)
            .then(response => response.data);
    }
}