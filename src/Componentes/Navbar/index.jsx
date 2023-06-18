import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import { useContext } from "react"
import { CartContext } from "../../Context/index.jsx"
import { NavLink } from "react-router-dom"

const NavBar = () => {
    const context = useContext(CartContext)
    const  activeStyle = 'underline underline-offset-4'
    return (
        <nav className="flex justify-between items-center fixed top-0 z-10 w-full py-5 px-8 text-sm font-light">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink
                        to="/"
                        >
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/"
                        onClick={() => context.setSearchByCategory()}
                        className={({isActive}) =>
                            isActive ? activeStyle : undefined
                        }>
                            All
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/clothes"
                        onClick={() => context.setSearchByCategory('clothes')}
                        className={({isActive}) =>
                            isActive ? activeStyle : undefined
                        }>
                            Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/electronics"
                        onClick={() => context.setSearchByCategory('electronics')}
                        className={({isActive}) =>
                            isActive ? activeStyle : undefined
                        }>
                            Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/furnitures"
                        onClick={() => context.setSearchByCategory('furnitures')}
                        className={({isActive}) =>
                            isActive ? activeStyle : undefined
                        }>
                            Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/toys"
                        onClick={() => context.setSearchByCategory('toys')}
                        className={({isActive}) =>
                            isActive ? activeStyle : undefined
                        }>
                            Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/others"
                        onClick={() => context.setSearchByCategory('others')}
                        className={({isActive}) =>
                            isActive ? activeStyle : undefined
                        }>
                            Others
                    </NavLink>
                </li>
            </ul>
            <ul  className="flex items-center gap-3">
                <li className="text-black/60">
                    teff@platzi.com
                </li>
                <li>
                    <NavLink
                        to="/My-Orders"
                        className={({isActive}) =>
                            isActive ? activeStyle : undefined
                        }>
                            MyOrders
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/My-Account"
                        className={({isActive}) =>
                            isActive ? activeStyle : undefined
                        }>
                            /My-Account
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/Si-ngIn"
                        className={({isActive}) =>
                            isActive ? activeStyle : undefined
                        }>
                            SingIn
                    </NavLink>
                </li>
                <li className='flex items-center'>
                    <ShoppingCartIcon className="h-6 w-6 text-black" /> {context.count}
                </li>
            </ul>
        </nav>
    )
}

export default NavBar