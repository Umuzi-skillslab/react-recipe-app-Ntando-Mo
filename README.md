# FlavourFlow

**Master Your Kitchen**

FlavourFlow is a responsive React recipe application designed to make discovering recipes, saving favourites, and planning meals simple and enjoyable. Users can browse recipes, search by title or ingredients, filter recipes by category, cuisine, and difficulty, view detailed recipes, save favourites, and organise meals across a seven-day planner.

The application also incorporates multimedia cooking content through reusable audio and video components.

## Features

### 🍽️ Recipe Discovery

* Browse a collection of recipes across breakfast, lunch, dinner, dessert, and snack categories.
* View detailed recipe information including ingredients, instructions, category, cuisine, and difficulty.
* Search recipes by title and ingredients.
* Filter recipes by category, cuisine, and difficulty.
* Clear all active filters.
* Display loading, error, and empty-result states.
* Navigate to individual recipes using dynamic routes.

### 📅 Weekly Meal Planner

* Plan meals from Monday to Sunday.
* Each day includes dedicated breakfast, lunch, and dinner slots.
* Add recipes to individual meal slots.
* Remove planned meals.
* Clear the complete meal plan.
* Persist meal-planning data using `localStorage`.

### ❤️ Favourites

* Save recipes as favourites.
* Remove recipes from favourites.
* View saved recipes on a dedicated Favourites page.
* Share favourite state across the application using React Context.
* Persist favourites using `localStorage`.
* Display the number of saved favourites in the navigation.

### 🎧 Multimedia

* Reusable HTML5 audio player for cooking tips.
* Reusable HTML5 video player for cooking tutorials.
* Native browser playback controls.
* Fallback messaging when media cannot be played.

### 📱 Responsive Design

* Responsive navigation with mobile menu behaviour.
* Responsive recipe cards and layouts.
* Responsive recipe detail pages.
* Responsive meal-planning interface.
* Hover and interactive states for interface elements.

### 🧭 Navigation

The application uses React Router for client-side navigation and includes a dedicated not-found page for invalid routes.

## Technology Stack

* **React** – Component-based user interface development
* **React Router** – Client-side routing and dynamic recipe routes
* **JavaScript (ES6+)** – Application logic and state management
* **HTML5** – Semantic structure and multimedia
* **CSS / CSS Modules** – Styling and responsive layouts
* **Vite** – Development server and production build tooling
* **ESLint** – Code quality and consistency
* **localStorage** – Client-side data persistence

## Application Structure

```text
src/
├── components/
│   ├── Media/
│   │   ├── AudioPlayer.jsx
│   │   └── VideoPlayer.jsx
│   ├── Navigation/
│   │   └── Navbar.jsx
│   ├── Recipe/
│   │   ├── RecipeCard.jsx
│   │   ├── RecipeDetail.jsx
│   │   ├── RecipeFilter.jsx
│   │   └── RecipeList.jsx
│   ├── UI/
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── Loading.jsx
│   │   ├── Modal.jsx
│   │   └── SearchBar.jsx
│   └── common/
│       └── Footer.jsx
├── context/
│   └── FavoritesContext.jsx
├── data/
│   └── recipesData.js
├── pages/
│   ├── FavoritesPage.jsx
│   ├── Home.jsx
│   ├── MealPlannerPage.jsx
│   ├── NotFound.jsx
│   └── RecipesPage.jsx
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

## Main Routes

| Route           | Purpose                            |
| --------------- | ---------------------------------- |
| `/`             | Home page and cooking tip          |
| `/recipes`      | Browse, search, and filter recipes |
| `/recipes/:id`  | View individual recipe details     |
| `/meal-planner` | Manage the seven-day meal plan     |
| `/favorites`    | View saved favourite recipes       |
| `*`             | Display the not-found page         |

## State Management

FlavorFlow uses React Hooks and the Context API to manage application state.

`useState` manages local state including recipe search queries, filter selections, loading and error states, recipe data, and meal-planning interactions.

`useEffect` is used for recipe loading and for synchronising persistent application data with `localStorage`.

`FavoritesContext` provides shared favourite state across the application and avoids unnecessary prop drilling between unrelated pages.

The meal planner uses object-based state containing breakfast, lunch, and dinner values for each day. Both favourites and meal-planning data are persisted with `localStorage`.

## Reusable Components

The application follows a component-based architecture to promote reusability and separation of responsibilities.

Examples include:

* **RecipeCard** – Reusable recipe presentation and favourite interaction.
* **RecipeList** – Reusable rendering of recipe collections.
* **RecipeFilter** – Centralised recipe filtering controls.
* **SearchBar** – Reusable search input.
* **Button** – Shared interactive button component.
* **Card** – Shared content container.
* **Loading** – Consistent loading-state presentation.
* **Modal** – Reusable modal interface.
* **AudioPlayer** – Reusable audio playback component.
* **VideoPlayer** – Reusable video playback component.

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start the development server

```bash
npm run dev
```

> This project uses Vite, so `npm run dev` is used to start the development server.

### 3. Run ESLint

```bash
npm run lint
```

### 4. Create a production build

```bash
npm run build
```

### 5. Preview the production build

```bash
npm run preview
```

## Screenshots

Screenshots demonstrating the application's main features and responsive design will be added to the project.

### Home Page

`docs/screenshots/home.png`

### Recipes and Filters

`docs/screenshots/recipes-filter.png`

### Recipe Detail and Video

`docs/screenshots/recipe-detail.png`

### Weekly Meal Planner

`docs/screenshots/meal-planner.png`

### Favourites

`docs/screenshots/favorites.png`

### Mobile Responsive View

`docs/screenshots/mobile.png`

## Future Enhancements

Potential future improvements include user accounts, cloud-based recipe storage, nutritional information, personalised meal recommendations, recipe sharing, additional recipe categories, and integration with external recipe APIs.
