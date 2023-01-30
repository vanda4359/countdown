import React from "react";
import "./Product.scss"
import { AiOutlineShoppingCart } from "react-icons/ai"
import gown from "../../assets/gown.jpg"

const Product = () => {
    return (
        <>
            <header className="--bg-dark">
                <nav className="container">
                    <h2 className="--text-md --text-light --py2">
                        Zulu<span>Shop</span>
                        <AiOutlineShoppingCart color="orangered" size={30} />
                    </h2>      
                </nav>
            </header>
            <section>
                <div className="container product --flex-start ----flex-dir-column">
                    <div className="product-image --text-center --card --mr">
                        <img src={gown} alt="dress" />
                    </div>
                    <div className="product-desc">
                        <h3 className="--text-md --color-danger">Sleek WeddingGown</h3>
                        <p className="--fw-bold">$95 USD</p>
                        <p className="--text-sm">
                            Lorem ipsum dolor sit amet, consectetur 
                            adipisicing elit. Mumquam
                            corrupti perspiciatis, facilis explicabo
                            nostrum dolorem ipsa
                            laboriosam non soluta velit natus at, magni
                            deleniti voluptate.
                        </p>
                        <form action="">
                            <div className="--form-control --flex-start my2">
                                <label>Color</label>
                                <select>
                                    <option>Choose an option</option>
                                    <option>White</option>
                                </select>
                            </div>
                            <div className="--form-control --flex-start my2">
                                <label>Size</label>
                                <select>
                                    <option>Choose an option</option>
                                    <option>24</option>
                                </select>
                            </div>
                            <div className="--form-control --flex-start my2">
                                <label>Quantity</label>
                                <select>
                                    <option>Choose an option</option>
                                    <option>1</option>
                                </select>
                            </div>
                            <button className="--btn --btn-primary --btn-block">
                                Add To Cart
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Product