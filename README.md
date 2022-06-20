# MERN Practice

## Start

There are three `package.json` files in this project.

- One at the project root directory. Only for `concurrently` package.
- One at the `./server` directory. Includes `express`, `typescript` and `mongoose` packages.
- One at the `./client` directory. Created by `vite`, just need to install the packages.

```sh
# In project root directory

# Install project root packages
pnpm install

# Install server side packages
cd ./server && pnpm install

# Install client side packages
cd ./client && pnpm install
```

## Run Dev Server

There are two dev servers to run in this project:

- Client side server with `vite`
- Server side server with `nodemon`

```sh
# In project root directory

# Run on separate terminals
pnpm dev:frontend
pnpm dev:backend

# or

# Run on same terminal concurrently
pnpm dev
```

> **Note**  
> I recommend running frontend and backend servers on different terminals. Run every things concurrently on one single terminal would make it difficult to read. The terminal would outputs too many information at the same time.

### [NOTE](./NOTE.md)
