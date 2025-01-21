# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



# Card App

## Overview
This is a React-based application to display cards fetched from a mock API. It supports adding, deleting, and re-arranging cards with animations.

## Features
1. Display cards with mock data.
2. Add new cards dynamically.
3. Delete cards and update the UI with animations.

## Technologies Used
- React.js
- Axios
- Framer Motion

## Setup Instructions
1. Clone the repository(git clone [https://github.com/username/repository-name.git](https://github.com/shanmugamsanthosh/cards_.git))
2. Navigate to the Desired Directory( cd cards_)
3. Install Dependencies(npm install)
4. Start the Development Server(npm run dev)
5. open new tab and enter url as (http://localhost:5173)

## Implemmentation 
1. We used mockapi.io to create a mock API, and the APIs are implemented in the api folder.
2. In the components folder, CardsList.jsx is used to display the list of cards and includes asynchronous functions (using async and await) for adding and deleting cards.
3. The AddCard.jsx file, located in the components folder, contains the code for adding a new card.
4. The Card.jsx file, also in the components folder, contains the structure code for cards and includes a delete button, which functions by passing the card's ID.
5. App.css contains stylings for the all components
