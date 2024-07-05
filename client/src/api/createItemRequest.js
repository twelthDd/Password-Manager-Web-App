import { API_URL, token } from './config';

export default (item) => {
    return fetch(API_URL + '/items', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "authorization": "Bearer " + token,
        },
        body: JSON.stringify({
            name: item.name,
            username: item.username,
            password: item.password,
            website: item.website,
            favorite: item.favorite
        
        })
    
    })
        .then(response => response.json())
    }