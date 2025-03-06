# GFT | Inditex | Challenge

## Overview

This project is a web application built with React and Vite. It allows users to browse, search, and mark their favorite Dragon Ball characters.

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js: >= 20
- npm: >= 10

### Clone this repository

```bash
git clone https://github.com/sonpablo/gft-inditex-challenge.git
```

### Install dependencies

```bash
cd gft-inditex-challenge
npm install
```

### Run the development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) with your browser to see the result.

## Scripts

The following scripts are available in the project:

Starts the development server.

```bash
npm run dev 
```

Builds the application.

```bash
npm run build
```
Formats the code using Prettier.

```bash
npm run format:write 
```

Runs ESLint to check for code issues.

```bash
npm run lint
```

Previews the production build.

```bash
npm run preview 
````

Runs the test suite.

```bash
npm run test
```

Runs tests with coverage report.

```bash
npm run test:coverage
````

Previews the coverage report.

```bash
npm run test:preview:coverage
````

Previews the test results in an HTML report.

```bash
npm run test:preview:html
````

## Project Architecture

The project follows a modular structure to maintain scalability and maintainability.

### Folder structure

**src**

    ├── ┣ assets                 # Static assets (images, icons, etc.)    
    ├── ┣ components             # Reusable UI components
    ├── ┃ ┣ app-header           # Header component
    ├── ┃ ┣ character            # Single character component
    ├── ┃ ┣ characters           # Characters list component
    ├── ┃ ┣ favorites-badge      # Badge for favorite characters
    ├── ┣ features               # Feature-based modules
    ├── ┃ ┣ character-details    # Character details feature
    ├── ┃ ┣ favorites            # Favorites feature
    ├── ┃ ┣ list-characters      # Character listing feature
    ├── ┃ ┣ mark-as-favorite     # Favorite functionality
    ├── ┣ hooks                  # Custom React hooks
    ├── ┣ lib                    # Utility functions and API fetcher
    ├── ┣ mocks                  # Mock API handlers for testing
    ├── ┣ models                 # Data models and types
    ├── ┣ providers              # Context and state providers
    ├── ┣ test-utils             # Utilities for testing
    ├── ┣ ui                     # UI components (buttons, inputs, etc.)
    ├── ┣ App.tsx                # Main application component
    ├── ┣ main.tsx               # Application entry point
    ├── ┣ Routes.tsx             # App routing configuration
    ├── ┣ setupTests.ts          # Test setup file

## Technologies Used

- React - Frontend framework
- Vite - Build tool
- TypeScript - Typed JavaScript
- React Testing Library & Vitest - Testing
- React Query - Data fetching and caching
- Context API - State management
- CSS Modules - Scoped styles

## Testing

### Metrics
- 87.46 % Statements 621/710
- 92.64 % Branches 63/68
- 78.26 % Functions 36/46
- 87.46 % Lines 621/710