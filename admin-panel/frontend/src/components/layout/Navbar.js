import { connect } from "react-redux";
import { resetSelectedProjectState } from "../actions/projectActions";
import { attemptLogout } from "../actions/userActions"
import { bindActionCreators } from 'redux';
import NavbarDisplay from "./NavbarDisplay";

const mapStateToProps = (state) => {
  return {
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ }, dispatch),
    resetSelectedProjectState: () => dispatch(resetSelectedProjectState()),
    attemptLogout: () => dispatch(attemptLogout())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarDisplay);