import React, { useContext } from "react"
import NavItem from "./NavItem"
import { AppContext } from "../contexts/AppContext"
import { Link } from "react-router-dom"

const navItems = [
    {key: 1, label: "Home", href: "/"},
    {key: 2, label: "Cart", href: "/cart"},
    {key: 3, label: "Profile", href: "/profile"},
]

interface HeaderProps extends React.ComponentProps<'header'> {

}

export default ({...props}: HeaderProps) => {

    const { user, setUser } = useContext(AppContext);

    const handleLogout = () => {
        setUser(null);
    }
    
    return (
        <header {...props}>
            <nav className="iti-bg-white iti-border-gray-200 iti-px-4 lg:iti-px-6 iti-py-2.5 dark:iti-bg-gray-800">
                <div className="iti-flex iti-align-middle iti-justify-between iti-items-center iti-mx-auto iti-max-w-screen-xl">
                    <a href="#" className="iti-flex iti-items-center">
                        <span className="iti-self-center iti-text-xl iti-font-semibold iti-whitespace-nowrap dark:iti-text-white">E-Commerce</span>
                    </a>
                    <div className="iti-flex iti-justify-between iti-items-center lg:iti-flex lg:iti-w-auto lg:iti-order-1" id="mobile-menu-2">
                        {Boolean(user) && (
                            <ul className="iti-flex iti-font-medium lg:iti-flex-row lg:iti-space-x-8 lg:iti-mt-0">
                                {navItems.map(item => (
                                    <NavItem key={item.key} label={item.label} href={item.href} />
                                ))}
                            </ul>
                        )}
                    </div>
                    <div className="iti-flex iti-items-center lg:iti-order-2">
                        {!Boolean(user)? <Link to="/login" className="btn-login">Log in</Link> : <Link to="/login" onClick={handleLogout} className="btn-logout">Logout</Link>}
                        {!Boolean(user) && (
                            <Link to="#" className="btn-get-started">Get started</Link>
                        )}
                    </div>
                </div>
            </nav>
        </header>
    )
}
