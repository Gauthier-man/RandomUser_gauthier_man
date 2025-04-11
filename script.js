
const n = document.getElementById("name")
const gender = document.getElementById("gender")
const mail = document.getElementById("mail")
const age = document.getElementById("age")
const adress = document.getElementById("adress")
const number = document.getElementById("number")
const profilePicture = document.querySelector(".profile-picture")

// const user = response.results[0]



async function fetchRandomUser(){
    const request = await fetch("https://randomuser.me/api/");
    const response = await request.json();
    const user = response.results[0]
    
    n.innerHTML= `${user.name.first} ${user.name.first}`
    gender.innerHTML = user.gender
    mail.innerHTML = user.email
    age.innerHTML = user.registered.age
    adress.innerHTML = user.location.postcode
    number.innerHTML = user.phone

    profilePicture.style.backgroundImage = `url("${user.picture.large}")`
    
    

    console.log(n);
    console.log(user)

    
}

fetchRandomUser();


