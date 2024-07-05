import { API_URL, token } from './config';

export default () => {
    return fetch(API_URL + '/items', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            "authorization": "Bearer " + token,
        },
    
    })
        .then(response => response.json())
    }