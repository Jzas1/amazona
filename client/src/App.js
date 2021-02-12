
import './index.css'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import ProductScreen from './screens/ProductScreen';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import { useDispatch, useSelector } from 'react-redux';
import SigninScreen from './screens/SigninScreen';
import { signin, signout } from './actions/userActions';
import RegisterScreen from './screens/RegisterScreen';
import ShippingAdrdressScreen from './screens/ShippingAdrdressScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';


function App() {
  const cart = useSelector(state => state.cart)
  const { cartItems } = cart
  const userSignin = useSelector((state) => state.userSignin)
  const { userInfo } = userSignin
  const dispatch = useDispatch()

  const signoutHandler = () => {
    dispatch(signout())
  }

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <Link className="brand" to="/">amazona</Link>
          </div>
          <div>
            <Link to="/cart">Cart
            {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
            </Link>
            {
              userInfo ? (
                <div className="dropdown">
                  <Link to="#">
                    {userInfo.name} <i className="fa fa-caret-down" />
                  </Link>
                  <ul className="dropdown-content">
                    <Link to="#signout" onClick={signoutHandler}>
                      Sign out
                    </Link>
                  </ul>
                </div>
              ) : (

                  <Link to="/signin">Sign In </Link>


                )
            }
          </div>
        </header>
        <main>
          <Route path="/cart/:id?" component={CartScreen} />
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/" component={HomeScreen} exact />
          <Route path="/shipping" component={ShippingAdrdressScreen} />
          <Route path="/signin" component={SigninScreen} exact />
          <Route path="/register" component={RegisterScreen} exact />
          <Route path="/payment" component={PaymentMethodScreen} exact />
          <Route path="/placeorder" component={PlaceOrderScreen} exact />
          <Route path="/order/:id" component={OrderScreen}></Route>


        </main>
        <footer className="row center">All right reserved</footer>
      </div>

    </BrowserRouter>

  );
}

export default App;
