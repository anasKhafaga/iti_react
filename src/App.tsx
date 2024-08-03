import { useEffect, useState } from "react"
import Layout from "./components/Layout"
import cookie from 'js-cookie';
import Cart from "./pages/Cart"
import Home from "./pages/Home"
import Profile from "./pages/Profile"
import { Route, BrowserRouter, Switch, useLocation, Redirect } from "react-router-dom" 
import { AppContext } from "./contexts/AppContext"
import type { User } from "./types/user"
import { LoginForm } from "./pages/LoginForm"
import { QueryClientProvider, QueryClient, useMutation } from '@tanstack/react-query';
import { useAxios } from "./hooks/itiAxios";
import { ErrorBoundary } from 'react-error-boundary';
import Fallback from "./components/Fallback";
import axios from "axios";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
})

function App() {

  const [user, setUser] = useState<User | null>(null);
  
  const [token, setToken] = useState(cookie.get('token') ?? '');
  const [refreshToken, setRefreshToken] = useState(cookie.get('refreshToken') ?? '');

  const { itiAxios } = useAxios(token);
  
  // const { pathname, state } = useLocation<{from: string}>();  

  useEffect(() => {
    cookie.set('token', token)
  }, [ token ])

  useEffect(() => {
    cookie.set('refreshToken', refreshToken)
  }, [ refreshToken ])

  const refreshTokenMutation = useMutation({
    mutationKey: ['refreshToken'],
    mutationFn: async (localRefreshToken) => {
      return (await itiAxios.post('/refresh', {
        refreshToken: localRefreshToken
      })).data
    }
  })

  useEffect(() => {
    if(refreshTokenMutation.data) {
      setToken(refreshTokenMutation.data.token);
      setRefreshToken(refreshTokenMutation.data.refreshToken);
    }
  }, [refreshTokenMutation.data])
  
  // if(pathname !== '/login' && !Boolean(token)) {
  //   return <Redirect to={{ pathname: '/login', state: {from: pathname} }} />
  // } else if(pathname === '/login' && Boolean(token)) {
  //   return <Redirect to={{ pathname: state?.from ?? '/' }} />
  // }
  
  return (
    <ErrorBoundary fallbackRender={Fallback}>
      <AppContext.Provider value={{ user, setUser, token, setToken, itiAxios, refreshToken, setRefreshToken, forceTokenRefresh: refreshTokenMutation.mutate }}>
        <Layout>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/cart" component={Cart} />
            <Route path="/profile" component={Profile} />
            <Route path="/login" component={LoginForm} />
          </Switch>
        </Layout>
      </AppContext.Provider>
    </ErrorBoundary>
  )
}

export default () => (  
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </QueryClientProvider>
)
