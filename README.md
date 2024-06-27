# Personal Website

This is the repository for my personal website. The website is built using TypeScript and Webpack, and it's deployed using GitHub Pages.

## Getting Started

Follow these instructions to set up and run the project on your local machine.

### Prerequisites

- Node.js (version 16 or higher)
- npm (Node package manager, comes with Node.js)

### Installation

1. **Clone the repository**:

   ```sh
   git clone https://github.com/IgorDuino/igorduinoru.git
   cd igorduinoru
   ```

2. **Install dependencies**:

   ```sh
   npm install
   ```

### Building the Project

To build the project, run:

```sh
npm run build
```

This will compile the TypeScript files and bundle them into the `dist` directory.

### Running the Project Locally

To serve the project locally, you can use a simple static server like `http-server`. First, install it globally if you haven't already:

```sh
npm install -g http-server
```

Then start the server:

```sh
http-server
```

You can now open your browser and navigate to `http://localhost:8080` to see the website.

Or you can use docker & docker compose plugin to run it with

```sh
docker compose up -d --build
```

And navigate to `http://localhost:3248` to see the website.


### Deployment

The project is configured to be deployed to GitHub Pages. The GitHub Actions workflow in this repository will automatically build and deploy the project whenever changes are pushed to the `main` branch.
