import React from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./views/Home";
import NewPage from "./views/New";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const App: React.FC = () => {
  const theme = {
    primary: "#322153",
    secondary: "#6C63FF",
    background: "#F0F0F5",
    text: "#6C6C80",
    white: "#FFF",
  };

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/new">
            <NewPage />
          </Route>
        </Switch>
      </BrowserRouter>
      <ToastContainer />
    </ThemeProvider>
  );
};

export default App;
