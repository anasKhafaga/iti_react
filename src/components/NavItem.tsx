import { NavLink } from "react-router-dom";

interface NavItem {
  label: string;
  href: string;
}

const NavItem = ({label, href}: NavItem) => {
  return (
    <li>
        <NavLink isActive={(match) => match?.isExact? true : false} className={isActive => isActive? "nav-item-active" : "nav-item"} to={href}>{label}</NavLink>
    </li>
  )
}

export default NavItem