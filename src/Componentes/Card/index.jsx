import { PlusIcon, CheckIcon } from '@heroicons/react/24/solid'
import { useContext } from "react"
import { CartContext } from "../../Context/index.jsx"


const Card = ( data ) => {
    const context = useContext(CartContext)

    const showProduct = (productDetail) => {
        context.openProductDetail()
        context.setProductToShow(productDetail)
    }

    const addProductsToCart = (event, productDetail) => {
        event.stopPropagation()
        //Al contexto de setcartproducts le estamos diciendo deje lo que ya tenia
        // en "cartProducts"y agregue lo que tenga productDetail
        context.setCartProducts([...context.cartProducts, productDetail])
        context.setCount(context.count + 1)
        context.openCheckoutSideMenu()
        context.closeProductDetail()
        
    }
    //Funcion para que determine cuando es "X" o u chulito en las card
    const renderIcon = (id) => {
        const isInCart = context.cartProducts.filter(product => product.id === id).length > 0
          
        if(isInCart){
            return (
                <div 
                    className="absolute top-0 right-0 flex justify-center items-center bg-black w-6 h-6 rounded-full m-2 p-1"
                >
                    <CheckIcon className="h-6 w-6 text-white" />
                </div>
            )
        }else{
            return(
                <div 
                    className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
                    onClick={ (event) => addProductsToCart(event, data.data)}
                >
                    <PlusIcon className="h-6 w-6 text-black" />
                </div>
            )
        }
    }

    return(
        <div 
            className="bg-white cursor-pointer w-56 h-60"
            //Le pasamos toda la info, para mostrar el producto en productDetail
            onClick={ () => showProduct(data.data)}
        >
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-cs m-2 px-3 py-0,5">{data.data.category.name}</span>
                <img className="w-full h-full object-fill rounded-lg " src={data.data.images[0]} alt={data.data.title} />
                {renderIcon(data.data.id)}
            </figure>
            <p className="flex justify-between">
                <span className="text-sm font-light ">{data.data.title}</span>
                <span className="text-lg font-medium ">${data.data.price}</span>
            </p>
        </div>
    )
}

export default Card