# NovaCart - E-Commerce Website

A fully functional e-commerce website built using HTML, CSS and JavaScript. No frameworks or libraries were used, everything is written from scratch including the UI, logic and responsiveness.

Live site: [https://d23vishwakarma.github.io/modified-e-commerce/](https://d23vishwakarma.github.io/modified-e-commerce/)


## About the Project

I started this project to get better at frontend development and to understand how real shopping websites work under the hood. Instead of using React or any CSS framework I decided to do everything manually so I could actually learn how things like the DOM, event handling, local storage and responsive design work.

The site has multiple pages, a working cart system, image sliders, a sidebar, and it works on mobile and desktop both. There is no backend connected right now so the cart data is handled through local storage which keeps it saved even after you refresh the page.

## Features

- **Hero slider** — banner images auto rotate every 5 seconds, you can also click left/right manually. Images fade in smoothly on change.
- **Product grid** — 8 products displayed in a responsive grid with name, price and add to cart button
- **Cart counter** — updates live in the header every time you add a product. also animates with a small bounce effect
- **Category sliders** — two horizontal scroll sections for Books and Home products. left arrow hides when you are at the start and shows again when you scroll
- **Sidebar** — slides in from the left with a dark overlay behind it. closes when you click the overlay, the close button, or press Escape
- **Responsive layout** — works on laptop, tablet and mobile. used CSS grid and flexbox with custom breakpoints at 900px and 600px
- **Multiple pages** — products, cart, login, signup and settings pages all included
- **Local storage** — cart count is saved in the browser so it doesnt disappear on refresh

## Project Structure

```
modified-e-commerce/
│
├── index.html          homepage with hero, products, sliders
├── ecom.css            all the styles for the whole site
├── ecom.js             main JavaScript file
├── app.js              extra JS helpers
│
├── products.html       product listing page
├── cart.html           cart page
├── login.html          login form
├── signup.html         signup form
└── settings.html       settings page
```

## How to Run Locally

No setup required at all. Just clone the repo and open the HTML file.

```bash
git clone https://github.com/d23vishwakarma/modified-e-commerce.git
cd modified-e-commerce
```

Then open `index.html` in any browser. Thats it, no npm install, no build step, nothing.

## Technologies Used

- **HTML5** — page structure and semantic elements
- **CSS3** — flexbox, grid, custom properties, keyframe animations, media queries
- **JavaScript ES6** — DOM manipulation, event listeners, local storage, arrow functions
- **Font Awesome 6** — icons used in header, sidebar and buttons
- **Google Fonts** — Syne for headings, DM Sans for body text
- **Git and GitHub** — version control and hosting via GitHub Pages

## What I focused on

- Writing clean and readable code without copying from any template
- Making the UI feel smooth with transitions and hover effects
- Keeping the JS organized so each feature like slider, cart, sidebar has its own section
- Making it work properly on different screen sizes without using Bootstrap or Tailwind
- Using local storage to simulate cart persistence like a real site would do

## Known issues / things to improve

- Cart page doesnt calculate total price yet, that is something I am working on
- Product detail page is not done
- Search and filter functionality is missing
- Would like to connect a real backend later maybe using Node.js or Firebase
- Some images are linked from external sources so they might break if those URLs go down

---

## What I learned

This project taught me a lot about how to structure a multi-page website properly. I got much more comfortable with CSS Grid and Flexbox after laying out the product section and making it responsive. The slider logic was tricky at first especially handling the edge cases when you reach the first or last image. Local storage was something I had not used much before so that was good to learn too.

Overall this project helped me understand that you dont always need a framework to build something that looks and works well.

---

Developed by Divyansh Vishwakarma
GitHub: https://github.com/d23vishwakarma
Project link: https://github.com/d23vishwakarma/modified-e-commerce
