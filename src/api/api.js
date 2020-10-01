class Api {
    constructor(url, token) {
        this._url = url;
        this._token = token;
    }

    search(query) {
        return fetch(`${this._url}/search/photos?page=1&query=${query}`, {
            headers: {
                Authorization: `Client-ID ${this._token}`,
            },
        }).then((res) => res.json());
    }
}

const api = new Api('https://api.unsplash.com', 'e58e3582c206680c1a9401c750a2bd8293920f8e7cc301b614c14cb5f58c1bc1');

export default api;
