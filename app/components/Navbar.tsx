import React from 'react';
import { _navItems } from '@/public/data/NavItems';

interface INavItem
{
    title : string,
    url : string
};

const Navbar = () => 
{
  return (
    <nav className="py-2 px-[30%] fixed top-0 left-0 flex flex-row justify-evenly w-full bg-theme text-white" >
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
        <a href={url} className="p-2 mx-2 text-lg font-semibold uppercase hover:scale-[108%]">{title}</a>
    )
}

export default Navbar