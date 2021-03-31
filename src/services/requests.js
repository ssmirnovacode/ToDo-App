import db from '../firebase';

export default class RequestService {

    //_baseAPI = 'http://localhost:3001/items/';

    async getItems () {
        const res = db.collection('items');
        const data = await res.get();
        /* if (!data.ok) {
            throw new Error(`Could not fetch data, status: ${data.status}`);
        } */
        //return await data.json();
    }

    /* async getItems (url) {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
        return await res.json();
    } */

    async postItem(url, data) {
        const number = data.id; 
        const newItem = {
            ...data,
            id: number
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
}