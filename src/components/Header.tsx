import React from "react"
import NavItem from "./NavItem"

const navItems = [
    {key: 1, label: "Home", href: "/"},
    {key: 1, label: "Cart", href: "/cart"},
    {key: 1, label: "Profile", href: "/profile"},
]

interface HeaderProps extends React.ComponentProps<'header'> {

}

export default ({...props}: HeaderProps) => {
  return (
    <header {...props}>
        <nav className="iti-bg-white iti-border-gray-200 iti-px-4 lg:iti-px-6 iti-py-2.5 dark:iti-bg-gray-800">
            <div className="iti-flex iti-align-middle iti-justify-between iti-items-center iti-mx-auto iti-max-w-screen-xl">
                <a href="#" className="iti-flex iti-items-center">
                    <span className="iti-self-center iti-text-xl iti-font-semibold iti-whitespace-nowrap dark:iti-text-white">E-Commerce</span>
                </a>
                <div className="iti-flex iti-justify-between iti-items-center lg:iti-flex lg:iti-w-auto lg:iti-order-1" id="mobile-menu-2">
                    <ul className="iti-flex iti-font-medium lg:iti-flex-row lg:iti-space-x-8 lg:iti-mt-0">
                        {navItems.map(item => (
                            <NavItem key={item.key} label={item.label} href={item.href} />
                        ))}
                    </ul>
                </div>
                <div className="iti-flex iti-items-center lg:iti-order-2">
                    <a href="#" className="iti-text-gray-800 dark:iti-text-white hover:iti-bg-gray-50 focus:iti-ring-4 focus:iti-ring-gray-300 iti-font-medium iti-rounded-lg iti-text-sm iti-px-4 lg:iti-px-5 iti-py-2 lg:iti-py-2.5 iti-mr-2 dark:hover:iti-bg-gray-700 focus:iti-outline-none dark:focus:iti-ring-gray-800">Log in</a>
                    <a href="#" className="iti-text-white iti-bg-blue-700 hover:iti-bg-blue-800 focus:iti-ring-4 focus:iti-ring-blue-300 iti-font-medium iti-rounded-lg iti-text-sm iti-px-4 lg:iti-px-5 iti-py-2 lg:iti-py-2.5 iti-mr-2 dark:iti-bg-blue-600 dark:hover:iti-bg-blue-700 focus:iti-outline-none dark:focus:iti-ring-blue-800">Get started</a>
                </div>
            </div>
        </nav>
    </header>
  )
}
