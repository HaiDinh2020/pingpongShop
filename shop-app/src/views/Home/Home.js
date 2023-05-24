import React from "react";
import './Home.css';
import axios from "axios";
import { Link } from "react-router-dom";

class Home extends React.Component {

    state = {
        products: []
    }

    async componentDidMount() {
        let res = await axios.get('http://localhost:5000');
        this.setState({
            products: res ? res.data : []
        })
        
       
    }
    
    render () {
        let {products} = this.state;
        return (
            <>
                <div className="homePage">
                    <ul className="product">
                        {
                            products && products.length > 0 && 
                            products.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <div className="product-item" >
                                            <div className="product-top">
                                                <a href="id" className="product-thumb">
                                                    <img src={item.thumbnail} alt=""></img>
                                                </a>
                                            </div>
                                            <div className="product-info">
                                                <a href="id" className="product-cat">{item.category}</a>
                                                <Link to="/product" relative="path" state={{item: item}}  className="product-name">{item.title}</Link>
                                                <div className="product-price">${item.price}</div>
                                            </div>
                                        </div>
                                    </li>
                                )
                            })
                        }                                                    
                    </ul>
                </div>
            </>
        )
    }
}

export default Home;