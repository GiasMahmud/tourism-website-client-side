import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import NotFound from './NotFound/NotFound';
import AddService from './Pages/AddService/AddService';
import Footer from './Pages/Footer/Footer';
import Home from './Pages/Home/Home';
import ManageOrdar from './Pages/ManageOrdars/ManageOrdar';
import MyOrdars from './Pages/MyOrdars/MyOrdars';
import PlaceOrdar from './Pages/PlaceOrder/PlaceOrdar';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Header from './Pages/Shared/Header';
import Signup from './Pages/Signup/Signup';

function App() {
    return (
        <div className="App">
            <AuthProvider>
                <BrowserRouter>
                    <Header></Header>
                    <Switch>
                        <Route exact path='/'>
                            <Home></Home>
                        </Route>
                        <Route path='/home'>
                            <Home></Home>
                        </Route>
                        <PrivateRoute path='/placeorder/:serviceID'>
                            <PlaceOrdar></PlaceOrdar>
                        </PrivateRoute>
                        <PrivateRoute path='/myordars'>
                            <MyOrdars></MyOrdars>
                        </PrivateRoute>
                        <Route path='/signup'>
                            <Signup></Signup>
                        </Route>
                        <PrivateRoute path='/manageordars'>
                            <ManageOrdar></ManageOrdar>
                        </PrivateRoute>
                        <Route path='/addservice'>
                            <AddService></AddService>
                        </Route>
                        <Route path='*'>
                            <NotFound></NotFound>
                        </Route>
                    </Switch>
                    <Footer></Footer>
                </BrowserRouter>
            </AuthProvider>
        </div>
    );
}

export default App;