import { useContext, Component} from 'react'
import Layout from '../../Componentes/Layout'
import Card from '../../Componentes/Card'
import ProdudctDetail from "../../Componentes/productDetail"
import { CartContext } from "../../Context/index.jsx"

function Home() {
  const context = useContext(CartContext)
  
  //Renderisa los items por medio de la busqueda o por defecto renderisa todos los items traidos de API
  const renderView = () => {
    
      if(context.filterdItems?.length > 0){
        return(
          context.filterdItems?.map(item => (
            <Card key={item.id} data={item} />
          ))
        )
      }else{
        return(
          <div>We don't have anything</div>
        )
      }
  }
  

  return (
      <Layout>
        <div className='flex items-center justify-center relative w-80 mb-4'>
          <h1 className="font-medium text-xl">Exclusive Products</h1>
        </div>
        <input 
          type='type' 
          placeholder='Search a product'
          //Obtenemos lo que se escriba en el input y se lo guardamos al estado
          onChange={(event) => context.setSerachByTitle(event.target.value) }
          className='rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none'
        />
        <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
          {renderView()}
        </div>
        <ProdudctDetail />
        
      </Layout>
  )
}

export default Home
