import { API_URL, token } from './config';

export default (item) => {
    return fetch(API_URL + '/items/' + item._id, {
        method: 'delete',
        headers: {
            'Content-Type': 'application/json',
            "authorization": "Bearer " + token,
        },
    
    }) 
    }