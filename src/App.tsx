import Layout from "components/Layout"
import Cart from "pages/Cart"
import Home from "pages/Home"
import Profile from "pages/Profile"
import { Route, BrowserRouter, Routes } from "react-router-dom" 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
