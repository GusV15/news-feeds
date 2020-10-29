import { connect } from "react-redux";
import { getNews } from "../actions/index";
import NavBar from "../components/NavBar";

const mapDispatchToProps = (dispatch) => ({
  onGet: (category) => dispatch(getNews(category))
});

export default connect(null, mapDispatchToProps)(NavBar);
