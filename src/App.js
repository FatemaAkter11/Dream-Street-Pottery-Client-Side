import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home/Home/Home';
import Navigation from './shared/Navigation/Navigation';
import Footer from './shared/Footer/Footer';
import Login from './Login/Login/Login';
import Register from './Login/Register/Register';
import AuthProvider from './context/AuthProvider';
import Products from './pages/Home/Products/Products';
import Explore from './pages/Home/Explore/Explore';
import PrivateRoute from './Login/PrivateRoute/PrivateRoute';
import Purchase from './pages/Home/Purchase/Purchase';
// import AddProducts from './pages/Home/AddProducts/AddProducts';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navigation />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/products">
              <Products />
            </Route>
            <Route path="/explore">
              <Explore />
            </Route>
            <PrivateRoute path="/purchase/:productId">
              <Purchase />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            {/* <Route path="/addproducts">
            <AddProducts />
          </Route> */}
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
