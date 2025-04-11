
const n = document.getElementById("name")
const gender = document.getElementById("gender")
const mail = document.getElementById("mail")
const age = document.getElementById("age")
const adress = document.getElementById("adress")
const number = document.getElementById("number")
const profilePicture = document.querySelector(".profile-picture")



// const user = response.results[0]

async function fetchRandomUser(){
    // const request = await fetch("https://randomuser.me/api/");
    const request = await fetch("https://randomuser.me/api/?results=20");
    const response = await request.json();

    for (let index = 0; index < response.results.length; index++) {
        const user = response.results[index];
       
        
    
     document.body.innerHTML += `
    <section id="card-container">
    <div class="card-user">
      <h1>RandomUser</h1>
      <div class="card-content">
        <div class="profile-picture" style="background-image:url('${user.picture.large}')"></div>
        <div class="bar-info"></div>
        <div class="card-text">
          <div class="user_content">
            <h3 id="user_name">Nom :</h3>
            <p id="name">${user.name.first} ${user.name.last}</p>
          </div>
          <div class="user_content">
            <h3 id="user_gender">Genre :</h3>
            <p id="gender">${user.gender}</p>
          </div>
          <div class="user_content">
            <h3 id="user_mail">Adresse mail :</h3>
            <p id="mail">${user.email}</p>
          </div>
          <div class="user_content">
            <h3 id="user_age">Age :</h3>
            <p id="age">${user.registered.age}</p>
          </div>
          <div class="user_content">
            <h3 id="user_adress">Adresse :</h3>
            <p id="adress">${user.location.postcode}</p>
          </div>
          <div class="user_content">
            <h3 id="user_number">Numéro de téléphone :</h3>
            <p id="number">${user.phone}</p>
          </div>
        </div>
      </div>
    </div>
  </section>`

}

    console.log(n);
    console.log(user)


}

fetchRandomUser();


