import React from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import Categories from "./components/Categories";
import Home from "./components/Home";
import Search from "./components/Search";
import NotFound from "./components/NotFound";

const Routes = ({ news }) => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      {/* <Route exact path="/categories/:id" component={Categories} /> */}
      <Route
        path="/categories/:id"
        render={(props) => {
          console.log(props);

          let newsFilter = news
            .map((data) =>
              data.category === "Diseño"
                ? { ...data, bayes_category_id: 6 }
                : data
            )
            .filter(
              (data) => String(data.bayes_category_id) === props.match.params.id
            );
            console.log(newsFilter);
            
          return <Categories news={newsFilter} />;
        }}
      />
      <Route exact path="/search/:keyword" component={Search} />
      <Route component={NotFound} />
    </Switch>
  );
};

const mapStateToProps = (state) => ({
  news: state.news,
  hasError: state.requestingError,
  isLoading: state.requestingNews
});

export default connect(mapStateToProps)(Routes);
