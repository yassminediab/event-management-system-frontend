const BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:3000';

export function getFullUrl(url) {
    return `${BASE_URL}/${url}`;
}

export function getToken() {
    return `Bearer ${localStorage.getItem('token')}`;
}
