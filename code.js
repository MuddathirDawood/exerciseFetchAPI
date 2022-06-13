async function getData() {
    let collections = await fetch('https://randomuser.me/api?results=3');
    let data = collections.json();
    return data;
}
// Display
async function displayData() {
    let data = await getData();
    data.results.forEach(user => {
        document.querySelector('.container').innerHTML +=`
                                                        <div class="card text-center">
                                                            <div class="card-header">
                                                              <img src="${user['picture'].large}">
                                                            </div>
                                                            <div class="card-body">
                                                              <p class="card-title text-muted" id="text">Hi, my name is</p>
                                                              <h4 class="card-text" id="content">${user['name'].first} ${user['name'].last}</h4>
                                                            </div>
                                                            <div class="card-footer">
                                                                <i class="bi bi-person" id="name"></i>
                                                                <i class="bi bi-envelope" id="email" onmouseenter="mouseover('My email address is','${user['email']}')"></i>
                                                                <i class="bi bi-calendar4-week" id="birth" onmouseenter="mouseover('My birthday is on','${user['dob'].date}')"></i>
                                                                <i class="bi bi-map" id="address" onmouseenter="mouseover('My home address is','${user['location'].street.number} ${user['location'].street.name}')"></i>
                                                                <i class="bi bi-telephone" id="contact" onmouseenter="mouseover('My phone number is','${user['phone']}')"></i>
                                                                <i class="bi bi-lock" id="password" onmouseenter="mouseover('My password is','${user['login'].password}')"></i>
                                                            </div>
                                                        </div>`

                                         
                                 });


}
function mouseover(text,content){
    document.querySelector('#text').innerHTML = text;
    document.querySelector('#content').innerHTML = content;
}   


displayData();



