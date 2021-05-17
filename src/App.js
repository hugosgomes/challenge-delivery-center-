import React, { useState, useEffect } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import CardComponent from "./components/CardComponent";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "./App.scss";

const useStyles = makeStyles({
  flexible: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    width: "100%",
  },
});

function App() {
  const [users, setUsers] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setUsers(data);
  };

  return (
    <div className="App">
      <Header />
      <Container maxWidth="lg" className={classes.flexible}>
        {users.map((user) => (
          <CardComponent key={user.id} user={user} />
        ))}
      </Container>
      <Footer />
    </div>
  );
}

export default App;
