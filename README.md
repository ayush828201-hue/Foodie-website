🍔 Foodie — Food Ordering Website

A responsive, single-page food ordering website built from scratch using HTML, Tailwind CSS, and vanilla JavaScript. Foodie features a dynamic menu loaded from JSON, a fully interactive shopping cart, a testimonials carousel, and smooth UI animations — all without relying on any frontend framework.

Show Image Show Image Show Image Show Image

✨ Features
🛒 Dynamic Cart System — Add, remove, and update item quantities with live price and total calculation
📋 Menu from JSON — Menu items are rendered dynamically from a products.json file, making it easy to add or update dishes
🎬 Animated Cart Panel — Smooth slide-in/out cart drawer with a layout shift effect on the menu grid
💬 Testimonials Carousel — Customer reviews powered by Swiper.js
🎨 Custom Design System — Built with a custom Tailwind theme (colors, fonts, animations)
📱 Responsive Layout — Adapts across screen sizes using Tailwind's utility classes
🌊 Micro-animations — Floating image effects and hover transitions for a polished feel
🛠️ Tech Stack
Category	Technology
Markup	HTML5
Styling	Tailwind CSS (v4)
Scripting	Vanilla JavaScript (ES6+)
Carousel	Swiper.js
Icons	Font Awesome
Data	JSON
Fonts	Google Fonts (Roboto Condensed, Baloo Bhai 2)
📁 Project Structure
Foodie Website/
├── images/                # All image assets
├── src/
│   ├── input.css          # Tailwind source file (custom theme + components)
│   └── output.css         # Compiled Tailwind CSS
├── index.html              # Main HTML file
├── main.js                 # Cart logic & Swiper initialization
├── products.json           # Menu item data
├── package.json
└── README.md
🚀 Getting Started
Prerequisites
Node.js installed on your machine
Installation
Clone the repository
bash
   git clone https://github.com/your-username/foodie-website.git
   cd foodie-website
Install dependencies
bash
   npm install
Run the Tailwind CSS build (watch mode)
bash
   npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch
Open index.html in your browser (or use a Live Server extension) to view the site.
🖱️ How It Works
Menu items are fetched from products.json and rendered dynamically into the menu grid on page load.
Clicking "Add to Cart" pushes the item into the cart, updates the cart badge, and calculates the running total.
The + / − buttons update item quantity live; reducing quantity to zero removes the item with a slide-out animation.
Clicking the cart icon slides the cart panel into view and shifts the menu grid to make room.
📌 Roadmap / Future Improvements
 Add category-based menu filtering
 Persist cart data using local storage
 Add a checkout/payment flow
 Make the mobile navigation menu functional
 Add form validation for the newsletter signup
🙌 Acknowledgements
Swiper.js for the testimonials carousel
Font Awesome for icons
Tailwind CSS for utility-first styling

💡 About
Built as a personal learning project to practice responsive design, DOM manipulation, and building interactive UI components without a framework.
If you like this project, consider giving it a ⭐ on GitHub!
