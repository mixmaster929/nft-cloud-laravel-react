import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import './App.css';
// import DashBoard from './components/Dashboard/DashBoard';
// import NotFount1 from '../Frontend/components'
import NotFound from '../Frontend/components/NotFound/NotFound';
import Home from '../Frontend/components/Home/Home';
import Profile from '../Frontend/components/Profile/Profile';
import Activity from '../Frontend/components/Activity/Activity';
import Create from '../Frontend/components/Create/Create';
import SingleCollection from '../Frontend/components/Create/SingleCollection';
import MultipleCollection from '../Frontend/components/Create/MultipleCollection';
import Header from '../Frontend/components/Header/Header';
import Footer from '../Frontend/components/Footer/Footer';
import Explorer from '../Frontend/components/Explorer/Explorer';
// import VerifyEmail from './components/VerifyEmail/VerifyEmail';
import Login from '../Frontend/components/Login/Login';
// import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AuthContext from '../Frontend/context/AuthContext/AuthContext';
// import UserPanel from './components/UserPanel/UserPanel';

function App() {
    return (
        <AuthContext>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <Header />
                        <Home />
                        <Footer />
                    </Route>
                    <Route exact path="/profile">
                        <Header />
                        <Profile />
                        <Footer />
                    </Route>
                    <Route exact path="/explorer">
                        <Header />
                        <Explorer />
                        <Footer />
                    </Route>
                    <Route exact path="/activity">
                        <Header />
                        <Activity />
                        <Footer />
                    </Route>
                    <Route exact path="/create">
                        <Header />
                        <Create />
                        <Footer />
                    </Route>
                    <Route exact path="/create/single">
                        <Header />
                        <SingleCollection />
                        <Footer />
                    </Route>
                    <Route exact path="/create/multiple">
                        <Header />
                        <MultipleCollection />
                        <Footer />
                    </Route>
                    <Route exact path="/admin">
                        <Login />
                        <Footer />
                    </Route>
                    <Route path="*">
                        <NotFound />
                    </Route>
                </Switch>
            </BrowserRouter>
        </AuthContext>
    );
}

export default App;