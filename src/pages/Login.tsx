import { Dispatch } from "@reduxjs/toolkit";
import { connect } from "react-redux";
import { login, LoginState } from "../states/login.slice";
import { RootState } from "../states/store";

export const Login = ({}) => {
  return <div>Login</div>;
};

const mapStateToProps = (state: RootState) => {
  return {
    isLogged: state.login.isLogged,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    login: (payload: LoginState) => dispatch(login(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
