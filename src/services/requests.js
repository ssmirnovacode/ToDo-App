export default class RequestService {

    //_baseAPI = 'http://localhost:3001/items/';

    async getItems (url) {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
        return await res.json();
    }
}