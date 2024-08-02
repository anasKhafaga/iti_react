import { useState } from "react"
import Layout from "./components/Layout"
import Cart from "./pages/Cart"
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import { Route, BrowserRouter, Switch, useLocation, Redirect } from "react-router-dom" 
import { AppContext, User } from "./contexts/AppContext"
import { LoginForm } from "./components/LoginForm"

function App() {

  const [user, setUser] = useState<User | null | boolean>(false);
  
  const { pathname, state } = useLocation<{from: string}>();  
  
  if(pathname !== '/login' && !Boolean(user)) {
    return <Redirect to={{ pathname: '/login', state: {from: pathname} }} />
  } else if(pathname === '/login' && Boolean(user)) {
    return <Redirect to={{ pathname: state?.from ?? '/' }} />
  }
  
  return (
    <AppContext.Provider value={{ user, setUser }}>
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cart" component={Cart} />
          <Route path="/profile" component={Profile} />
          <Route path="/login" component={LoginForm} />
        </Switch>
      </Layout>
    </AppContext.Provider>
  )
}

export default () => (  
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
