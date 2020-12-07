const express = require("express");
const router = express.Router();
const controllers=require('../controllers/contact.controllers')

//post contact
//get all contacts
//get contact by id
//delete contact by id
//update a contact by id


//@Method POST
//@desc post a contact
//@path : http://localhost:9000/api/contact/
//Params Body

router.post("/", controllers.postContact);

//@Method GET
//@desc get all contacts
//@path : http://localhost:9000/api/contact/

router.get("/",controllers.getAllContacts);

//@Method GET
//@desc get one contact by id
//@path : http://localhost:9000/api/contact/:id
//Params id

router.get("/:id",controllers.getOneUser);

//@Method DELETE
//@desc delete one contact by id
//@path : http://localhost:9000/api/contact/:id
//Params id

router.delete("/:id", controllers.deleteContact);

//@Method PUT
//@desc update one contact by id
//@path : http://localhost:9000/api/contact/:id
//Params id / body

router.put("/:id",controllers.updateContact);

module.exports = router;
