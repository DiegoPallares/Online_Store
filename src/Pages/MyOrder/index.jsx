import { useContext } from "react"
import { Link } from 'react-router-dom'
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { CartContext } from "../../Context/index.jsx"
import Layout from '../../Componentes/Layout'
import OrderCard from "../../Componentes/OrderCard/index.jsx"

function MyOrder() {
  const context = useContext(CartContext)
  const currentPath = window.location.pathname
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)

  //Last es lo que va despeus de la / en la URL de my-Order/last,
  //si trae un last le cambiamos el index por el ultimo valor de la orden y es encesario ponerle -1
  if(index === 'last') index = context.order?.length -1

  //console.log("hola mundito cruel - myOrder")
  //console.log("index: " + index)
  
    return (
      <Layout>
        <div className='flex items-center justify-center relative w-80 mb-6'>
          <Link to="/my-orders/" className='absolute left-0 ' >
            <ChevronLeftIcon className='h-6 w-6 text-black cursor-pointer'/>
          </Link>
          
          <h1>Landing My Order</h1>
        </div>
        <div className='flex flex-col w-80'>
        {
          context.order?.[index]?.products.map( product => (
            <OrderCard 
              key={product.id}
              id={product.id}
              title={product.title}
              imageUrl={product.images}
              price={product.price}
            />
          )) 
        }
      </div>
     </Layout>
    )
  }
  
  export default MyOrder
  