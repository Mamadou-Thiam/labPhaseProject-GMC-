const router = require("express").Router();
const candidature = require("../controllers/controller");
const user=require("../controllers/userController");
// route du register
router.post("/register", user.signup)
// route du login
router.post("/login", user.auth)
// Crud
router.post("/newCandidature", candidature.createCandidature);
router.get("/", candidature.allCandidature);
router.get("/show/:id", candidature.viewCandidature);
router.put("/update/:id", candidature.updateCandidature);
router.delete("/delete/:id", candidature.removeCandidature);

module.exports = router;
