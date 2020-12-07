import React, { useState, useEffect } from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { addUser, editUser,getAllContacts } from "../../JS/Actions/contactAction";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const AddEdit = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
  });
  const contactReducer = useSelector((state) => state.contactsReducer.userr);
  const edit = useSelector((state) => state.editReducer.edit);

  useEffect(() => {
    if (edit) {
      setUser(contactReducer);
    } else {
      setUser({
        name: "",
        email: "",
        phone: "",
        gender: "",
      });
    }
  }, [edit, contactReducer]);

  const handlechange = (e) => {
    e.preventDefault();
      setUser({ ...user, [e.target.name]: e.target.value });
    
  };
  const handleClick = () => {
    if (edit) {
      dispatch(editUser(contactReducer._id, user));
     
    } else {
      dispatch(addUser(user));
    }
  };

  return (
    <div style={{ marginBottom: "10px" }}>
      <Segment inverted>
        <Form inverted>
          <Form.Field>
            <label>Name</label>
            <input
              value={user.name}
              placeholder="Name"
              name="name"
              onChange={handlechange}
            />
          </Form.Field>
          <Form.Field>
            <label>Email</label>
            <input
              value={user.email}
              placeholder="Email"
              name="email"
              onChange={handlechange}
            />
          </Form.Field>
          <Form.Field>
            <label>Phone</label>
            <input
              value={user.phone}
              placeholder="Phone"
              name="phone"
              onChange={handlechange}
            />
          </Form.Field>

          <Link to="/">
            <Button type="submit" inverted color="green" onClick={handleClick}>
              {edit ? "Save Changes" : "Add user"}
            </Button>
          </Link>
        </Form>
      </Segment>
    </div>
  );
};

export default AddEdit;
