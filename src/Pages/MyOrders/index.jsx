import { useContext } from "react"
import { Link } from 'react-router-dom'
import Layout from '../../Componentes/Layout'
import { CartContext } from "../../Context/index.jsx"
import OrdersCard from '../../Componentes/OrdersCard/index.jsx'

function MyOrders() {
  const context = useContext(CartContext)
    return (
      <Layout>
        <div className='flex items-center justify-center relative w-80 mb-4'>
          <h1 className="font-medium text-xl">My Orders</h1>
        </div>
        {
          context.order.map( (order, index) => (
            <Link key={index} to={`/my-Orders/${index}`}>
              <OrdersCard
                totalPrice={order.totalPrice}
                totalProducts={order.totalProducts}
              />
            </Link>
          ))
        }
        
     </Layout>
    )
  }
  
  export default MyOrders
  