import { useState, useEffect } from "react"
import { createContext } from "react"


export const CartContext = createContext()


export const ShoppingCartProvider = ({children}) => {
    //Contador de productos, carrito
    const [count,setCount] = useState(0)

    //Estado de mostrar  prductoDetail
    const [isProductDetailOpen,setIsProductDetailOpen] = useState(false)

    //Producto en panel ProductDetail
    const [productToShow,setProductToShow] = useState({})
    
    //Estado de en shooping carts agregar productos a cart
    const [cartProducts,setCartProducts] = useState([])

    //Metodos Product Detail abrir y cerrar
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)

    //Estado de mostrar  prductoDetail
    const [isCheckoutSideMenuOpen,setIsCheckoutSideMenuOpen] = useState(false)
    //CheckOut side manu abrir y cerrar
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

    //Chopping cart order
    const [order,setOrder] = useState([])

    //Obtenemos los productos
    const [items,setItems] = useState(null)

    //Captura lo que tiene el campo de busqueda, por titulo
    const [serachByTitle,setSerachByTitle] = useState(null)

    //Captura lo que tiene el campo de busqueda, por categoria
    const [searchByCategory,setSearchByCategory] = useState(null)
    
    //items filtrados dependinedo de input del home
    const [filterdItems,setFilterdItems] = useState(null)

    useEffect ( () => {
        fetch('https://api.escuelajs.co/api/v1/products')
        .then(response => response.json())
        .then(data => setItems(data))
      }, [])

    //esta funcion filtramos lo que buscamos en el input con lo items que ya tenemos en la orden por titulo
    const filteredItemsByTitle = (items, serachByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(serachByTitle.toLowerCase()))
    }

    //esta funcion filtramos lo que buscamos en el input con lo items que ya tenemos en la orden por categoria
    const filteredItemsByCategory = (items, searchByCategory) => {
        // Este print muestra que trae items, sirve para inspecionar la  ruta del nombre de la categoria
        //console.log("items: " , items)
        return items?.filter(item => item.category.name.toLowerCase().includes(searchByCategory.toLowerCase()))
    }

    //Captura por cual esra el filtro apra asi mismo devolver el filtro
    const filterBy = (searchType, items, serachByTitle, searchByCategory) => {
        if(searchType === 'BY_TITLE'){
            return filteredItemsByTitle(items, serachByTitle)
        }

        if(searchType === 'BY_CATEGORY'){
            return filteredItemsByCategory(items, searchByCategory)
        }

        if(searchType === 'BY_CATEGORY_AND_CATEGORY'){
            return filteredItemsByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(serachByTitle.toLowerCase()))
        }

        if(!searchType){
            return items
        }
    }

    //Si tenemos algo en el input, le enviamos al estado, lo que la funcion nos devuelva como filtro.
    useEffect ( () => {
        if(serachByTitle && searchByCategory) setFilterdItems(filterBy('BY_CATEGORY_AND_CATEGORY', items, serachByTitle, searchByCategory))
        if(serachByTitle && !searchByCategory) setFilterdItems(filterBy('BY_TITLE', items, serachByTitle, searchByCategory))
        if(!serachByTitle && searchByCategory) setFilterdItems(filterBy('BY_CATEGORY', items, serachByTitle, searchByCategory))
        if(!serachByTitle && !searchByCategory) setFilterdItems(filterBy(null, items, serachByTitle, searchByCategory))
      }, [items, serachByTitle, searchByCategory])

      
    //console.log("serachByTitle: " , serachByTitle)
    //console.log("searchByCategory: " , searchByCategory)
    //console.log("filterdItems: " , filterdItems)

    return(
        <CartContext.Provider value={{
            count,
            setCount,
            isProductDetailOpen,
            openProductDetail,
            closeProductDetail,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            isCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            order,
            setOrder,
            items,
            setItems,
            serachByTitle,
            setSerachByTitle,
            filterdItems,
            searchByCategory,
            setSearchByCategory
        }}>
            {children}
        </CartContext.Provider>
    )
}