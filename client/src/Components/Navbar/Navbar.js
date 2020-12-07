import React from "react";
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import { Layout, Header, Navigation,Drawer,Content } from 'react-mdl'
import { Link } from 'react-router-dom'
import {useDispatch} from 'react-redux'
  import { toggleFalse } from "../../JS/Actions/editAction";

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <div style={{height: '300px', position: 'relative'}}>
      <Layout fixedHeader >
        <Header
          title={
            <span>
              <span style={{ color: "#ddd" }}>MERN APP / </span>
              <strong>Contact users</strong>
            </span>
          }
        >
          <Navigation>
            <Link to='/'>Home</Link>
            <Link to='/add' onClick={()=> dispatch(toggleFalse())}>Add contact</Link>
            
          </Navigation>
        </Header>
        <Drawer title="Contact users">
          <Navigation>
          <Link to='/'>Home</Link>
            <Link to='/add'>Add contact</Link>
          </Navigation>
        </Drawer>
        <Content />
      </Layout>
    </div>
  );
};

export default Navbar;
