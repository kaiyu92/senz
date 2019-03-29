import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { attemptRegister, resetSignUp } from "../actions/userActions";
import RegisterForm from "./RegisterForm";

const mapStateToProps = (state) => {
	return {
		successMsg: state.user.signupInfo.msg,
		regError: state.user.signupInfo.error,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		actions: bindActionCreators({ }, dispatch),
		attemptRegister: (user, password, email, firstName, lastName) => {
			dispatch(attemptRegister(user, password, email, firstName, lastName));
		},
		resetSignUp: () => dispatch(resetSignUp()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);