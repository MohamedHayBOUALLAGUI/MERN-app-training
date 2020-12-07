const Contact = require("../models/Contact");

  //Callback function of posting one user by id
exports.postContact = async (req, res) => {
    try {
      const newContact = new Contact({ ...req.body });
      if (!newContact.email&&!newContact.name) {
        res
          .status(400)
          .send({ message: "Please enter an email and a name.They are required!" });
        return;
      }
      if (!newContact.email) {
        res
          .status(400)
          .send({ message: "Please enter an email.It is required!" });
        return;
      } if (!newContact.name) {
        res.status(400).send({ message: "Please enter a name.It is required! " });
        return;
      }
     
        const user=await Contact.findOne({email: newContact.email});
        if (user) {
          res
            .status(400)
            .send({ message: "User is already exist!" });
          return;
        }
      const response = await newContact.save();
      res.send({ response, message: "user is saved!" });
    } catch (error) {
        
      res.status(500).send({ message: "can not save it" });
    }
  };
//Callback function of getting all users
  exports.getAllContacts=async (req, res) => {
    try {
      const response = await Contact.find();
      res
        .status(200)
        .send({ response, message: "getting contacts successfully" });
    } catch (error) {
      res.status(400).send({ message: "can not get contacts" });
    }
  };

  //Callback function of getting one user by id

  exports.getOneUser=async (req, res) => {
    try {
      const response = await Contact.findOne({ _id: req.params.id });
      res.status(200).send({ response, message: "getting contact successfully" });
    } catch (error) {
      console.log(error);
      res.status(400).send({ message: "there is no contact with this id" });
    }
  };

  //Callback function of deleting one user by id


  exports.deleteContact=async (req, res) => {
    try {
      const response = await Contact.deleteOne({ _id: req.params.id });
      response.n === 1
        ? res.send({ response, message: " contact deleted successfully" })
        : res.send({ response, message: " There is no user with this id" });
    } catch (error) {
      console.log(error);
      res.status(400).send({ message: "Contact not exist" });
    }
  };

    //Callback function of updating one user by id

  exports.updateContact=  async (req, res) => {
    try {
      const response = await Contact.updateOne(
        { _id: req.params.id },
        { $set: { ...req.body } }
      );
      response.nModified===1
        ? res
            .status(200)
            .send({ response, message: " contact is successfully updated " })
        : res
            .status(200)
            .send({ response, message: " Contact is already updated"});
    } catch (error) {
      console.log(error);
      res.status(400).send({ message: "Contact is  not exist" });
    }
  }