# Node.js & MongoDB Note-Taking Application

A robust, server-side rendered note-taking and task management application built with Node.js, Express, and MongoDB. This project provides a full suite of CRUD (Create, Read, Update, Delete) functionalities for managing notes through a clean and intuitive web interface.

## ✨ Features

-   **📝 Full CRUD Operations:** Create, view, edit, and delete notes with dedicated routes and views.
    
-   **✅ Task Management:** Mark notes as "completed" to track your progress.
    
-   **🗄️ Persistent Storage:** Utilizes a MongoDB database to securely store and retrieve all note data.
    
-   **🖥️ Server-Side Rendering:** Uses the EJS templating engine to dynamically render HTML pages on the server.
    
-   **🎨 Styled with Static Assets:** Serves CSS and other static files from a `public` directory for a customized look and feel.
    
-   **🔐 Basic Login Flow:** Includes foundational routes for user login, ready to be expanded with full authentication logic.
    
-   **⚙️ Environment-Based Configuration:** Uses a `.env` file to manage sensitive information like database connection strings.
    

## 💻 Tech Stack

-   **Backend:**
    
    -   [Node.js](https://www.google.com/search?q=https://nodejs.org/ "null"): A JavaScript runtime environment.
        
    -   [Express.js](https://expressjs.com/ "null"): A fast, unopinionated, minimalist web framework for Node.js.
        
-   **Database:**
    
    -   [MongoDB](https://www.mongodb.com/ "null"): A NoSQL database for storing application data.
        
    -   [mongodb (npm package)](https://www.npmjs.com/package/mongodb "null"): The official MongoDB driver for Node.js.
        
-   **Templating Engine:**
    
    -   [EJS (Embedded JavaScript)](https://ejs.co/ "null"): A simple templating language that lets you generate HTML markup with plain JavaScript.
        
    -   [express-ejs-layouts](https://www.npmjs.com/package/express-ejs-layouts "null"): Layout support for EJS in Express.
        
-   **Environment Management:**
    
    -   [dotenv](https://www.npmjs.com/package/dotenv "null"): A zero-dependency module that loads environment variables from a `.env` file.
        

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

-   **Node.js & npm:** Make sure you have Node.js and npm installed. You can download them from [nodejs.org](https://www.google.com/search?q=https://nodejs.org/ "null").
    
-   **MongoDB:** You need a running MongoDB instance. This can be a local installation or a cloud-based service like [MongoDB Atlas](https://www.mongodb.com/cloud/atlas "null").
    

### Installation & Setup

1.  **Clone the repository:**
    
    ```
    git clone https://github.com/your-username/your-repository-name.git
    cd your-repository-name
    
    ```
    
2.  **Install dependencies:** Run the following command in the project's root directory to install all the required npm packages.
    
    ```
    npm install
    
    ```
    
3.  **Create an environment file:** Create a file named `.env` in the root of your project and add your MongoDB connection string. This is the URI that your application will use to connect to the database.
    
    **.env**
    
    ```
    MONGO_URI="mongodb://localhost:27017/yourDatabaseName"
    
    ```
    
    _(Replace the URI with your actual MongoDB connection string.)_
    
4.  **Start the server:** Run the following command to start the Express server.
    
    ```
    node app.js
    
    ```
    
    Or, if you have `nodemon` installed for development:
    
    ```
    nodemon app.js
    
    ```
    
5.  **Access the application:** Once the server is running, you will see the message `server running on port 3000` in your console. Open your web browser and navigate to `http://localhost:3000`.
    

## 🗺️ API Routes / Endpoints

The application exposes the following routes:

Method

Path

Description

`GET`

`/`

Renders the home page.

`GET`

`/login`

Renders the user login page.

`POST`

`/users/login`

Handles login form submission (redirects).

`GET`

`/notes`

Displays a list of all notes.

`GET`

`/notes/create`

Renders the form to create a new note.

`POST`

`/notes/create`

Submits and saves a new note.

`GET`

`/notes/:id`

Displays a single note by its ID.

`GET`

`/notes/:id/edit`

Renders the form to edit an existing note.

`POST`

`/notes/:id/edit`

Submits updates to an existing note.

`POST`

`/notes/:id/delete`

Deletes a specific note by its ID.

`POST`

`/notes/:id/done`

Marks a specific note as completed.
