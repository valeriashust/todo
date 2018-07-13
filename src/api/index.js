

import responses from "./mock-responses.json";
import nextId from './nextId';
import {id} from '../index'


export default (url, param) => {
    return new Promise(((resolve) => {

        setTimeout(() => {
            if (url ==='/todos' && param.method === 'post') {
                resolve({...param.body, id: nextId(id)})
            }
            resolve(responses[url][param.method || 'get']);
        }, 5000);
    }));
}

