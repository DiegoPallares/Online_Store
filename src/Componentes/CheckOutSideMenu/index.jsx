import { XMarkIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'
import React, { useContext } from "react"
import { CartContext } from "../../Context/index.jsx"
import { totalPrice } from "../../utils/index.jsx"
import OrderCard from "../OrderCard/index.jsx"
import "./Styles.css"
import { Route } from 'react-router-dom'


const CheckOutSideMenu = () => {
    const context = useContext(CartContext)
    //console.log(context.productToShow)
    //console.log('CART: ', context.cartProducts)

    //Este meotdo es llamado desde OrderCard, para quitar de la lista de compras, realiza un piltrado por el ID
    //Alfinal envia por el contexto el estado de las card de productos.
    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter(product => product.id != id)
        context.setCartProducts(filteredProducts)
    } 

    const handleCheckout = () => {
        const orderToAdd = {
            data: '01.02.23',
            products: context.cartProducts,
            totalProducts: context.cartProducts.length,
            totalPrice: totalPrice(context.cartProducts)
        }

        //agregarmos la orden creada al estado de setOrder
        context.setOrder([...context.order, orderToAdd])
        //Una vez realizada la compra la orden queda vacia.
        context.setCartProducts([])
        //Reiniciamos la canitdad de productos escojidos en la landisn principal
        context.setCount(0)
        //Reiniciamos el valor 
        context.setSerachByTitle(null)
    }

    return(
        <aside  
            className={` ${context.isCheckoutSideMenuOpen? 'flex' : 'hidden'} checkout-side-menu flex-col fixed right-0 border border-black rounded-r-lg bg-white`}
        >
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl ">My Order</h2>
                <div  onClick={context.closeCheckoutSideMenu}>
                    <XMarkIcon className="h-6 w-6 text-black cursor-pointer" />
                </div>
            </div>
            <div className='px-6 overflow-y-scroll flex-1'>
                {
                    context.cartProducts.map( product => (
                        <OrderCard 
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            imageUrl={product.images}
                            price={product.price}
                            handleDelete={handleDelete}
                        />
                    )) 
                }
            </div>
            {/* Este div muestra el resultado de la suma de todas las ordenes y lo trae de utils*/}
            <div className='px-6 mb-6' >
                <p className='flex justify-between items-center mb-2'>
                    <span className='font-light'>Total:</span>
                    <span className='font-medium text-2xl' >${totalPrice(context.cartProducts)}</span>
                </p>
                <Link to="/My-orders/last">
                    <button className='w-full bg-black py-3 text-white rounded' onClick={ () => handleCheckout()} >Checkout</button>
                </Link>
                
            </div>
        </aside>
    )
}

export default CheckOutSideMenu