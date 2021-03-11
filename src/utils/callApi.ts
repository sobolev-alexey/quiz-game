import axios from 'axios';
import { privateDecrypt } from '../utils/encryption';

export default async (payload: any, privateKey?: string) => {
    const headers = {
        'Content-Type': 'application/json'
    };
    const url = 'https://us-central1-quiz-game-challenge.cloudfunctions.net/quiz';

    const response = await axios.post(url, payload, { headers });
    if (response?.data) {
		// Private key will be used to decrypt questions on the client side
        const decrypted = privateDecrypt(privateKey || '', response?.data?.encrypted);
        return decrypted?.results;
    }    
}