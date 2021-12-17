const products = require('./products');

// 1.  Agregarle un id único a cada producto empezando en 1.
const addID = array => (
    array.map( (product, index) => ({
        id: index + 1, ...product,  
    })));


// 2. Imprimir en consola el nombre de cada uno de los productos.
const printProductsName = array => {
    array.forEach( (e) => {
        console.log(e.name)
    } )
};

// 3. Imprimir en consola el producto con el id 3.

const printProductWithId = (id, array) => (
    (array.find(element => element.id = id ))
)

const productsWithId = addID(products);
printProductWithId(3, productsWithId);

// 4. Imprimir en consola los productos con color “black”. 

const productsWithColor = (array, color) => (
    array.filter(product => product.colors.includes(color))
);

// 5. Imprimir en consola los productos que no tienen color.

const productsWithoutColor = array => (
    array.filter(product => product.colors.length == 0)
);

// 6. Agregar un producto nuevo al array con las mismas propiedades de los productos ya existentes.

const createProductOfComputer = ( name, price, quantity, colors) => {
    return (
        {
            name : name,
            price: price,
            quantity: quantity,
            colors: colors    
        }
    )
};

const productMonitor = createProductOfComputer("Monitor LG", 150, 3, ["black", "grey"]);

const addProductInProducts = (product, arrayProducts) => {
    let idForProduct = arrayProducts.length + 1
    let productWithId = { id: idForProduct, ...product}
    
    arrayProducts.push(productWithId);
};

addProductInProducts(productMonitor, productsWithId);

// 7. Eliminar del array los productos fuera de stock.

const productsWithStock = arrayProducts => {
    arrayProducts.filter(product => product.quantity > 0 )
};

// 8. Imprimir en consola la sumatoria del stock de todos los productos.

const stockOfProducts = arrayProducts => {
    let initialStock = 0

    
    
    // console.log(arrayProducts.forEach(product => initialStock + product.quantity))

}


stockOfProducts(products);