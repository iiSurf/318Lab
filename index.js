// TODO: Part Two

router.use((req, res, next) => {
    console.log("User Reqested Time: ", Date.now());
    next()
})

// TODO: Part Three

