# MOVIE API

## Installation

- Create a `.env` file based off the `.env.example` provided in the project, then updated it with your mongodb connection string
- Install all the dependencies by running either `yarn` or `npm i` if you don't have yarn'. - *yarn is the project package manager by default*.
- Run the program using these commands:

  - `yarn dev` or `npm run dev`: This will spin up a development server (using `nodemon`) which automatically refreshes the server if any change was made in the program. It's for development purposes only.
  - `yarn start` or `npm start`: This will start the server using `node` which is intented for production mode.

## Dependencies

- `Express`: It's the MOST important dependency used in the preject, It helped set up the routes used in the program.
- `Mongoose`: It's used to store data coming in from the routes.
- `Cors`: It's used to allow user's origins the access to the program.
- `Dotenv`: Enables the program to add and use the enviroment variables.
- `Morgan`: Shows the various requests and responses made in the program.
- `Nodemon`: Automatically refreshes the server once a change is made in the program.

## Routes

The program runs on port `5000` by default if there's no PORT environment variable.

> GET `http://localhost:5000/`

```json
 {
  "message": "Hello from Movie API",
  "data": null,
  "status": true
}
```

The full routes are shown here [https://documenter.getpostman.com/view/18481947/2s93RNyudn](https://documenter.getpostman.com/view/18481947/2s93RNyudn)