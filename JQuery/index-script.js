const getCountriesPromise = url => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {
            if (request.readyState === 4 && request.status === 200) {
                let data = JSON.parse(request.responseText);
                resolve(data);
            } else if (request.readyState === 4) {
                reject('Something strange happend.');
            }
        });

        request.open('GET', url);
        request.send();
    })
}

getCountriesPromise('https://api.techloq-dev.com/geo').then(data => {
    console.log(data);

    var mainDiv = document.getElementById('main');

    data.collection.forEach(element => {

        const counryCodeP = '<span>Country Code: ' + element.countryCode + '</span>';
        const counryNameP = '<span>Country Name: ' + element.countryName + '</span>';
        const counryPhoneP = '<span>Country Phone: ' + element.countryPhoneCode + '</span>';
        const parentDiv = '<div>' + counryCodeP + ' ' + counryNameP + ' ' + counryPhoneP + '</div>'

        $("#main").append(parentDiv);
    });

}).catch(error => {
    console.log(error);
})