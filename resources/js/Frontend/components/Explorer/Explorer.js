import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import nft1 from '../../assets/images/items/static-3.jpg'
// import author1 from '../../assets/images/author/author-1.jpg'

const Explorer = () => {
    const [words, setWords] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // useEffect(() => {
    //     axios.get(`${process.env.REACT_APP_BACKEND_API_URL}/word/wordsLimit`).then(res => {
    //         setIsLoading(true);
    //         if (res) {
    //             setWords(res.data);
    //             setIsLoading(false);
    //         }
    //     })
    // }, [words]);
    return (
        <div className="no-bottom no-top" id="content">
            <div id="top"></div>
			<section aria-label="section">
                <div className="container">
                    <div className="row wow fadeIn">
                        <div className="col-lg-12">
                            <h3>Explore Exclusive Digital Assets</h3>
                            <div className="items_filter">
                                <form action="blank.php" className="row form-dark" id="form_quick_search" method="post" name="form_quick_search">
                                    <div className="col text-center">
                                        <input className="form-control" id="name_1" name="name_1" placeholder="search..." type="text" /> <a href="#" id="btn-submit"><i className="fa fa-search bg-color-secondary"></i></a>
                                        <div className="clearfix"></div>
                                    </div>
                                </form>

                                <div id="item_category" className="dropdown">
                                    <a href="#" className="btn-selector">All categories</a>
                                    <ul>
                                        <li className="active"><span>All categories</span></li>
                                        <li><span>Art</span></li>
                                        <li><span>Music</span></li>
                                        <li><span>Domain Names</span></li>
                                        <li><span>Virtual World</span></li>
                                        <li><span>Trading Cards</span></li>
                                        <li><span>Collectibles</span></li>
                                        <li><span>Sports</span></li>
                                        <li><span>Utility</span></li>
                                    </ul>
                                </div>

                                <div id="buy_category" className="dropdown">
                                    <a href="#" className="btn-selector">Buy Now</a>
                                    <ul>
                                        <li className="active"><span>Buy Now</span></li>
                                        <li><span>On Auction</span></li>
                                        <li><span>Has Offers</span></li>
                                    </ul>
                                </div>

                                <div id="items_type" className="dropdown">
                                    <a href="#" className="btn-selector">All Items</a>
                                    <ul>
                                        <li className="active"><span>All Items</span></li>
                                        <li><span>Single Items</span></li>
                                        <li><span>Bundles</span></li>
                                    </ul>
                                </div>

                            </div>
                        </div>                     
                        
                        <div className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div className="nft__item">
                                <div className="de_countdown" data-year="2022" data-month="6" data-day="16" data-hour="8"></div>
                                <div className="author_list_pp">
                                    <a href="02_dark-author.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Creator: Monica Lucas">                                    
                                        <img className="lazy" src="" alt="" />
                                        <i className="fa fa-check"></i>
                                    </a>
                                </div>
                                <div className="nft__item_wrap">
                                    <div className="nft__item_extra">
                                        <div className="nft__item_buttons">
                                            <button>Buy Now</button>
                                            <div className="nft__item_share">
                                                <h4>Share</h4>
                                                <a href="https://www.facebook.com/sharer/sharer.php?u=https://gigaland.io" target="_blank"><i className="fa fa-facebook fa-lg"></i></a>
                                                <a href="https://twitter.com/intent/tweet?url=https://gigaland.io" target="_blank"><i className="fa fa-twitter fa-lg"></i></a>
                                                <a href="mailto:?subject=I wanted you to see this site&amp;body=Check out this site https://gigaland.io"><i className="fa fa-envelope fa-lg"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="02_dark-item-details.html">
                                        <div className="d-placeholder"></div>
                                        <img src="" className="lazy nft__item_preview" alt="" />
                                    </a>
                                </div>
                                <div className="nft__item_info">
                                    <a href="02_dark-item-details.html">
                                        <h4>Pinky Ocean</h4>
                                    </a>
                                    <div className="nft__item_click">
                                        <span></span>
                                    </div>
                                    <div className="nft__item_price">
                                        0.08 ETH<span>1/20</span>
                                    </div>
                                    <div className="nft__item_action">
                                        <a href="#">Place a bid</a>
                                    </div>
                                    <div className="nft__item_like">
                                        <i className="fa fa-heart"></i><span>50</span>
                                    </div>                            
                                </div> 
                            </div>
                        </div>                 
                        
                        <div className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div className="nft__item">
                                <div className="author_list_pp">
                                    <a href="02_dark-author.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Creator: Stacy Long">                                    
                                        <img className="lazy" src="images/author/author-10.jpg" alt="" />
                                        <i className="fa fa-check"></i>
                                    </a>
                                </div>
                                <div className="nft__item_wrap">
                                    <div className="nft__item_extra">
                                        <div className="nft__item_buttons">
                                            <button>Buy Now</button>
                                            <div className="nft__item_share">
                                                <h4>Share</h4>
                                                <a href="https://www.facebook.com/sharer/sharer.php?u=https://gigaland.io" target="_blank"><i className="fa fa-facebook fa-lg"></i></a>
                                                <a href="https://twitter.com/intent/tweet?url=https://gigaland.io" target="_blank"><i className="fa fa-twitter fa-lg"></i></a>
                                                <a href="mailto:?subject=I wanted you to see this site&amp;body=Check out this site https://gigaland.io"><i className="fa fa-envelope fa-lg"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="02_dark-item-details.html">
                                        <div className="d-placeholder"></div>
                                        <img src="images/items/static-2.jpg" className="lazy nft__item_preview" alt="" />
                                    </a>
                                </div>
                                <div className="nft__item_info">
                                    <a href="02_dark-item-details.html">
                                        <h4>Deep Sea Phantasy</h4>
                                    </a>
                                    <div className="nft__item_click">
                                        <span></span>
                                    </div>
                                    <div className="nft__item_price">
                                        0.06 ETH<span>1/22</span>
                                    </div>
                                    <div className="nft__item_action">
                                        <a href="#">Place a bid</a>
                                    </div>
                                    <div className="nft__item_like">
                                        <i className="fa fa-heart"></i><span>80</span>
                                    </div>                                 
                                </div> 
                            </div>
                        </div>
                        
                        <div className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div className="nft__item">
                                <div className="de_countdown" data-year="2022" data-month="6" data-day="14" data-hour="8"></div>
                                <div className="author_list_pp">
                                    <a href="02_dark-author.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Creator: Ida Chapman">                                    
                                        <img className="lazy" src="images/author/author-11.jpg" alt="" />
                                        <i className="fa fa-check"></i>
                                    </a>
                                </div>
                                <div className="nft__item_wrap">
                                    <div className="nft__item_extra">
                                        <div className="nft__item_buttons">
                                            <button>Buy Now</button>
                                            <div className="nft__item_share">
                                                <h4>Share</h4>
                                                <a href="https://www.facebook.com/sharer/sharer.php?u=https://gigaland.io" target="_blank"><i className="fa fa-facebook fa-lg"></i></a>
                                                <a href="https://twitter.com/intent/tweet?url=https://gigaland.io" target="_blank"><i className="fa fa-twitter fa-lg"></i></a>
                                                <a href="mailto:?subject=I wanted you to see this site&amp;body=Check out this site https://gigaland.io"><i className="fa fa-envelope fa-lg"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="02_dark-item-details.html">
                                        <div className="d-placeholder"></div>
                                        <img src="images/items/static-3.jpg" className="lazy nft__item_preview" alt="" />
                                    </a>
                                </div>
                                <div className="nft__item_info">
                                    <a href="02_dark-item-details.html">
                                        <h4>Rainbow Style</h4>
                                    </a>
                                    <div className="nft__item_click">
                                        <span></span>
                                    </div>
                                    <div className="nft__item_price">
                                        0.05 ETH<span>1/11</span>
                                    </div>
                                    <div className="nft__item_action">
                                        <a href="#">Place a bid</a>
                                    </div>
                                    <div className="nft__item_like">
                                        <i className="fa fa-heart"></i><span>97</span>
                                    </div>                                 
                                </div> 
                            </div>
                        </div>
                        
                        <div className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div className="nft__item">
                                <div className="author_list_pp">
                                    <a href="02_dark-author.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Creator: Fred Ryan">                                    
                                        <img className="lazy" src="images/author/author-12.jpg" alt="" />
                                        <i className="fa fa-check"></i>
                                    </a>
                                </div>
                                <div className="nft__item_wrap">
                                    <div className="nft__item_extra">
                                        <div className="nft__item_buttons">
                                            <button>Buy Now</button>
                                            <div className="nft__item_share">
                                                <h4>Share</h4>
                                                <a href="https://www.facebook.com/sharer/sharer.php?u=https://gigaland.io" target="_blank"><i className="fa fa-facebook fa-lg"></i></a>
                                                <a href="https://twitter.com/intent/tweet?url=https://gigaland.io" target="_blank"><i className="fa fa-twitter fa-lg"></i></a>
                                                <a href="mailto:?subject=I wanted you to see this site&amp;body=Check out this site https://gigaland.io"><i className="fa fa-envelope fa-lg"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="02_dark-item-details.html">
                                        <div className="d-placeholder"></div>
                                        <img src="images/items/static-4.jpg" className="lazy nft__item_preview" alt="" />
                                    </a>
                                </div>
                                <div className="nft__item_info">
                                    <a href="02_dark-item-details.html">
                                        <h4>Two Tigers</h4>
                                    </a>
                                    <div className="nft__item_click">
                                        <span></span>
                                    </div>
                                    <div className="nft__item_price">
                                        0.02 ETH<span>1/15</span>
                                    </div>
                                    <div className="nft__item_action">
                                        <a href="#">Place a bid</a>
                                    </div>
                                    <div className="nft__item_like">
                                        <i className="fa fa-heart"></i><span>73</span>
                                    </div>                                 
                                </div> 
                            </div>
                        </div>
                        
                        <div className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div className="nft__item">
                                <div className="author_list_pp">
                                    <a href="02_dark-author.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Creator: Franklin Greer">                                    
                                        <img className="lazy" src="images/author/author-9.jpg" alt="" />
                                        <i className="fa fa-check"></i>
                                    </a>
                                </div>
                                <div className="nft__item_wrap">
                                    <div className="nft__item_extra">
                                        <div className="nft__item_buttons">
                                            <button>Buy Now</button>
                                            <div className="nft__item_share">
                                                <h4>Share</h4>
                                                <a href="https://www.facebook.com/sharer/sharer.php?u=https://gigaland.io" target="_blank"><i className="fa fa-facebook fa-lg"></i></a>
                                                <a href="https://twitter.com/intent/tweet?url=https://gigaland.io" target="_blank"><i className="fa fa-twitter fa-lg"></i></a>
                                                <a href="mailto:?subject=I wanted you to see this site&amp;body=Check out this site https://gigaland.io"><i className="fa fa-envelope fa-lg"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="02_dark-item-details.html">
                                        <div className="d-placeholder"></div>
                                        <img src="images/items/anim-4.webp" className="lazy nft__item_preview" alt="" />
                                    </a>
                                </div>
                                <div className="nft__item_info">
                                    <a href="02_dark-item-details.html">
                                        <h4>The Truth</h4>
                                    </a>
                                    <div className="nft__item_click">
                                        <span></span>
                                    </div>
                                    <div className="nft__item_price">
                                        0.06 ETH<span>1/20</span>
                                    </div>
                                    <div className="nft__item_action">
                                        <a href="#">Place a bid</a>
                                    </div>
                                    <div className="nft__item_like">
                                        <i className="fa fa-heart"></i><span>26</span>
                                    </div>                                 
                                </div>
                            </div>
                        </div>
                        
                        <div className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div className="nft__item">
                                <div className="de_countdown" data-year="2022" data-month="6" data-day="6" data-hour="8"></div>
                                <div className="author_list_pp">
                                    <a href="02_dark-author.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Creator: Mamie Barnett">                                    
                                        <img className="lazy" src="images/author/author-2.jpg" alt="" />
                                        <i className="fa fa-check"></i>
                                    </a>
                                </div>
                                <div className="nft__item_wrap">
                                    <div className="nft__item_extra">
                                        <div className="nft__item_buttons">
                                            <button>Buy Now</button>
                                            <div className="nft__item_share">
                                                <h4>Share</h4>
                                                <a href="https://www.facebook.com/sharer/sharer.php?u=https://gigaland.io" target="_blank"><i className="fa fa-facebook fa-lg"></i></a>
                                                <a href="https://twitter.com/intent/tweet?url=https://gigaland.io" target="_blank"><i className="fa fa-twitter fa-lg"></i></a>
                                                <a href="mailto:?subject=I wanted you to see this site&amp;body=Check out this site https://gigaland.io"><i className="fa fa-envelope fa-lg"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="02_dark-item-details.html">
                                        <div className="d-placeholder"></div>
                                        <img src="images/items/anim-2.webp" className="lazy nft__item_preview" alt="" />
                                    </a>
                                </div>
                                <div className="nft__item_info">
                                    <a href="02_dark-item-details.html">
                                        <h4>Running Puppets</h4>
                                    </a>
                                    <div className="nft__item_click">
                                        <span></span>
                                    </div>
                                    <div className="nft__item_price">
                                        0.03 ETH<span>1/24</span>
                                    </div>    
                                    <div className="nft__item_action">
                                        <a href="#">Place a bid</a>
                                    </div>
                                    <div className="nft__item_like">
                                        <i className="fa fa-heart"></i><span>45</span>
                                    </div>                                  
                                </div> 
                            </div>
                        </div>
                        
                        <div className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div className="nft__item">
                                <div className="author_list_pp">
                                    <a href="02_dark-author.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Creator: Nicholas Daniels">                                    
                                        <img className="lazy" src="images/author/author-3.jpg" alt="" />
                                        <i className="fa fa-check"></i>
                                    </a>
                                </div>
                                <div className="nft__item_wrap">
                                    <div className="nft__item_extra">
                                        <div className="nft__item_buttons">
                                            <button>Buy Now</button>
                                            <div className="nft__item_share">
                                                <h4>Share</h4>
                                                <a href="https://www.facebook.com/sharer/sharer.php?u=https://gigaland.io" target="_blank"><i className="fa fa-facebook fa-lg"></i></a>
                                                <a href="https://twitter.com/intent/tweet?url=https://gigaland.io" target="_blank"><i className="fa fa-twitter fa-lg"></i></a>
                                                <a href="mailto:?subject=I wanted you to see this site&amp;body=Check out this site https://gigaland.io"><i className="fa fa-envelope fa-lg"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="02_dark-item-details.html">
                                        <div className="d-placeholder"></div>
                                        <img src="images/items/anim-1.webp" className="lazy nft__item_preview" alt="" />
                                    </a>
                                </div>
                                <div className="nft__item_info">
                                    <a href="02_dark-item-details.html">
                                        <h4>USA Wordmation</h4>
                                    </a>
                                    <div className="nft__item_click">
                                        <span></span>
                                    </div>
                                    <div className="nft__item_price">
                                        0.09 ETH<span>1/25</span>
                                    </div>
                                    <div className="nft__item_action">
                                        <a href="#">Place a bid</a>
                                    </div>
                                    <div className="nft__item_like">
                                        <i className="fa fa-heart"></i><span>76</span>
                                    </div>                                 
                                </div> 
                            </div>
                        </div>
                        
                        <div className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div className="nft__item">
                                <div className="de_countdown" data-year="2022" data-month="6" data-day="8" data-hour="8"></div>
                                <div className="author_list_pp">
                                    <a href="02_dark-author.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Creator: Lori Hart">                                    
                                        <img className="lazy" src="images/author/author-4.jpg" alt="" />
                                        <i className="fa fa-check"></i>
                                    </a>
                                </div>
                                <div className="nft__item_wrap">
                                    <div className="nft__item_extra">
                                        <div className="nft__item_buttons">
                                            <button>Buy Now</button>
                                            <div className="nft__item_share">
                                                <h4>Share</h4>
                                                <a href="https://www.facebook.com/sharer/sharer.php?u=https://gigaland.io" target="_blank"><i className="fa fa-facebook fa-lg"></i></a>
                                                <a href="https://twitter.com/intent/tweet?url=https://gigaland.io" target="_blank"><i className="fa fa-twitter fa-lg"></i></a>
                                                <a href="mailto:?subject=I wanted you to see this site&amp;body=Check out this site https://gigaland.io"><i className="fa fa-envelope fa-lg"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="02_dark-item-details.html">
                                        <div className="d-placeholder"></div>
                                        <img src="images/items/anim-5.webp" className="lazy nft__item_preview" alt="" />
                                    </a>
                                </div>
                                <div className="nft__item_info">
                                    <a href="02_dark-item-details.html">
                                        <h4>Loop Donut</h4>
                                    </a>
                                    <div className="nft__item_click">
                                        <span></span>
                                    </div>
                                    <div className="nft__item_price">
                                        0.09 ETH<span>1/14</span>
                                    </div>
                                    <div className="nft__item_action">
                                        <a href="#">Place a bid</a>
                                    </div>
                                    <div className="nft__item_like">
                                        <i className="fa fa-heart"></i><span>94</span>
                                    </div>                                 
                                </div> 
                            </div>
                        </div>
                        
                        <div className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div className="nft__item">
                                <div className="de_countdown" data-year="2022" data-month="6" data-day="16" data-hour="8"></div>
                                <div className="author_list_pp">
                                    <a href="02_dark-author.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Creator: Jimmy Wright">                                    
                                        <img className="lazy" src="images/author/author-5.jpg" alt="" />
                                        <i className="fa fa-check"></i>
                                    </a>
                                </div>
                                <div className="nft__item_wrap">
                                    <div className="nft__item_extra">
                                        <div className="nft__item_buttons">
                                            <button>Buy Now</button>
                                            <div className="nft__item_share">
                                                <h4>Share</h4>
                                                <a href="https://www.facebook.com/sharer/sharer.php?u=https://gigaland.io" target="_blank"><i className="fa fa-facebook fa-lg"></i></a>
                                                <a href="https://twitter.com/intent/tweet?url=https://gigaland.io" target="_blank"><i className="fa fa-twitter fa-lg"></i></a>
                                                <a href="mailto:?subject=I wanted you to see this site&amp;body=Check out this site https://gigaland.io"><i className="fa fa-envelope fa-lg"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="02_dark-item-details.html">
                                        <div className="d-placeholder"></div>
                                        <img src="images/items/anim-3.webp" className="lazy nft__item_preview" alt="" />
                                    </a>
                                </div>
                                <div className="nft__item_info">
                                    <a href="02_dark-item-details.html">
                                        <h4>Lady Copter</h4>
                                    </a>
                                    <div className="nft__item_click">
                                        <span></span>
                                    </div>
                                    <div className="nft__item_price">
                                        0.08 ETH<span>1/21</span>
                                    </div>
                                    <div className="nft__item_action">
                                        <a href="#">Place a bid</a>
                                    </div>
                                    <div className="nft__item_like">
                                        <i className="fa fa-heart"></i><span>75</span>
                                    </div>                                 
                                </div> 
                            </div>
                        </div>
                        
                        <div className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div className="nft__item">
                                <div className="author_list_pp">
                                    <a href="02_dark-author.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Creator: Gayle Hicks">                                    
                                        <img className="lazy" src="images/author/author-7.jpg" alt="" />
                                        <i className="fa fa-check"></i>
                                    </a>
                                </div>
                                <div className="nft__item_wrap">
                                    <div className="nft__item_extra">
                                        <div className="nft__item_buttons">
                                            <button>Buy Now</button>
                                            <div className="nft__item_share">
                                                <h4>Share</h4>
                                                <a href="https://www.facebook.com/sharer/sharer.php?u=https://gigaland.io" target="_blank"><i className="fa fa-facebook fa-lg"></i></a>
                                                <a href="https://twitter.com/intent/tweet?url=https://gigaland.io" target="_blank"><i className="fa fa-twitter fa-lg"></i></a>
                                                <a href="mailto:?subject=I wanted you to see this site&amp;body=Check out this site https://gigaland.io"><i className="fa fa-envelope fa-lg"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="02_dark-item-details.html">
                                        <div className="d-placeholder"></div>
                                        <img src="images/items/static-5.jpg" className="lazy nft__item_preview" alt="" />
                                    </a>
                                </div>
                                <div className="nft__item_info">
                                    <a href="02_dark-item-details.html">
                                        <h4>Purple Planet</h4>
                                    </a>
                                    <div className="nft__item_click">
                                        <span></span>
                                    </div>
                                    <div className="nft__item_price">
                                        0.02 ETH<span>1/18</span>
                                    </div>
                                    <div className="nft__item_action">
                                        <a href="#">Place a bid</a>
                                    </div>
                                    <div className="nft__item_like">
                                        <i className="fa fa-heart"></i><span>93</span>
                                    </div>                                 
                                </div> 
                            </div>
                        </div>
                        
                        <div className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div className="nft__item">
                                <div className="de_countdown" data-year="2022" data-month="6" data-day="16" data-hour="8"></div>
                                <div className="author_list_pp">
                                    <a href="02_dark-author.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Creator: Karla Sharp">                                    
                                        <img className="lazy" src="images/author/author-6.jpg" alt="" />
                                        <i className="fa fa-check"></i>
                                    </a>
                                </div>
                                <div className="nft__item_wrap">
                                    <div className="nft__item_extra">
                                        <div className="nft__item_buttons">
                                            <button>Buy Now</button>
                                            <div className="nft__item_share">
                                                <h4>Share</h4>
                                                <a href="https://www.facebook.com/sharer/sharer.php?u=https://gigaland.io" target="_blank"><i className="fa fa-facebook fa-lg"></i></a>
                                                <a href="https://twitter.com/intent/tweet?url=https://gigaland.io" target="_blank"><i className="fa fa-twitter fa-lg"></i></a>
                                                <a href="mailto:?subject=I wanted you to see this site&amp;body=Check out this site https://gigaland.io"><i className="fa fa-envelope fa-lg"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="02_dark-item-details.html">
                                        <div className="d-placeholder"></div>
                                        <img src="images/items/anim-6.webp" className="lazy nft__item_preview" alt="" />
                                    </a>
                                </div>
                                <div className="nft__item_info">
                                    <a href="02_dark-item-details.html">
                                        <h4>Oh Yeah!</h4>
                                    </a>
                                    <div className="nft__item_click">
                                        <span></span>
                                    </div>
                                    <div className="nft__item_price">
                                        0.025 ETH<span>1/12</span>
                                    </div>
                                    <div className="nft__item_action">
                                        <a href="#">Place a bid</a>
                                    </div>
                                    <div className="nft__item_like">
                                        <i className="fa fa-heart"></i><span>6</span>
                                    </div>                                 
                                </div> 
                            </div>
                        </div>
                        
                        <div className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div className="nft__item">
                                <div className="author_list_pp">
                                    <a href="02_dark-author.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Creator: Claude Banks">                                    
                                        <img className="lazy" src="images/author/author-8.jpg" alt="" />
                                        <i className="fa fa-check"></i>
                                    </a>
                                </div>
                                <div className="nft__item_wrap">
                                    <div className="nft__item_extra">
                                        <div className="nft__item_buttons">
                                            <button>Buy Now</button>
                                            <div className="nft__item_share">
                                                <h4>Share</h4>
                                                <a href="https://www.facebook.com/sharer/sharer.php?u=https://gigaland.io" target="_blank"><i className="fa fa-facebook fa-lg"></i></a>
                                                <a href="https://twitter.com/intent/tweet?url=https://gigaland.io" target="_blank"><i className="fa fa-twitter fa-lg"></i></a>
                                                <a href="mailto:?subject=I wanted you to see this site&amp;body=Check out this site https://gigaland.io"><i className="fa fa-envelope fa-lg"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="02_dark-item-details.html">
                                        <div className="d-placeholder"></div>
                                        <img src="images/items/anim-7.webp" className="lazy nft__item_preview" alt="" />
                                    </a>
                                </div>
                                <div className="nft__item_info">
                                    <a href="02_dark-item-details.html">
                                        <h4>This is Our Story</h4>
                                    </a>
                                    <div className="nft__item_click">
                                        <span></span>
                                    </div>
                                    <div className="nft__item_price">
                                        0.035 ETH<span>1/8</span>
                                    </div>
                                    <div className="nft__item_action">
                                        <a href="#">Place a bid</a>
                                    </div>
                                    <div className="nft__item_like">
                                        <i className="fa fa-heart"></i><span>21</span>
                                    </div>                                 
                                </div> 
                            </div>
                        </div>
                        
                        <div className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div className="nft__item">
                                <div className="author_list_pp">
                                    <a href="02_dark-author.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Creator: Franklin Greer">                                    
                                        <img className="lazy" src="images/author/author-9.jpg" alt="" />
                                        <i className="fa fa-check"></i>
                                    </a>
                                </div>
                                <div className="nft__item_wrap">
                                    <div className="nft__item_extra">
                                        <div className="nft__item_buttons">
                                            <button>Buy Now</button>
                                            <div className="nft__item_share">
                                                <h4>Share</h4>
                                                <a href="https://www.facebook.com/sharer/sharer.php?u=https://gigaland.io" target="_blank"><i className="fa fa-facebook fa-lg"></i></a>
                                                <a href="https://twitter.com/intent/tweet?url=https://gigaland.io" target="_blank"><i className="fa fa-twitter fa-lg"></i></a>
                                                <a href="mailto:?subject=I wanted you to see this site&amp;body=Check out this site https://gigaland.io"><i className="fa fa-envelope fa-lg"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="02_dark-item-details.html">
                                        <div className="d-placeholder"></div>
                                        <img src="images/items/static-6.jpg" className="lazy nft__item_preview" alt="" />
                                    </a>
                                </div>
                                <div className="nft__item_info">
                                    <a href="02_dark-item-details.html">
                                        <h4>Pixel World</h4>
                                    </a>
                                    <div className="nft__item_click">
                                        <span></span>
                                    </div>
                                    <div className="nft__item_price">
                                        0.015 ETH<span>1/25</span>
                                    </div>
                                    <div className="nft__item_action">
                                        <a href="#">Place a bid</a>
                                    </div>
                                    <div className="nft__item_like">
                                        <i className="fa fa-heart"></i><span>46</span>
                                    </div>                                 
                                </div> 
                            </div>
                        </div>
                        
                        <div className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div className="nft__item">
                                <div className="author_list_pp">
                                    <a href="02_dark-author.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Creator: Fred Ryan">                                    
                                        <img className="lazy" src="images/author/author-12.jpg" alt="" />
                                        <i className="fa fa-check"></i>
                                    </a>
                                </div>
                                <div className="nft__item_wrap">
                                    <div className="nft__item_extra">
                                        <div className="nft__item_buttons">
                                            <button>Buy Now</button>
                                            <div className="nft__item_share">
                                                <h4>Share</h4>
                                                <a href="https://www.facebook.com/sharer/sharer.php?u=https://gigaland.io" target="_blank"><i className="fa fa-facebook fa-lg"></i></a>
                                                <a href="https://twitter.com/intent/tweet?url=https://gigaland.io" target="_blank"><i className="fa fa-twitter fa-lg"></i></a>
                                                <a href="mailto:?subject=I wanted you to see this site&amp;body=Check out this site https://gigaland.io"><i className="fa fa-envelope fa-lg"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="02_dark-item-details.html">
                                        <div className="d-placeholder"></div>
                                        <img src="images/items/anim-8.webp" className="lazy nft__item_preview" alt="" />
                                    </a>
                                </div>
                                <div className="nft__item_info">
                                    <a href="02_dark-item-details.html">
                                        <h4>I Believe I Can Fly</h4>
                                    </a>
                                    <div className="nft__item_click">
                                        <span></span>
                                    </div>
                                    <div className="nft__item_price">
                                        0.055 ETH<span>1/4</span>
                                    </div>
                                    <div className="nft__item_action">
                                        <a href="#">Place a bid</a>
                                    </div>
                                    <div className="nft__item_like">
                                        <i className="fa fa-heart"></i><span>54</span>
                                    </div>                                 
                                </div> 
                            </div>
                        </div>
                        
                        <div className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div className="nft__item">
                                <div className="author_list_pp">
                                    <a href="02_dark-author.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Creator: Lori Hart">                                    
                                        <img className="lazy" src="images/author/author-4.jpg" alt="" />
                                        <i className="fa fa-check"></i>
                                    </a>
                                </div>
                                <div className="nft__item_wrap">
                                    <div className="nft__item_extra">
                                        <div className="nft__item_buttons">
                                            <button>Buy Now</button>
                                            <div className="nft__item_share">
                                                <h4>Share</h4>
                                                <a href="https://www.facebook.com/sharer/sharer.php?u=https://gigaland.io" target="_blank"><i className="fa fa-facebook fa-lg"></i></a>
                                                <a href="https://twitter.com/intent/tweet?url=https://gigaland.io" target="_blank"><i className="fa fa-twitter fa-lg"></i></a>
                                                <a href="mailto:?subject=I wanted you to see this site&amp;body=Check out this site https://gigaland.io"><i className="fa fa-envelope fa-lg"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="02_dark-item-details.html">
                                        <div className="d-placeholder"></div>
                                        <img src="images/items/static-7.jpg" className="lazy nft__item_preview" alt="" />
                                    </a>
                                </div>
                                <div className="nft__item_info">
                                    <a href="02_dark-item-details.html">
                                        <h4>Cute Astronout</h4>
                                    </a>
                                    <div className="nft__item_click">
                                        <span></span>
                                    </div>
                                    <div className="nft__item_price">
                                        0.005 ETH<span>1/30</span>
                                    </div>
                                    <div className="nft__item_action">
                                        <a href="#">Place a bid</a>
                                    </div>
                                    <div className="nft__item_like">
                                        <i className="fa fa-heart"></i><span>32</span>
                                    </div>                                 
                                </div> 
                            </div>
                        </div>
                        
                        <div className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12">
                            <div className="nft__item">
                                <div className="author_list_pp">
                                    <a href="02_dark-author.html" data-bs-toggle="tooltip" data-bs-placement="top" title="Creator: Monica Lucas">                                    
                                        <img className="lazy" src="images/author/author-1.jpg" alt="" />
                                        <i className="fa fa-check"></i>
                                    </a>
                                </div>
                                <div className="nft__item_wrap">
                                    <div className="nft__item_extra">
                                        <div className="nft__item_buttons">
                                            <button>Buy Now</button>
                                            <div className="nft__item_share">
                                                <h4>Share</h4>
                                                <a href="https://www.facebook.com/sharer/sharer.php?u=https://gigaland.io" target="_blank"><i className="fa fa-facebook fa-lg"></i></a>
                                                <a href="https://twitter.com/intent/tweet?url=https://gigaland.io" target="_blank"><i className="fa fa-twitter fa-lg"></i></a>
                                                <a href="mailto:?subject=I wanted you to see this site&amp;body=Check out this site https://gigaland.io"><i className="fa fa-envelope fa-lg"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <a href="02_dark-item-details.html">
                                        <div className="d-placeholder"></div>
                                        <img src="images/items/static-8.jpg" className="lazy nft__item_preview" alt="" />
                                    </a>
                                </div>
                                <div className="nft__item_info">
                                    <a href="02_dark-item-details.html">
                                        <h4>Teal Ocean</h4>
                                    </a>
                                    <div className="nft__item_click">
                                        <span></span>
                                    </div>
                                    <div className="nft__item_price">
                                        0.025 ETH<span>1/12</span>
                                    </div>
                                    <div className="nft__item_action">
                                        <a href="#">Place a bid</a>
                                    </div>
                                    <div className="nft__item_like">
                                        <i className="fa fa-heart"></i><span>24</span>
                                    </div>                                 
                                </div> 
                            </div>
                        </div>

                        <div className="col-md-12 text-center">
                            <a href="#" id="loadmore" className="btn-main wow fadeInUp lead">Load more</a>
                        </div>                                              
                    </div>
                </div>
            </section>
            <a href="#" id="back-to-top"></a>
        </div>
    );
};

export default Explorer;