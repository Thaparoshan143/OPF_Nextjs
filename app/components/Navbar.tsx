import React from 'react';
import { _navItems } from '@/public/data/NavItems';

interface INavItem
{
    title : string,
    url : string
};

const Navbar = () => {
  return (
    <nav className="w-full min-h-[1rem] flex flex-row justify-evenly bg-orange-500">
        {_navItems.map(({title, url})=>
        {
            return <NavItem title={title} url={url} key={title}/>
        }
        )}
    </nav>
  )
}

const NavItem : React.FC<INavItem> = ({title, url}) =>
{
    return (
        <a href={url} className="p-4 m-4 font-bold text-xl capitalize">{title}</a>
    )
}

export default Navbar