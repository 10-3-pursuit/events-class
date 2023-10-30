// this will add a click listener to the h1
const h1 = document.querySelector("h1");

h1.addEventListener("click", () => {
  console.log("You are clicking the first h1 on the page!");
});

// when we place the mouse over the h1 we will see the event type and the text content
h1.addEventListener("mouseover", (event) => {
  console.log(event);

  console.log("event.type:", event.type);
  console.log("event.target.textContent:", event.target.textContent);
});

// create count variable to increment
let count = 0;

// grab span from the DOM
const span = document.querySelector("h1 span");

// we grab all of the buttons, loop through to add the event listener
const buttons = document.querySelectorAll("button");
// loop over each button to add an event.
for (let button of buttons) {
  //   button.addEventListener("click", () => {
  //     console.log("A button was clicked!");
  //   });
  button.addEventListener("click", () => {
    count++;
    span.textContent = count;
  });
}

// capture all of the lis
const lis = document.querySelectorAll("li");

// create a reusable function to create new li and attach event listener
function generateLiHandler() {
  const ol = document.querySelector("ol");
  const newLi = document.createElement("li");
  newLi.textContent = "Click me to make more!";
  ol.append(newLi);

  // this adds event listener only to the new lis
  newLi.addEventListener("click", generateLiHandler);
}

// loop over lis ad and event listener and creat new li with text and append to the ordered list.

// this adds the event lister to already existing lis
for (let li of lis) {
  li.addEventListener("click", generateLiHandler);
}
