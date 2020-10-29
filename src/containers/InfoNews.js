import { connect } from "react-redux";
import NewsContainer from "../components/NewsContainer";

const mapStateToProps = (state) => ({
  news: state.news,
  hasError: state.requestingError,
  isLoading: state.requestingNews
});

export default connect(mapStateToProps)(NewsContainer);
