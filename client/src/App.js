import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import AddEdit from "./Components/AddEdit/AddEdit";
import ContactList from "./Components/ContactList/ContactList";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          marginLeft: "2%",
          marginRight: "2%",
          marginBottom:'5%',
          
        }}
      >
        <Switch>
          <Route exact path="/" component={ContactList} />

          <Route path={["/add", "/edit/:id"]} component={AddEdit} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
