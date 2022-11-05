// We fire this when our button is clicked
function clickHandler() {
  fetch('https://randomuser.me/api') // this is where we get our data from
  .then((response) => response.json())
  .then((data) => {
    const firstName = data.results[0].name.first;
    const lastName = data.results[0].name.last;
    const src = data.results[0].picture.large;

    changeUserName(firstName, lastName);
    createPicture(src);
  });

}

function changeUserName(firstName, lastName) {
  let userNameElement = document.querySelector('.user-name');
  userNameElement.innerHTML = firstName + " " + lastName;
}

function createPicture(src) {
  let pictureElement = document.querySelector('img');
  pictureElement.setAttribute('src', src);
}

// GOAL - Have a button that fetches data from somewhere and then displays it on the page
// Display user data

/*

THREE THINGS WE WANT TO DO WITH JAVASCRIPT -

1. INTERACT WITH THE PAGE (the DOM)

DOM - Document Object Model

Basic Things we can do:
1. Update an attribute (visual) - this can be used to show, hide something
2. Create an element
3. Destroy an element

*/

/*

2. MAKE EVENTS and HANDLE EVENTS

Common events:

clicking
typing
scrolling

When something on the page happens (an event) -

We want to be able to capture it and then possibly do something (handle it)

3. GET (fetch) DATA

We can use the fetch method to help us retrieve data from endpoints (APIs)

We can use this data in conjunction with our previous skills to create, destroy, update, etc things on the page

*/


