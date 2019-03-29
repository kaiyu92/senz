import { connect } from "react-redux";
import { attemptLogin } from "../actions/userActions";
import LoginForm from "./LoginForm";

const mapStateToProps = (state) => {
	return {
		isLoggedIn: state.user.isLoggedIn,
		loginError: state.user.error,
	};
};

const mapDispatchToProps = (dispatch) => ({
	attemptLogin(identifier, password) {
		dispatch(attemptLogin(identifier, password));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);