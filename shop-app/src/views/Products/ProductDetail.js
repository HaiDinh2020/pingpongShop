import React, { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import DetailsThumb from "./DetailsThumb";
import "./ProductDetail.css";



const ProductDetail = () =>  {
    
    const [product, setProduct] = useState([]);
    const [thumbnail, setThumbnail] = useState('')
    let state = useLocation();
    let images = JSON.parse(state.state.item.images);

    const handleProduct = (data) => {
        setThumbnail(data.thumbnail);
        setProduct(data);
    }
    
   
    useEffect ( () => {
        handleProduct(state.state.item)
    },[state.state.item])
    
    let handleTab = index =>{
        setThumbnail(images.images[index])
        console.log(images.images[index])
    };


    let handleAddToCart = () => {

    }
    return (
        
        <div className="product">
            {
                <div className="details">
                    <div className="big-img">
                        <img src={thumbnail} alt=""/>
                    </div>

                    <div className="box">
                        <div className="row">
                        <h2>{product.title}</h2>
                        <span>${product.price}</span>
                    </div>
                        <p>{product.description}</p>
                        <p>Stock: {product.stock}</p>
                        <DetailsThumb images={images.images} tab={handleTab} />
                        <button className="cart" onClick={handleAddToCart}>Add to cart</button>
                        <button className="cart" >Buy Now</button>

                    </div>
                </div>
            }
        </div>
    )
}

export default ProductDetail;