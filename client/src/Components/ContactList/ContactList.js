import React, { useEffect } from "react";
import  {getAllContacts}  from "../../JS/Actions/contactAction";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "react-mdl";
import Contact from "../Contact/Contact";


const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contactsReducer.contacts);
  const loadContacts = useSelector((state) => state.contactsReducer.loadContacts);
  console.log(contacts,loadContacts);
  useEffect(() => {
    dispatch(getAllContacts())
  },[]);
  return loadContacts ? (
    <Spinner />
  ) : (
   
    <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          marginLeft: "2%",
          marginRight: "2%",
          marginBottom:'5%',
          
        }}
      >{contacts.map((el) =>   <Contact key={el._id} contact={el} />)
 }</div>
  );
};

export default ContactList;
