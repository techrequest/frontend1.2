import React from'react';
import { Route, Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import BuildIcon from '@material-ui/icons/Build';
import CategoryIcon from '@material-ui/icons/Category';
import CreateIcon from '@material-ui/icons/Create';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import AdbIcon from '@material-ui/icons/Adb';
import MarkunreadMailboxIcon from '@material-ui/icons/MarkunreadMailbox';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import photomontage from './images/photomontage.jpg';
import servicestext from './images/servicestext.jpg';
import storefrontimg from './images/storefrontimg.jpg';
import handimg from './images/handimg.jpg';
import buildingblocks from './images/buildingblocks.jpg';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import StoreIcon from '@material-ui/icons/Store';



function MyCarousel(){
    return (
        <div className="header">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3" align="left">
                        <nav className="navbar bg-light">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                <Link to="/" className="nav-link" > 
                                        <HomeIcon /> Home</Link>
                                </li>
                                <li className="nav-item">
                                <Link to="/promotions" className="nav-link" > <CardGiftcardIcon/> Promotions</Link>
                                </li>
                                <li className="nav-item">
                                <Link to="/serviceproviders" className="nav-link" ><CategoryIcon/> Service Providers List</Link>
                                </li>
                                <li className="nav-item">
                                <Link to="/create" className="nav-link" ><CreateIcon/> New Creations</Link>
                                </li>
                                <li className="nav-item">
                                <Link to="/construct" className="nav-link" ><AccountBalanceIcon/> Construction</Link>
                                </li>
                                <li className="nav-item">
                                <Link to="/install" className="nav-link" ><AdbIcon/> Installation</Link>
                                </li>
                                <li className="nav-item">
                                <Link to="/repair" className="nav-link" ><BuildIcon/> Repairs</Link>
                                </li>
                                <li className="nav-item">
                                <Link to="/manage" className="nav-link" ><HowToRegIcon/> Management</Link>
                                </li>
                                <li className="nav-item">
                                <Link to="/deliver" className="nav-link" ><MarkunreadMailboxIcon/> Deliveries</Link>
                                
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-md-6">
                        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="d-block w-100" src={storefrontimg} alt="Best deals and offers from the Service Providers" height="416px"/>
                                    <div class="carousel-caption d-none d-md-block">
                                    <h5 class="btn"> Best deals and offers from the Service Providers</h5>
                                    <p><a class="btn" href="ProviderPromotions.js"><ShoppingBasketIcon/></a></p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={servicestext} alt="See a range of Service Categories to choose from - pick what you need" height="416px"/>
                                    <div class="carousel-caption d-none d-md-block">
                                    <h5  class="btn">See a range of Service Categories to choose from - pick what you need</h5>
                                    <p><a class="btn" href="ServiceCategories.js"><CategoryIcon/></a></p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src={photomontage} alt="Get experts from all around to work on your special project - Service Providers" height="416px"/>
                                    <div class="carousel-caption d-none d-md-block">
                                    <h5 class="btn">Get experts from all around to work on your special project - Service Providers</h5>
                                    <p><a class="btn" href="ServiceProvidersList.js"><StoreIcon/></a></p>
                                    </div>
                                </div>
                                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                    </div>
                        <div className="col-md-3">
                            <div className="header-img">
                                <div className="img-item">
                                    <img src={handimg} alt="Your creativity needs expert to come to life - Hire an expert to bring your creative ideas to life"/>
                                    <a class="btn" className="img-text" href="CategoryCreate.js">
                                        <p class="btn">Your creativity needs expert to come to life - Hire an expert to bring your creative ideas to life</p>
                                    </a>
                                </div>
                                <div className="img-item">
                                    <img src={buildingblocks} alt="Need someone to Construct your dream ideas - Click here"/>
                                    <a class="btn" className="img-text" href="CategoryConstruct.js">
                                        <p class="btn">Need someone to Construct your dream ideas - Click here</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}


export default MyCarousel
