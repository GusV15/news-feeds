import React from "react";
import { Switch, Route } from "react-router-dom";
import NewsContainer from "./components/NewsContainer";
import Home from "./components/Home";
import NotFound from "./components/NotFound";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/categories/:id" component={NewsContainer} />
      <Route path="/search/:keyword" component={NewsContainer} />
      <Route>
        <NotFound messageError={"No existe la ruta ingresa"} />
      </Route>
    </Switch>
  );
};

export default Routes;
