
/**
 * Esta funcion calcula el total del precio en nuestra modal order
 * @param {Array} product  cartProducts: es una array de objetos
 * @returns {number} precio total
 */
export const totalPrice = (product) => {
    let sum = 0
    product.forEach(product => sum += product.price )
    return sum
}