import React, { useEffect, useState } from 'react';
import Product from '../../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    // for show in summary cart 
    const[cart,setCart]=useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
        .then(data=>setProducts(data))
    }, [])

    // event handelaer here 

    const handleAddCard = (product) => {
        // console.log(product)
        const newCart = [...cart, product]
        setCart(newCart);
    }
    
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddCard={handleAddCard}>
                    </Product>)
                   
                }
        

            </div>
            <div className="order-summary">
                <h2>order summary</h2>
                <p>there is cart which you add:{cart.length}</p>

            </div>
            
        </div>
    );
};

export default Shop;