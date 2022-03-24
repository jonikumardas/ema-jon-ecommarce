import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'

const Product = (props) => {
    // console.log(props);
    const {name,price,img,ratings,seller} = props.product;
     
    return (
        <div className='Shows-img'>
            <img src={img} alt="" />
            <div>
            <h3>{name}</h3>
            <p> price: ${price}</p>
            <p>Manufacturer : {seller}</p>
                <p>Rating: {ratings} start </p>
                </div>

            <button onClick={() => props.handleAddCard(props.product)} className='card'> add to card
                <p>< FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></p></button>
        </div>
    );
};

export default Product;