import React from 'react';

const ProductSearchBar = (props) =>{
    return(
        <div className="product-view-top">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="product-search">
                                                <input type="email" value="Search"/>
                                                <button><i className="fa fa-search"></i></button>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="product-short">
                                                <div className="dropdown">
                                                    <div className="dropdown-toggle" data-toggle="dropdown">Product short by</div>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a href="LatestAdditions.js" className="dropdown-item">Newest</a>
                                                        <a href="PopularProvidersList.js" className="dropdown-item">Popular</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="product-price-range">
                                                <div className="dropdown">
                                                    <div className="dropdown-toggle" data-toggle="dropdown">Product price range</div>
                                                    <div className="dropdown-menu dropdown-menu-right">
                                                        <a href="#" className="dropdown-item">$0 to $50</a>
                                                        <a href="#" className="dropdown-item">$51 to $100</a>
                                                        <a href="#" className="dropdown-item">$101 to $150</a>
                                                        <a href="#" className="dropdown-item">$151 to $200</a>
                                                        <a href="#" className="dropdown-item">$201 to $250</a>
                                                        <a href="#" className="dropdown-item">$251 to $300</a>
                                                        <a href="#" className="dropdown-item">$301 to $350</a>
                                                        <a href="#" className="dropdown-item">$351 to $400</a>
                                                        <a href="#" className="dropdown-item">$401 to $450</a>
                                                        <a href="#" className="dropdown-item">$451 to $500</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
    );
}

export default ProductSearchBar;