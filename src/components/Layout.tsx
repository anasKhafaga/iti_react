import React from "react"
import Header from "./Header"

const Layout: React.FC<React.ComponentProps<'div'>> = ({ children }) => {

  return (
    <div className="iti-flex iti-flex-col iti-h-[100vh]">
      <Header />
      <main className="iti-w-full iti-px-8 iti-py-10 iti-bg-prism-pattern iti-flex-1">
        {children}
      </main>
    </div>
  )
}

export default Layout