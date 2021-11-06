import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Menubar from './components/Menubar/Menubar';
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login/Login';
import AuthProvider from './contexts/AuthProvider';
import NotFound from './components/NotFound/NotFound';
import AddService from './components/AddService/AddService';
import Offerings from './components/Offerings/Offerings';
import Order from './components/Order/Order';
import MyOrder from './components/MyOrder/MyOrder';
import ManageAllOrder from './components/ManageAllOrders/ManageAllOrder';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Menubar></Menubar>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/myorder/:email">
              <MyOrder></MyOrder>
            </PrivateRoute>
            <PrivateRoute path="/manageAllOrders">
              <ManageAllOrder></ManageAllOrder>
            </PrivateRoute>
            <Route path="/about">
              <AboutUs></AboutUs>
            </Route>
            <PrivateRoute path="/order/:orderId">
              <Order></Order>
            </PrivateRoute>
            <Route path="/services">
              <Offerings></Offerings>
            </Route>
            <PrivateRoute path="/addService">
              <AddService></AddService>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
