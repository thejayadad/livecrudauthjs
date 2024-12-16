'use client'
import { usePathname } from "next/navigation"
import {FiHome, FiDollarSign, FiPlusCircle, FiUser} from "react-icons/fi"
import LinkItem from "./link-item"

const SideLinks: React.FC= () => {
    const pathname = usePathname()
    const links = [
        {href: '/', label: 'Home', icon: FiHome},
        {href: '/new', label: 'New', icon: FiPlusCircle},
        {href: '/paid', label: 'Paid', icon: FiDollarSign},
        {href: '/unpaid', label: 'Unpaid', icon: FiUser},

    ]
  return (
    <div className="space-y-2">
        {links.map(({href, label, icon}) => (
            <LinkItem
            key={href}
            href={href}
            label={label}
            icon={icon}
            isActive={pathname === href}
            />
        ))}
    </div>
  )
}

export default SideLinks