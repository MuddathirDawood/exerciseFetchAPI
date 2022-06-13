async function getData() {
    let collections = await fetch('https://randomuser.me/api?results=5');
    let data = collections.json();
    return data;
}
// Display
async function displayData() {
    let data = await getData();
    data.results.forEach(user => {
        document.querySelector('.container').innerHTML = ` <img src="${user.picture}" >
                            <h2>${user.name.first} ${user.name.last}</h2>
                            <h4>${user.location.country}</h4>
                            <h4>${user.location.state}</h4>
                            <h4>${user.location.city}: ${user.location.postcode} </h4>
                            <div class="email"><a href="email:${user.email}">${user.email}</a></div>
                            <p>${user.dob.date}  <strong>Age:   ${user.dob.age}</strong> </p>
                        `;

    });

    // document.querySelector('.container');

}

displayData();
