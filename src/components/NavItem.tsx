import { NavLink } from "react-router-dom";

interface NavItem {
  label: string;
  href: string;
}

const NavItem = ({label, href}: NavItem) => {
  return (
    <li>
        <NavLink className={({isActive}) => isActive? "iti-block iti-py-2 iti-pr-4 iti-pl-3 iti-text-white iti-rounded iti-bg-blue-700 lg:iti-bg-transparent lg:iti-text-blue-700 lg:iti-p-0 dark:iti-text-white" : "iti-block iti-py-2 iti-pr-4 iti-pl-3 iti-text-gray-700 iti-border-b iti-border-gray-100 hover:iti-bg-gray-50 lg:hover:iti-bg-transparent lg:iti-border-0 lg:hover:iti-text-blue-700 lg:iti-p-0 dark:iti-text-gray-400 lg:dark:hover:iti-text-white dark:hover:iti-bg-gray-700 dark:hover:iti-text-white lg:dark:hover:iti-bg-transparent dark:iti-border-gray-700"} to={href}>{label}</NavLink>
    </li>
  )
}

export default NavItem