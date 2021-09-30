import { ChakraProvider } from "@chakra-ui/react";
import * as React from "react";
import * as ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
// import Hello from "./Hello";
import theme from "./theme/theme";
import { Router } from "./router/Router";
import { Route, Switch } from "react-router";
import { Login } from "./components/pages/Login";
import { Home } from "./components/pages/Home";

ReactDOM.render(
  <React.StrictMode>
    {/* <Hello /> */}
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        {/* <Button colorScheme="teal">ボタン</Button> */} 
        {/* <p>ド外道</p> */}
        <Router />
        {/* <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
      </Switch> */}
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("app")
);
