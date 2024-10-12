# Upgrad E-Shop

## Project Overview

Upgrad E-Shop is an e-commerce web application built with React.js, providing a seamless shopping experience for users. The project uses Material UI for modern, responsive UI components and offers various features such as product selection, user authentication, and toast notifications.

## Features

- **Product Browsing**: Users can view and search through a range of products.
- **Shopping Cart**: Add/remove products to/from the shopping cart.
- **Responsive Design**: Built with Material UI to ensure the application is responsive and user-friendly on various devices.
- **Notifications**: Uses `react-toastify` for user notifications.

## Technologies Used

- **React** (v18.2.0): Main library for building the user interface.
- **Material UI** (v5.15.1): UI framework to create beautiful and responsive components.
- **React Router DOM** (v6.21.0): To handle routing between pages.
- **React Select** (v5.8.0): A flexible select input control for React.
- **React Toastify** (v9.1.3): For displaying elegant toast notifications.
- **Emotion** (v11.11.x): Styling library for writing CSS in JavaScript.

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/sd031/upgrad-eshop-sandip-das.git
   cd upgrad-eshop
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run eject`

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. **Note: this is a one-way operation. Once you `eject`, you can't go back!**

## Folder Structure

The project's folder structure is as follows:

```
upgrad-eshop/
  ├── public/
  ├── src/
      ├── common/         # common components
      ├── components/     # Reusable components
      ├── assets/         # Global static assets
      ├── App.js          # Main application component
      └── index.js        # Entry point
      └── index.css       # Entry point css
  ├── .gitignore
  ├── package.json
  └── README.md
```

## Proxy Setup

This project uses `http-proxy-middleware` to handle API requests during development. Check `src/setupProxy.js` for the configuration if you need to modify or add proxy settings.

## Dependencies

- **@emotion/react**: CSS-in-JS library for styling components.
- **@emotion/styled**: Styled components for Emotion.
- **@mui/material & @mui/icons-material**: Material UI library and icons for building the user interface.
- **React Testing Library**: For testing React components.

## Browser Compatibility

This project targets modern browsers for both production and development environments:

- **Production**: Browsers with market share greater than 0.2%, excluding outdated or low-use browsers.
- **Development**: Last version of Chrome, Firefox, and Safari.

## Contributing

Feel free to submit issues or pull requests if you find any bugs or have suggestions for improvement. Contributions are always welcome!

## License

This project is licensed under the MIT License.