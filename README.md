# Frontend Mentor - Results summary component solution

This is a solution to the [Results summary component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)


### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: Use the local JSON data to dynamically populate the content

### Screenshot

![](design/desktop-design.jpg)
![](design/mobile-design.jpg)



### Links

- Live Site URL: [Solution](https://vit29.github.io/results-summary/)

## My process

### Built with

- CSS 
- Flexbox
- Mobile-first workflow

### What I learned

I learned to fetch the local JSON file using fetch(...), which returns a promise. I used then and catch to handle the results or errors of the asynchronous operation.

Next, I tested my JavaScript skills and created HTML elements from scratch to pass the corresponding data from the JSON file to each one. I also applied styles based on their category.

```js
function fetchData() {
  fetch("./data.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`error de red - ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      addData(data);
    })
    .catch((error) => {
      console.error("Error al recuperar el archivo JSON:", error);
    });
}
```

## Author

- Website - [Vitaly varela](https://vit29.github.io/portafolio/)
- Frontend Mentor - [@ Vit29](https://www.frontendmentor.io/profile/Vit29)

