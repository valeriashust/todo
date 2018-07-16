

import responses from "./mock-responses.json";

let id = 0;

export default (url, param) => {
    return new Promise(((resolve) => {

        setTimeout(() => {
            if (url ==='/todos' && param.method === 'post') {
                id+=1;
                resolve({...param.body, id})
            }
            resolve(responses[url][param.method || 'get']);
        }, 5000);
    }));
}
