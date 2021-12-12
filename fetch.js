let r = fetch('https://reqres.in/api/user');

let s = r.then(function (response) {
    return response.json();
});

s.then(function(a) {
    displayData(a.data);
});


function displayData(data) {
    data.forEach(function(element) {
        console.log(element);
        document.createElement('tr');
        document.createElement('td');
    });
}
