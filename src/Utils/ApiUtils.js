export function FetchData(url, method, body = {}, options = {}){
    let _options = {...options};

    if (method.toUpperCase() === 'POST')
        _options.body = JSON.stringify(body);
    
    return fetch(url, {
        method,
        ..._options
    }).then(async res => {
        let status = res.status;
        return {
            status,
            data : await res.json()
        }
    });
} 