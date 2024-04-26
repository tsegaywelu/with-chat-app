const router = require("express").Router();
const Newsadder = require("../Controllers/Uploadnews");
const userauthentication = require("../Controllers/auth");
//const {sendConfirmationEmailHandler}=require('..//Controllers/Conifiramtion')

router.post("/addnews", userauthentication, Newsadder.addnews);
router.post("/addevent", userauthentication, Newsadder.addevent);
router.get("/getnews", Newsadder.getnews);
router.post("/registeruser", Newsadder.Registeruser);
router.post("/loginuser", Newsadder.loguser);
router.post("/checktoken", Newsadder.checktoken);
router.get('/getevents',Newsadder.getevent)
router.post('/recivemessage',Newsadder.acceptmessage)


module.exports = router;
