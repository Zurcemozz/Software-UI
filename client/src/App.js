import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import Cart from './pages/Cart'
import Home from './pages/Home'
import Login from './pages/Login'
import Product from './pages/Product'
import ProductList from './pages/ProductList'
import Register from './pages/Register'
function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route path="/products" component={ProductList} />
          <Route path="/product" component={Product} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/cart" component={Cart} />
        </div>
      </Switch>
    </Router>
  )
}

export default App
