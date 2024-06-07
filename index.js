const express = require(`express`);
const router = express.Router();
const path = require(`path`);

// TODO: Part Two

// bridge between the incoming HTTP request and the outgoing HTTP response
router.use((req, res, next) => {
    console.log("User Reqested Time: ", Date.now());
    next()
})

// TODO: Part Three



const image = path.join()