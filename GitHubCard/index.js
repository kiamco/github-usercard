import Axios from "axios";

/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/


// create request
// axios.get('https://api.github.com/users/kiamco')
//   .then(response => {
//     console.log(response);
//   })
//   .catch(err => {
//     console.log(err);
//   })

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/


class Cards {
  constructor(data) {
    this.data = data
    this.card = this.createChildCard.bind(this);
  }

  createChildCard() {
    const childCard = document.createElement('div');
    const img = document.createElement('img');
    const cardInfo = this.addCardInfo(this.data)

    childCard.classList.add('card')

    childCard.appendChild(img);
    childCard.appendChild(cardInfo);

    return childCard
  }

  addCardInfo(data) {

    // create elements
    const cardInfo = document.createElement('div');
    const name = document.createElement('h3');
    const userName = document.createElement('p');
    const location = document.createElement('p');
    const profile = document.createElement('p');
    const gitHubAddress = document.createElement('a');
    const followers = document.createElement('p');
    const following = document.createElement('p');
    const bio = document.createElement('p');

    // add class
    cardInfo.classList.add('card-info');
    name.classList.add('name');
    userName.classList.add('username');

    //append 
    cardInfo.appendChild(name);
    cardInfo.appendChild(userName);
    cardInfo.appendChild(location);
    cardInfo.appendChild(profile);
    profile.appendChild(gitHubAddress);
    cardInfo.appendChild(followers);
    cardInfo.appendChild(following);
    cardInfo.appendChild(bio);

    //assign elements value
    data.forEach(el => {
      name = el.name;
      userName = el.login;
      location = el.location;
      gitHubAddress = el.html_url;
      followers = el.followers;
      following = el.following
    })

    return cardInfo;
  }
}


const getData = (api) => {
  
  return Axios(api)
    .then(response => {
      this.parseData(response);
    })
    .catch(err => {
      console.log(err);
    });
}

const parseData = (response) => {
  return response.data
}
const cards = document.querySelector('.cards');
const data = getData('https://api.github.com/users/kiamco');
const newCard = new Cards();
cards.appendChild(newCard.createChildCard());