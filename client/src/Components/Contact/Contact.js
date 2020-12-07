import React from "react";
import { Button, Card, Image } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { deleteUser } from "../../JS/Actions/contactAction";
import { Link } from "react-router-dom";
import { toggleTrue } from "../../JS/Actions/editAction";
import {  getUser} from "../../JS/Actions/contactAction";


const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  return (
    <Card>
      <Card.Content>
        <Image
          floated="right"
          size="mini"
          src='https://react.semantic-ui.com/images/avatar/large/jenny.jpg'
        />
        <Card.Header>{contact.name}</Card.Header>
        <Card.Meta> {contact.email}</Card.Meta>
        <Card.Description>
          <strong>{contact.phone}</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Link to={`/edit/${contact._id}`}>
            <Button
              inverted
              color="blue"
              onClick={() => {
                dispatch(getUser(contact._id));
                dispatch(toggleTrue());
              }}
            >
              Edit
            </Button>
          </Link>
          <Button
            inverted
            color="red"
            onClick={() => dispatch(deleteUser(contact._id))}
          >
            Delete
          </Button>
        </div>
      </Card.Content>
    </Card>
  ) 
};

export default Contact;
