# Song Management App (Frontend)

This is the frontend for the Song Management App, built as part of the Addis Software Test Project. It is set up manually with Webpack (no Create React App) and is ready for integration with a REST API backend.

## What Has Been Done So Far

### Simple Analogy

Imagine building a house (your app):
- **Webpack** is your construction manager, assembling all your materials (JS, CSS, images) into a finished house (the app in the `dist` folder).
- **Babel** is a translator for your blueprints, making sure your modern designs (JSX, ES6+) are understood by all browsers.
- **CleanWebpackPlugin** is the cleaning crew, sweeping out the old house before every new build.
- **HtmlWebpackPlugin** is the welcome mat, creating the main HTML file and putting your finished house (the JS bundle) inside.
- **webpack-dev-server** is your address, letting you preview your house at `localhost:3000` and see changes instantly.
- **DefinePlugin** is your secret key, setting things like the API address so your app knows where to fetch data.
- **npm scripts** are your instructions to the crew: `npm start` to build and watch for changes, `npm run build` for the final house.

### Technical Breakdown

- **Manual Webpack Setup:** No CRA, all configuration is custom.
- **Babel Configuration:** `.babelrc` uses `@babel/preset-env` for modern JS and `@babel/preset-react` (with automatic runtime) for JSX.
- **Webpack Rules:**
  - **JavaScript/JSX:** Uses Babel loader to transpile modern JS and React code.
  - **CSS:** Uses `style-loader` and `css-loader` to allow importing CSS files into JS.
  - **Images:** Uses Webpack 5 asset modules to handle image files (png, svg, jpg, jpeg, gif).
- **Plugins:**
  - **HtmlWebpackPlugin:** Generates the HTML file from a template and injects the JS bundle.
  - **CleanWebpackPlugin:** Cleans the `dist` folder before each build to prevent leftover files.
  - **DefinePlugin:** Injects environment variables (like `API_BASE_URL`) into the app at build time.
- **Dev Server:**
  - Hot Module Replacement for instant updates.
  - History API fallback for client-side routing.
  - Runs on port 3000.
- **Scripts:**
  - `npm start`: Runs the dev server for development.
  - `npm run build`: Builds the app for production.
- **Environment Variables:**
  - `API_BASE_URL` is set via `DefinePlugin`. For production, set `API_BASE_URL` in your environment before building.

## How the App Starts Up

### General Explanation
- The app starts with an HTML file (`public/index.html`) that provides a basic web page with a single `<div id="root"></div>`. This is where the React app will appear.
- The JavaScript entry point (`src/index.js`) takes over and renders the React application inside that div.

### Technical Explanation
- `public/index.html` is the static HTML template. Webpack injects your JavaScript bundle into this file.
- `src/index.js` is the main entry point for the React app. It:
  - Imports React and ReactDOM.
  - Uses `ReactDOM.createRoot` (React 18+) to attach the app to the `root` div.
  - Wraps the app in `<Provider store={store}>` to connect Redux state management.
  - Uses `<React.StrictMode>` for highlighting potential problems in development.

### Analogical Explanation
- Think of `index.html` as an empty house with a special room (`<div id="root">`) waiting to be decorated.
- `index.js` is the decorator: it brings in all the furniture (your React app), sets up the electricity (Redux for state management), and makes sure everything is safe and up to code (React.StrictMode).

## App Color Theme

The app uses a modern, harmonious color palette inspired by a soft yellow and various shades of blue:

| Name        | Hex       | Example        |
|-------------|-----------|---------------|
| Background  | #FFFbDE   | Soft yellow   |
| Primary     | #91C8E4   | Light blue    |
| Secondary   | #749BC2   | Muted blue    |
| Accent      | #4682A9   | Deep blue     |
| Text        | #222B38   | Dark blue-gray|
| Text Muted  | #749BC2   | Muted blue    |

These colors are defined in `src/styles/theme.js` and are used throughout the app for backgrounds, buttons, text, and highlights. This ensures a consistent and visually appealing user experience.

## Main Application Component (App.js)

### General Explanation
- `App.js` is the main component that sets up the app’s look and feel using the theme and displays the main content (currently the HomePage).

### Technical Explanation
- Imports the custom theme and wraps the app in Emotion’s `ThemeProvider`, making the color palette and theme available to all styled components.
- Renders a main heading and the `HomePage` component.
- Includes a placeholder for global styles, which can be added for consistent base styling across the app.

### Analogical Explanation
- Think of `App.js` as the “main room” of your house, where you set the mood (theme/colors) and invite guests (other components/pages) to join.

## How to Run the Project

1. **Install dependencies:**
   ```bash
   cd song-app-frontend
   npm install
   ```
2. **Start the development server:**
   ```bash
   npm start
   ```
   This will run the app at [http://localhost:3000](http://localhost:3000).

3. **Build for production:**
   ```bash
   npm run build
   ```
   The output will be in the `dist` folder.

## Webpack Configuration Explained

- **Entry/Output:**
  - Entry: `src/index.js`
  - Output: `dist/bundle.js`
- **Loaders:**
  - Babel for JS/JSX
  - CSS loader for CSS files
  - Asset module for images
- **Plugins:**
  - `HtmlWebpackPlugin` for HTML generation
  - `CleanWebpackPlugin` to clear `dist` before build
  - `DefinePlugin` for environment variables
- **Dev Server:**
  - Hot reloading, static serving, and client-side routing support
- **Environment Variables:**
  - `API_BASE_URL` is set via `DefinePlugin`. For production, set `API_BASE_URL` in your environment before building.

## AI Usage

- **Parts generated with AI:**
  - Initial Webpack configuration and improvements were assisted by AI tool (Google AI Studio), but all code was reviewed and understood before submission.
- **Verification:**
  - The configuration was tested by running the dev server and building the project. Debugging steps included checking for build errors and verifying hot reloading and asset handling.

## Next Steps

- Implement the React app (song list, CRUD, pagination)
- Add Redux Toolkit and Redux-Saga for state management and API side effects
- Integrate Emotion/Styled System for theming and responsive styling
- Connect to a backend (JSONPlaceholder, MirageJS, or custom API)
- Add unit/component tests (Jest, React Testing Library)
- Optimize bundle size (code splitting, lazy loading)
- Deployment (Netlify/Vercel)

---

