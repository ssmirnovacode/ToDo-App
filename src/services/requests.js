import baseURL from '../assets/baseURL';

export default class RequestService {

    //_baseAPI = 'http://localhost:3001/items/';

    async getItems (url) {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
        return await res.json();
    }

    async postItem(url, data) {
        const number = await this.getItemId(); 
        const newItem = {
            id: number, 
            ...data
        }
        const res = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(newItem)
        });
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
        return await res.json();
    }

    async updateItem(url, data) {
        const res = await fetch(url, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(data)
        });
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
        return await res.json();
    }

    async deleteItem(url) {
        const res = await fetch(url, {
            method: "DELETE"
        });
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
        return await res.json();
    }

    async getItemId(){
        const res = await this.getItems(baseURL+'items');
        let itemId = Math.random().toString();
        if (!res.find(item => item.id === itemId)) {
            return itemId;
        }
        else this.getItemId();
    }
}