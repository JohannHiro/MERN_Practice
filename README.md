# MERN Practice

- Backend
  - Express
    - Routes
    - Models
    - Controllers
      - CRUD
  - MongoDB + Mongoose
  - dotenv
  - Typescript
    - tsconfig
    - tsc -w
- Frontend
  - React
  - Vite
    - Proxy in Vite
  - Typescript
  - MUI
    > **Note**  
    > Try ChakraUI, TaiwindCSS or Bootstrap next time
- Other Tools
  - pnpm scripts (In `package.json`)
  - pnpm exec to execute package that installed locally
  - concurrently
  - nodemon
  - Postman

## Backend

### Express

- Project Structure

### MongoDB Atlas and Mongoose

- MongoDB Atlas works really like Firebase (Firestore)
- Mongoose has type system out of the box

## Typescript

- `tsc` command would ignore tsconfig file, need to use `tsc -w` instead
  - `tsc -w` would recompile every files in src directory every time we save new changes
- tsconfig
  1. Set `server/src` directory as my `rootDir` in tsconfig file
  2. Set `server/dist` directory as my `outDir` in tsconfig file
  3. `tsc` would automatically compile every files in src directory into javascript file and put them in dist directory with the same structure in src directory
- `@types/*` packages give us types and interfaces for famous frameworks or libraries
  > **Example**  
  > `@types/express` package for **Express**  
  > `@types/react` package for **React**

## Frontend

### MUI

- `TextField`
- `AppBar`
- `Grid` layout system
  - `item` and `container` properties can coexist
  - `component` property can determine which HTML tag `Grid` component will compile to (e.g: `form`, `div`, etc)
    > **Note**  
    > `Box` component has `component` tag too
