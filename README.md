# Creating a Simple Node package
    - Go to the folder and run "npm init"
    - This will create a package.json file which contains:
        - Dependencies
            - Common Dependencies:
                - Express (Web Server)
                - Nodemon (Hot Reload - Refreshes the server when we save the changed file)
                - Morgan (HTTP request logger middleware)
            - Read when Required:
                - Passport (Authentication Middleware)
                - Mongoose (ORM for NoSQL)
                - Sequize (ORM for SQL)
        - Scripts:
            - dev: "nodemon server.js" (to run server with "npm run dev" on terminal)
        - Metadata

        "npm run dev" to run the server.

# Folder Structure (Everthing can be subdivied to folders related to work like (Authentication, Users, Profile etc) whatever the business usecase is)
    - Routes:
        - All the routes that are needed to be handled. 
    - Controllers:
        - Business logic of the routes.
    - Services:
        - Fetching things from DB. Usually seprated from a controller because multiple controllers can use then.
    - Models:
        - Data models for the database.
    - Middlewares:
        - All middlewares that we gonna use.
    - Root:
        server.js: Entry point to our application. We will start our server here.
        app.js: To create express server and add middlewares, routes etc to it.

# Creating a Simple Server (app.js and server.js):
    - run "npm i express" to install express server
    - create an app from express (app.js)
    - add middlewares (app.js)
        - if we add some middleware to express server. They would follow the sequence in which we have defined. (app.js)
    - add routes. (app.js)
    - bind to the port to listen to requests. (server.js)

# Define Routes:
    - All the routes in their respective files
    - Handle those with appropriate controllers

# Define Controllers:
    - Business logics for routes should be in here
    - Use services to get data from DB or external sources

# Define Services:
    - Fetching logic

# Define Middlewares:
    - Middleware like logger, authentication etc should be defined here and used all over the app.

# Common Errors:
    - Make sure to export the things you wanna use.

# Roadmap:
    1) Get handson with folder structure and how things work in node by setting up 2,3 projects and basic CRUD with dummy data. (1-2 hours)
    2) Play with routes, how middleware works, see common examples of middleware etc.
    3) Add SQL or NoSQL database and use ORM to manipulate data.
    4) Explore common third party libraries. 
