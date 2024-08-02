import { useState } from "react"
import Layout from "./components/Layout"
import Cart from "./pages/Cart"
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import { Route, BrowserRouter, Switch, useLocation, Redirect } from "react-router-dom" 
import { AppContext } from "./contexts/AppContext"
import type { User } from "./types/user"
import { LoginForm } from "./pages/LoginForm"
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
})

function App() {

  const [user, setUser] = useState<User | null>(null);
  
  const { pathname, state } = useLocation<{from: string}>();  
  
  if(pathname !== '/login' && !Boolean(user)) {
    return <Redirect to={{ pathname: '/login', state: {from: pathname} }} />
  } else if(pathname === '/login' && Boolean(user)) {
    return <Redirect to={{ pathname: state?.from ?? '/' }} />
  }
  
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  )
}

export default () => (  
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
