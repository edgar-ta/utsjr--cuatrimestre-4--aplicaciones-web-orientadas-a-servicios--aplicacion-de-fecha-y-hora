const router = require("express").Router();
const middleware = require("./middleware");

router.get(
    "/", 
    middleware.printDateAndTime, 
    middleware.printMessage, 
    (request, response) => response.render("index")
);
router.get(
    "/about", 
    middleware.printDateAndTime, 
    middleware.printMessage, 
    (request, response) => response.render("about")
);

module.exports = router;
