const express = require(`express`);
const router = express.Router();
const path = require(`path`);

// TODO: Part Two

// bridge between the incoming HTTP request and the outgoing HTTP response
// router.use((req, res, next) => {
//     console.log("User Reqested Time: ", Date.now());
//     next()
// })

// to get static files from directory?
router.use(express.static(`318SBA`))

// TODO: Part Three



const image = path.join()