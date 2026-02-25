# Experiment 4: React State Management

## Learning Outcomes
1. Understand different approaches to state management in React
2. Implement local state using useState hook
3. Manage global state with React Context API
4. Set up and use Redux for complex state management
5. Compare the benefits and use cases of different state management solutions
6. Create reducers and actions for Redux store
7. Implement state persistence and sharing across components

## About This Experiment
This experiment explores various state management techniques in React applications:
- **Local State**: Using React's useState hook for component-level state
- **Global Context**: Implementing React Context API for app-wide state sharing
- **Redux**: Setting up Redux with reducers, actions, and store for complex state logic

The app includes counter components demonstrating each approach, allowing comparison of implementation and usage patterns.

## Technologies Used
- React (useState, Context API)
- Redux (react-redux, redux)
- Vite (build tool)
- ESLint (code linting)

## Getting Started
1. Install dependencies: `npm install`
2. Start the development server: `npm run dev`
3. Open your browser to the provided URL

## Project Structure
- `src/components/` - Counter components for different state management approaches
  - `CounterLocalState.jsx` - Local state with useState
  - `CounterGlobalContextParent.jsx` - Global state with Context API
  - `CounterGlobalReduxParent.jsx` - Global state with Redux
- `src/context/` - Context API implementation
- `src/Store/` - Redux store, reducer, and actions
  - `Store.jsx` - Redux store configuration
  - `CounterReducer.jsx` - Counter reducer logic
