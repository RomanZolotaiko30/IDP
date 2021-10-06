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

function constructSpan(propName, value) {
    return '<span class="countryInfo">' + propName + ': ' + value + '</span>'
}

getDataPromise('https://api.techloq-dev.com/geo').then(data => {

    data.collection.forEach(element => {
        let code = constructSpan('Country Code', element.countryCode);
        let name = constructSpan('Country Name', element.countryName);
        let phoneCode = constructSpan('Country Phone Code', element.countryPhoneCode);
        let mainDiv = $("#main");
        let divToAdd = '<div>' + code + ' ' + name + ' ' + phoneCode + ' ' + '</div><hr>';

        mainDiv.append(divToAdd);
    });

    $(".countryInfo").css('font-size', '20px');
}).catch(error => {
    console.log(error);
});