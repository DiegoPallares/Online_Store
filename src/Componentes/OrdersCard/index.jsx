import { ChevronRightIcon } from '@heroicons/react/24/solid'
import { RectangleStackIcon } from '@heroicons/react/24/solid'
import { CircleStackIcon } from '@heroicons/react/24/solid'


const OrdersCard = props => {
    const {totalPrice, totalProducts} = props
    //console.log("TOTAL : " + totalProducts)
    
    return(
        <div className="flex justify-between items-center border border-black rounded-lg w-80 p-4 mb-3">
            <div className='flex justify-between w-full'>
                <p className='flex flex-col'>
                    <span className='font-light'>01.02.23</span>
                    <div className='flex'>
                        <RectangleStackIcon className="h-6 w-6 text-black cursor-pointer" />
                        <span className='font-light'>{totalProducts} Articles </span>
                    </div>
                    
                </p>
                <p className='flex items-center gap-2'>
                    <CircleStackIcon className="h-6 w-6 text-black cursor-pointer" />
                <span className='font-medium text-2xl' >{totalPrice}</span>
                    <ChevronRightIcon className="h-6 w-6 text-black cursor-pointer" />
                </p>
                
            </div>
        </div>
    )
}

export default OrdersCard