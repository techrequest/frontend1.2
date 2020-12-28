import React from 'react';

const ServiceProviderCard = (props) => {
    let stars = [];
    let starRating;
    let rating = props.rating;

        //1. Determine the appropriate number of stars to show
        //2. Display the card with the proper information and star rating.

        // Create an array containing empty fields but has the same number of stars as the rating
        for (let i = 0 ; i < rating ; i++){
         stars.push(i);
        
        //Create a new array called star rating and fill it with the star icon HTML code
        starRating  =  stars.map((i) => {
                 return <i className="fa fa-star"></i>
        })
        
    
    }


    return(
        <div className="col-md-4">
                                <div className="product-item">
                                    <div className="product-title">
                                        <a href="ServiceProviderDetailsPage.js">{props.providerName}</a> 
                                        <div className="ratting">
                                        {
                                            //Displaying the stars
                                            starRating
                                        }
                                        </div>
                                    </div>
                                    <div className="product-image">
                                        <a href="ServiceProviderDetailsPage.js">
                                            <img src={props.imageUrl} height="150px" alt={props.alt}/>
                                        </a>
                                        <div className="product-action">
                                            <a href="index.html"><i className="fa fa-cart-plus"></i></a>
                                            <a href="index.html"><i className="fa fa-heart"></i></a>
                                            <a href="index.html"><i className="fa fa-search"></i></a>
                                        </div>
                                    </div>
                                    <div className="product-price">
                                        <h3><span>$</span>{props.price}</h3>
                                        <a className="btn" href="ServiceProviderDetailsPage.js"><i className="fa fa-info-circle"></i>More Details</a>
                                    </div>
                                </div>
                            </div>

    )
}

export default ServiceProviderCard;