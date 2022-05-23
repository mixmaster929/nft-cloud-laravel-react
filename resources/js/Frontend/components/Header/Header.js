import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
// import logo from '../../assets/images/logo-light.png';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { state, dispatch } = useAuth();
    const [login, setLogin] = useState('');

    useEffect(() => {
        setLogin(localStorage.getItem("token"));
    }, [state.isLogin]);

    return (
      <div>
        <header className="transparent">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="de-flex sm-pt10">
                            <div className="de-flex-col">
                                <div className="de-flex-col">
                                    <div id="logo">
                                      <NavLink to="/"><img alt="" src= "" /></NavLink>
                                    </div>
                                </div>
                                {/* <form action="blank.php" className="row form-dark" id="form_quick_search" method="post" name="form_quick_search">
                                    <div className="col text-center">
                                        <input id="quick_search" className="form-control" placeholder="Search items, collections, and creators" type="text" /> <a href="#" id="btn-submit"><i className="fa fa-search bg-color-secondary"></i></a>
                                        <div className="clearfix"></div>
                                    </div>
                                </form> */}
                                <div className="de-flex-col">
                                  <input id="quick_search" className="xs-hide" name="quick_search" placeholder="Search items, collections, and creators" type="text" />
                                </div>
                            </div>
                            <div className="de-flex-col header-col-mid">
                                <ul id="mainmenu">
                                    <li>
                                     <NavLink to="/explorer">Explore</NavLink>
                                    </li>
                                    <li>
                                     <NavLink to="/create">Create</NavLink>
                                    </li>
                                    <li>
                                     <NavLink to="/activity">Activity</NavLink>
                                    </li>
                                </ul>
                                <div className="menu_side_area">
                                  <a href="/" className="btn-main btn-wallet"><i className="icon_wallet_alt"></i><span>Connect Wallet</span></a>
                                  <span id="menu-btn"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
      </div>
    );
};

export default Header;