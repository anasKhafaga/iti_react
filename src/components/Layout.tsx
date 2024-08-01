import { Outlet } from "react-router-dom"
import Header from "./Header"

const Layout = () => {
  return (
    <div className="iti-flex iti-flex-col iti-h-[100vh]">
      <Header />
      <main className="iti-w-full iti-px-8 iti-py-10 iti-bg-prism-pattern iti-flex-1">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout