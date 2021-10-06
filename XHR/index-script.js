const getDataPromise = (url) => new Promise((resolve, reject) => {
    let request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) {
            let data = JSON.parse(request.responseText);
            resolve(data);
        } else if (request.readyState === 4) {
            reject('Something strange happend.');
        }
    })

    request.open('GET', url);
    request.send();
})

getDataPromise('https://api.techloq-dev.com/geo').then(data => {
    console.log(data);
}).catch(error => {
    console.log(error);
})