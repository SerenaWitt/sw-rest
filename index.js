import express from "express"; //importing a module
const app = express(); //creating an expres app
const { PORT = 3000 } = process.env; //try to get to the PORT from environment variable else use 3000
import bodyParser from "body-parser";
import cors from "cors";
import data from "./data.js";

app.use(bodyParser.json()).use(cors())

app.get("/", (request, response) =>
    response.send("Hello World!")
);

app.get("/api/v1/users", (req, res) => {
        res.json(data.users);
    }
);

app.post("/api/v1/users", (req, res) => {
        data.users.push(users);
        res.status(201).json(user); // 201 == resource created
    }
)


app.listen(PORT, () =>
    console.log(`Hello World, I'm listening http://localhost:${PORT}/api/v1/users`)
);

export default app; // for testing purposes only