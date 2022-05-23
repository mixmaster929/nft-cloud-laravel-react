import axios from 'axios';
import React, { useReducer } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Login = () => {
    const { dispatch } = useAuth();
    const token = localStorage.getItem("token");
    const history = useHistory();

    // IF USER LOGIN
    if (token) history.push("/");

    const initialState = {
        email: undefined,
        password: undefined,
        success: null,
        error: null,
        isLoading: false
    }
    const loginReducer = (state, action) => {
        switch (action.type) {

            case "LOGIN_SINGLE_ACTION":
                return { ...state, [action.name]: action.value }

            case "LOGIN_MULTIPLE_ACTIONS":
                return { ...state, ...action.loginSuccess };

            default:
                return state;
        }
    }
    const [loginState, loginDispatch] = useReducer(loginReducer, initialState);
    const { email, password, success, error, isLoading } = loginState;

    // HANDLE LOGIN ACIONS & GET FORM VALUES
    const handleActions = (name, value) => {
        loginDispatch({
            type: "LOGIN_SINGLE_ACTION",
            name, value
        });
    }

    //MANUAL LOGIN
    const handleManualLogin = (e) => {

        e.preventDefault();
        handleActions("isLoading", true);

        if (token) {
            handleActions("isLoading", false);
            return handleActions("error", "User Already Logged in");
        }

        if (!email || !password) {
            handleActions("isLoading", false);
            return handleActions("error", "Fill Correctly! Don't Use Suggesition, Please type..");
        }

        axios.post(`${process.env.REACT_APP_BACKEND_API_URL}/user/login`, { email, password })
            .then(res => {
                loginDispatch({
                    type: "LOGIN_MULTIPLE_ACTIONS",
                    loginSuccess: { isLoading: false, success: "Login Successful", error: null }
                });

                dispatch({
                    type: "LOGIN",
                    loginActions: { isLogin: true, token: res.data }
                });

                localStorage.setItem("token", res.data);
                e.target.reset();

                setTimeout(() => handleActions('success', null), 4000);

            })
            .catch(err => {
                loginDispatch({
                    type: "LOGIN_MULTIPLE_ACTIONS",
                    loginSuccess: { isLoading: false, success: null, error: err?.response?.data }
                });
            });

    }
    return (
        <div className="no-bottom no-top" id="content">
            <div id="top"></div>
			<section className="full-height relative no-top no-bottom vertical-center" data-bgimage="url(images/background/subheader-dark.jpg) top" data-stellar-background-ratio=".5">
                <div className="overlay-gradient t50">
					<div className="center-y relative">
						<div className="container">
							<div className="row align-items-center">
								<div className="col-lg-5 text-light wow fadeInRight" data-wow-delay=".5s">
                                    <div className="spacer-10"></div>
                                    <h1>Gaming NFTs Marketplace</h1>
                                    <p className="lead">Discover, collect, and sell exclusive NFTs, straight from the world of gaming</p>
                                </div>
								<div className="col-lg-4 offset-lg-2 wow fadeIn" data-wow-delay=".5s">
									<div className="box-rounded padding40" data-bgcolor="#21273e">
										<h3 className="mb10">Admin Login</h3>
										<form name="contactForm" id='contact_form' className="form-border" method="post" action='blank.php'>

                                            <div className="field-set">
                                                <input type='text' name='email' id='email' className="form-control" placeholder="username" />
                                            </div>
											
											 <div className="field-set">
                                                <input type='password' name='password' id='password' className="form-control" placeholder="password" />
                                            </div>
											
											<div className="field-set">
												<input type='submit' id='send_message' value='Submit' className="btn btn-main btn-fullwidth color-2" />
											</div>
											
											<div className="clearfix"></div>
											
											<div className="spacer-single"></div>
                                        </form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>		
        </div>
    );
};

export default Login;