import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
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
      <div>
        <div className="no-bottom no-top" id="content">
            <div id="top"></div>
            <section id="section-hero" aria-label="section" className="no-top no-bottom vh-100" data-bgimage="url(images/background/bg-shape-1-dark.jpg) bottom">
                <div className="v-center">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <div className="spacer-single"></div>
                                <h6 className="wow fadeInUp" data-wow-delay=".5s"><span className="text-uppercase id-color-2">The First Market</span></h6>
                                <div className="spacer-10"></div>
                                <h1 className="wow fadeInUp" data-wow-delay=".75s">Gaming NFTs Marketplace</h1>
                                <p className="wow fadeInUp lead" data-wow-delay="1s">Discover, collect, and sell exclusive NFTs, straight from the world of gaming</p>
                                <div className="spacer-10"></div>
                                <NavLink to={"/"} className="btn-main wow fadeInUp lead" data-wow-delay="1.25s">Explore</NavLink>
                                <div className="mb-sm-30"></div>
                            </div>
                            <div className="col-md-6 xs-hide">
                                <img src="images/misc/nft.png" className="lazy img-fluid wow fadeIn" data-wow-delay="1.25s" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="section-intro" className="no-top no-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 mb-sm-30">
                            <div className="feature-box f-boxed style-3">
                                <i className="wow fadeInUp bg-color-2 i-boxed icon_wallet"></i>
                                <div className="text">
                                    <h4 className="wow fadeInUp">Set up your wallet</h4>
                                    <p className="wow fadeInUp" data-wow-delay=".25s">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.</p>
                                </div>
                                <i className="wm icon_wallet"></i>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-sm-30">
                            <div className="feature-box f-boxed style-3">
                                <i className="wow fadeInUp bg-color-2 i-boxed icon_cloud-upload_alt"></i>
                                <div className="text">
                                    <h4 className="wow fadeInUp">Add your NFT's</h4>
                                    <p className="wow fadeInUp" data-wow-delay=".25s">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.</p>
                                </div>
                                <i className="wm icon_cloud-upload_alt"></i>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-sm-30">
                            <div className="feature-box f-boxed style-3">
                                <i className="wow fadeInUp bg-color-2 i-boxed icon_tags_alt"></i>
                                <div className="text">
                                    <h4 className="wow fadeInUp">Sell your NFT's</h4>
                                    <p className="wow fadeInUp" data-wow-delay=".25s">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.</p>
                                </div>
                                <i className="wm icon_tags_alt"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </section>            

            <section id="section-collections" className="no-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="text-center">
                                <h2>Hot Collections</h2>
                                <div className="small-border bg-color-2"></div>
                            </div>
                        </div>
                        <div id="collection-carousel" className="owl-carousel wow fadeIn">
                                <div className="nft_coll">
                                    <div className="nft_wrap">
                                      <NavLink to="/"><img src="images/collections/coll-1.jpg" className="lazy img-fluid" alt="" /></NavLink>
                                    </div>
                                    <div className="nft_coll_pp">
                                      <NavLink to="/"><img className="lazy pp-coll" src="images/author/author-1.jpg" alt="" /></NavLink>
                                        <i className="fa fa-check"></i>
                                    </div>
                                    <div className="nft_coll_info">
                                      <NavLink to="/"><h4>Abstraction</h4></NavLink>
                                        <span>ERC-192</span>
                                    </div>
                                </div>
                            
                                <div className="nft_coll">
                                    <div className="nft_wrap">
                                      <NavLink to="/"><img src="images/collections/coll-2.jpg" className="lazy img-fluid" alt="" /></NavLink>
                                    </div>
                                    <div className="nft_coll_pp">
                                      <NavLink to="/"><img className="lazy pp-coll" src="images/author/author-2.jpg" alt="" /></NavLink>
                                        <i className="fa fa-check"></i>
                                    </div>
                                    <div className="nft_coll_info">
                                      <NavLink to="/"><h4>Patternlicious</h4></NavLink>
                                        <span>ERC-61</span>
                                    </div>
                                </div>
                            
                                <div className="nft_coll">
                                    <div className="nft_wrap">
                                      <NavLink to="/"><img src="images/collections/coll-3.jpg" className="lazy img-fluid" alt="" /></NavLink>
                                    </div>
                                    <div className="nft_coll_pp">
                                      <NavLink to="/"><img className="lazy pp-coll" src="images/author/author-3.jpg" alt="" /></NavLink>
                                        <i className="fa fa-check"></i>
                                    </div>
                                    <div className="nft_coll_info">
                                      <NavLink to="/"><h4>Skecthify</h4></NavLink>
                                        <span>ERC-126</span>
                                    </div>
                                </div>
                            
                                <div className="nft_coll">
                                    <div className="nft_wrap">
                                      <NavLink to="/"><img src="images/collections/coll-4.jpg" className="lazy img-fluid" alt="" /></NavLink>
                                    </div>
                                    <div className="nft_coll_pp">
                                      <NavLink to="/"><img className="lazy pp-coll" src="images/author/author-4.jpg" alt="" /></NavLink>
                                        <i className="fa fa-check"></i>
                                    </div>
                                    <div className="nft_coll_info">
                                      <NavLink to="/"><h4>Cartoonism</h4></NavLink>
                                        <span>ERC-73</span>
                                    </div>
                                </div>
                            
                                <div className="nft_coll">
                                    <div className="nft_wrap">
                                      <NavLink to="/"><img src="images/collections/coll-5.jpg" className="lazy img-fluid" alt="" /></NavLink>
                                    </div>
                                    <div className="nft_coll_pp">
                                      <NavLink to="/"><img className="lazy pp-coll" src="images/author/author-5.jpg" alt="" /></NavLink>
                                        <i className="fa fa-check"></i>
                                    </div>
                                    <div className="nft_coll_info">
                                      <NavLink to="/"><h4>Virtuland</h4></NavLink>
                                        <span>ERC-85</span>
                                    </div>
                                </div>
                            
                                <div className="nft_coll">
                                    <div className="nft_wrap">
                                      <NavLink to="/"><img src="images/collections/coll-6.jpg" className="lazy img-fluid" alt="" /></NavLink>
                                    </div>
                                    <div className="nft_coll_pp">
                                      <NavLink to="/"><img className="lazy pp-coll" src="images/author/author-6.jpg" alt="" /></NavLink>
                                        <i className="fa fa-check"></i>
                                    </div>
                                    <div className="nft_coll_info">
                                      <NavLink to="/"><h4>Papercut</h4></NavLink>
                                        <span>ERC-42</span>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </section>

            <section id="section-items" className="no-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="text-center">
                                <h2>New Items</h2>
                                <div className="small-border bg-color-2"></div>
                            </div>
                        </div>
                        <div id="items-carousel" className="owl-carousel wow fadeIn">
                                <div className="d-item">
                                    <div className="nft__item">
                                        <div className="de_countdown" data-year="2022" data-month="6" data-day="16" data-hour="8"></div>
                                        <div className="author_list_pp">
                                            <NavLink to={"/"} data-bs-toggle="tooltip" data-bs-placement="top" title="Creator: Monica Lucas">                                    
                                                <img className="lazy" src="images/author/author-1.jpg" alt="" />
                                                <i className="fa fa-check"></i>
                                            </NavLink>
                                        </div>
                                        <div className="nft__item_wrap">
                                            <div className="nft__item_extra">
                                                <div className="nft__item_buttons">
                                                    <button>Buy Now</button>
                                                    <div className="nft__item_share">
                                                        <h4>Share</h4>
                                                        <NavLink to="" target="_blank"><i className="fa fa-facebook fa-lg"></i></NavLink>
                                                        <NavLink to="" target="_blank"><i className="fa fa-twitter fa-lg"></i></NavLink>
                                                        <NavLink to=""><i className="fa fa-envelope fa-lg"></i></NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                            <NavLink to={"/"}>
                                              <img src="images/items/static-1.jpg" className="lazy nft__item_preview" alt="" />
                                            </NavLink>
                                        </div>
                                        <div className="nft__item_info">
                                            <NavLink to={"/"}>
                                                <h4>Pinky Ocean</h4>
                                            </NavLink>
                                            <div className="nft__item_click">
                                        <span></span>
                                    </div>
                                    <div className="nft__item_price">
                                                0.08 ETH<span>1/20</span>
                                            </div>
                                            <div className="nft__item_action">
                                              <NavLink to={"/"}>Place a bid</NavLink>
                                            </div>
                                            <div className="nft__item_like">
                                                <i className="fa fa-heart"></i><span>50</span>
                                            </div>                            
                                        </div> 
                                    </div>
                                </div>                 
                                <div className="d-item">
                                    <div className="nft__item">
                                        <div className="author_list_pp">
                                            <NavLink to={"/"} data-bs-toggle="tooltip" data-bs-placement="top" title="Creator: Stacy Long">                                    
                                                <img className="lazy" src="images/author/author-10.jpg" alt="" />
                                                <i className="fa fa-check"></i>
                                            </NavLink>
                                        </div>
                                        <div className="nft__item_wrap">
                                            <div className="nft__item_extra">
                                                <div className="nft__item_buttons">
                                                    <button>Buy Now</button>
                                                    <div className="nft__item_share">
                                                        <h4>Share</h4>
                                                        <NavLink to={"/"}><i className="fa fa-facebook fa-lg"></i></NavLink>
                                                        <NavLink to={"/"}><i className="fa fa-twitter fa-lg"></i></NavLink>
                                                        <NavLink to={"/"}><i className="fa fa-envelope fa-lg"></i></NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                            <NavLink to={"/"}>
                                                <img src="images/items/static-2.jpg" className="lazy nft__item_preview" alt="" />
                                            </NavLink>
                                        </div>
                                        <div className="nft__item_info">
                                            <NavLink to={"/"}>
                                                <h4>Deep Sea Phantasy</h4>
                                            </NavLink>
                                            <div className="nft__item_click">
                                        <span></span>
                                    </div>
                                    <div className="nft__item_price">
                                                0.06 ETH<span>1/22</span>
                                            </div>
                                            <div className="nft__item_action">
                                              <NavLink to={"/"}>Place a bid</NavLink>
                                            </div>
                                            <div className="nft__item_like">
                                                <i className="fa fa-heart"></i><span>80</span>
                                            </div>                                 
                                        </div> 
                                    </div>
                                </div>
                                <div className="d-item">
                                    <div className="nft__item">
                                        <div className="de_countdown" data-year="2022" data-month="6" data-day="14" data-hour="8"></div>
                                        <div className="author_list_pp">
                                            <NavLink to={"/"} data-bs-toggle="tooltip" data-bs-placement="top" title="Creator: Ida Chapman">                                    
                                                <img className="lazy" src="images/author/author-11.jpg" alt="" />
                                                <i className="fa fa-check"></i>
                                            </NavLink>
                                        </div>
                                        <div className="nft__item_wrap">
                                            <div className="nft__item_extra">
                                                <div className="nft__item_buttons">
                                                    <button>Buy Now</button>
                                                    <div className="nft__item_share">
                                                        <h4>Share</h4>
                                                        <NavLink to={"/"}><i className="fa fa-facebook fa-lg"></i></NavLink>
                                                        <NavLink to={"/"}><i className="fa fa-twitter fa-lg"></i></NavLink>
                                                        <NavLink to={"/"}><i className="fa fa-envelope fa-lg"></i></NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                            <NavLink to={"/"}>
                                                <img src="images/items/static-3.jpg" className="lazy nft__item_preview" alt="" />
                                            </NavLink>
                                        </div>
                                        <div className="nft__item_info">
                                            <NavLink to={"/"}>
                                                <h4>Rainbow Style</h4>
                                            </NavLink>
                                            <div className="nft__item_click">
                                        <span></span>
                                    </div>
                                    <div className="nft__item_price">
                                                0.05 ETH<span>1/11</span>
                                            </div>
                                            <div className="nft__item_action">
                                              <NavLink to={"/"}>Place a bid</NavLink>
                                            </div>
                                            <div className="nft__item_like">
                                                <i className="fa fa-heart"></i><span>97</span>
                                            </div>                                 
                                        </div> 
                                    </div>
                                </div>
                                <div className="d-item">
                                    <div className="nft__item">
                                        <div className="author_list_pp">
                                            <NavLink to={"/"} data-bs-toggle="tooltip" data-bs-placement="top" title="Creator: Fred Ryan">                                    
                                                <img className="lazy" src="images/author/author-12.jpg" alt="" />
                                                <i className="fa fa-check"></i>
                                            </NavLink>
                                        </div>
                                        <div className="nft__item_wrap">
                                            <div className="nft__item_extra">
                                                <div className="nft__item_buttons">
                                                    <button>Buy Now</button>
                                                    <div className="nft__item_share">
                                                        <h4>Share</h4>
                                                        <NavLink to={"/"}><i className="fa fa-facebook fa-lg"></i></NavLink>
                                                        <NavLink to={"/"}><i className="fa fa-twitter fa-lg"></i></NavLink>
                                                        <NavLink to={"/"}><i className="fa fa-envelope fa-lg"></i></NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                            <NavLink to={"/"}>
                                                <img src="images/items/static-4.jpg" className="lazy nft__item_preview" alt="" />
                                            </NavLink>
                                        </div>
                                        <div className="nft__item_info">
                                            <NavLink to={"/"}>
                                                <h4>Two Tigers</h4>
                                            </NavLink>
                                            <div className="nft__item_click">
                                        <span></span>
                                    </div>
                                    <div className="nft__item_price">
                                                0.02 ETH<span>1/15</span>
                                            </div>
                                            <div className="nft__item_action">
                                                <NavLink to={"/"}>Place a bid</NavLink>
                                            </div>
                                            <div className="nft__item_like">
                                                <i className="fa fa-heart"></i><span>73</span>
                                            </div>                                 
                                        </div> 
                                    </div>
                                </div>
                                <div className="d-item">
                                    <div className="nft__item">
                                        <div className="author_list_pp">
                                            <NavLink to={"/"} data-bs-toggle="tooltip" data-bs-placement="top" title="Creator: Franklin Greer">                                    
                                                <img className="lazy" src="images/author/author-9.jpg" alt="" />
                                                <i className="fa fa-check"></i>
                                            </NavLink>
                                        </div>
                                        <div className="nft__item_wrap">
                                            <div className="nft__item_extra">
                                                <div className="nft__item_buttons">
                                                    <button>Buy Now</button>
                                                    <div className="nft__item_share">
                                                        <h4>Share</h4>
                                                        <NavLink to={"/"}><i className="fa fa-facebook fa-lg"></i></NavLink>
                                                        <NavLink to={"/"}><i className="fa fa-twitter fa-lg"></i></NavLink>
                                                        <NavLink to={"/"}><i className="fa fa-envelope fa-lg"></i></NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                            <NavLink to={"/"}>
                                                <img src="images/items/anim-4.webp" className="lazy nft__item_preview" alt="" />
                                            </NavLink>
                                        </div>
                                        <div className="nft__item_info">
                                            <NavLink to={"/"}>
                                                <h4>The Truth</h4>
                                            </NavLink>
                                            <div className="nft__item_click">
                                        <span></span>
                                    </div>
                                    <div className="nft__item_price">
                                                0.06 ETH<span>1/20</span>
                                            </div>
                                            <div className="nft__item_action">
                                                <NavLink to={"/"}>Place a bid</NavLink>
                                            </div>
                                            <div className="nft__item_like">
                                                <i className="fa fa-heart"></i><span>26</span>
                                            </div>                                 
                                        </div>
                                    </div>
                                </div>
                                <div className="d-item">
                                    <div className="nft__item">
                                        <div className="de_countdown" data-year="2022" data-month="6" data-day="6" data-hour="8"></div>
                                        <div className="author_list_pp">
                                            <NavLink to={"/"} data-bs-toggle="tooltip" data-bs-placement="top" title="Creator: Mamie Barnett">                                    
                                                <img className="lazy" src="images/author/author-2.jpg" alt="" />
                                                <i className="fa fa-check"></i>
                                            </NavLink>
                                        </div>
                                        <div className="nft__item_wrap">
                                            <div className="nft__item_extra">
                                                <div className="nft__item_buttons">
                                                    <button>Buy Now</button>
                                                    <div className="nft__item_share">
                                                        <h4>Share</h4>
                                                        <NavLink to={"/"}><i className="fa fa-facebook fa-lg"></i></NavLink>
                                                        <NavLink to={"/"}><i className="fa fa-twitter fa-lg"></i></NavLink>
                                                        <NavLink to={"/"}><i className="fa fa-envelope fa-lg"></i></NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                            <NavLink to={"/"}>
                                                <img src="images/items/anim-2.webp" className="lazy nft__item_preview" alt="" />
                                            </NavLink>
                                        </div>
                                        <div className="nft__item_info">
                                            <NavLink to={"/"}>
                                                <h4>Running Puppets</h4>
                                            </NavLink>
                                            <div className="nft__item_click">
                                        <span></span>
                                    </div>
                                    <div className="nft__item_price">
                                                0.03 ETH<span>1/24</span>
                                            </div>    
                                            <div className="nft__item_action">
                                                <NavLink to={"/"}>Place a bid</NavLink>
                                            </div>
                                            <div className="nft__item_like">
                                                <i className="fa fa-heart"></i><span>45</span>
                                            </div>                                  
                                        </div> 
                                    </div>
                                </div>
                                <div className="d-item">
                                    <div className="nft__item">
                                        <div className="author_list_pp">
                                            <NavLink to={"/"} data-bs-toggle="tooltip" data-bs-placement="top" title="Creator: Nicholas Daniels">                                    
                                                <img className="lazy" src="images/author/author-3.jpg" alt="" />
                                                <i className="fa fa-check"></i>
                                            </NavLink>
                                        </div>
                                        <div className="nft__item_wrap">
                                            <div className="nft__item_extra">
                                                <div className="nft__item_buttons">
                                                    <button>Buy Now</button>
                                                    <div className="nft__item_share">
                                                        <h4>Share</h4>
                                                        <NavLink to={"/"}><i className="fa fa-facebook fa-lg"></i></NavLink>
                                                        <NavLink to={"/"}><i className="fa fa-twitter fa-lg"></i></NavLink>
                                                        <NavLink to={"/"}><i className="fa fa-envelope fa-lg"></i></NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                            <NavLink to={"/"}>
                                                <img src="images/items/anim-1.webp" className="lazy nft__item_preview" alt="" />
                                            </NavLink>
                                        </div>
                                        <div className="nft__item_info">
                                            <NavLink to={"/"}>
                                                <h4>USA Wordmation</h4>
                                            </NavLink>
                                            <div className="nft__item_click">
                                        <span></span>
                                    </div>
                                    <div className="nft__item_price">
                                                0.09 ETH<span>1/25</span>
                                            </div>
                                            <div className="nft__item_action">
                                              <NavLink to={"/"}>Place a bid</NavLink>
                                            </div>
                                            <div className="nft__item_like">
                                                <i className="fa fa-heart"></i><span>76</span>
                                            </div>                                 
                                        </div> 
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </section>

            <section id="section-popular" className="pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="text-center">
                                <h2>Top Sellers</h2>
                                <div className="small-border bg-color-2"></div>
                            </div>
                        </div>
                        <div className="col-md-12 wow fadeIn">
                            <ol className="author_list">
                                <li>                                    
                                    <div className="author_list_pp">
                                        <NavLink to={"/"}>
                                            <img className="lazy" src="images/author/author-1.jpg" alt="" />
                                            <i className="fa fa-check"></i>
                                        </NavLink>
                                    </div>                                    
                                    <div className="author_list_info">
                                        <NavLink to={"/"}>Monica Lucas</NavLink>
                                        <span>3.2 ETH</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="author_list_pp">
                                        <NavLink to={"/"}>                                  
                                            <img className="lazy pp-author" src="images/author/author-2.jpg" alt="" />
                                            <i className="fa fa-check"></i>
                                        </NavLink>
                                    </div>
                                    <div className="author_list_info">
                                        <NavLink to={"/"}>Mamie Barnett</NavLink>
                                        <span>2.8 ETH</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="author_list_pp">
                                        <NavLink to={"/"}>                               
                                            <img className="lazy pp-author" src="images/author/author-3.jpg" alt="" />
                                            <i className="fa fa-check"></i>
                                        </NavLink>
                                    </div>
                                    <div className="author_list_info">
                                        <NavLink to={"/"}>Nicholas Daniels</NavLink>
                                        <span>2.5 ETH</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="author_list_pp">
                                        <NavLink to={"/"}>                                  
                                            <img className="lazy pp-author" src="images/author/author-4.jpg" alt="" />
                                            <i className="fa fa-check"></i>
                                        </NavLink>
                                    </div>
                                    <div className="author_list_info">
                                        <NavLink to={"/"}>Lori Hart</NavLink>
                                        <span>2.2 ETH</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="author_list_pp">
                                        <NavLink to={"/"}>                                    
                                            <img className="lazy pp-author" src="images/author/author-5.jpg" alt="" />
                                            <i className="fa fa-check"></i>
                                        </NavLink>
                                    </div>
                                    <div className="author_list_info">
                                        <NavLink to={"/"}>Jimmy Wright</NavLink>
                                        <span>1.9 ETH</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="author_list_pp">
                                        <NavLink to={"/"}>                                
                                            <img className="lazy pp-author" src="images/author/author-6.jpg" alt="" />
                                            <i className="fa fa-check"></i>
                                        </NavLink>
                                    </div>
                                    <div className="author_list_info">
                                      <NavLink to={"/"}>Karla Sharp</NavLink>
                                        <span>1.6 ETH</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="author_list_pp">
                                        <NavLink to={"/"}>                                    
                                            <img className="lazy pp-author" src="images/author/author-7.jpg" alt="" />
                                            <i className="fa fa-check"></i>
                                        </NavLink>
                                    </div>
                                    <div className="author_list_info">
                                        <NavLink to={"/"}>Gayle Hicks</NavLink>
                                        <span>1.5 ETH</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="author_list_pp">
                                        <NavLink to={"/"}>                                 
                                            <img className="lazy pp-author" src="images/author/author-8.jpg" alt="" />
                                            <i className="fa fa-check"></i>
                                        </NavLink>
                                    </div>
                                    <div className="author_list_info">
                                        <NavLink to={"/"}>Claude Banks</NavLink>
                                        <span>1.3 ETH</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="author_list_pp">
                                        <NavLink to={"/"}>                              
                                            <img className="lazy pp-author" src="images/author/author-9.jpg" alt="" />
                                            <i className="fa fa-check"></i>
                                        </NavLink>
                                    </div>
                                    <div className="author_list_info">
                                        <NavLink to={"/"}>Franklin Greer</NavLink>
                                        <span>0.9 ETH</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="author_list_pp">
                                        <NavLink to={"/"}>                                  
                                            <img className="lazy pp-author" src="images/author/author-10.jpg" alt="" />
                                            <i className="fa fa-check"></i>
                                        </NavLink>
                                    </div>
                                    <div className="author_list_info">
                                    <NavLink to={"/"}>Stacy Long</NavLink>
                                        <span>0.8 ETH</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="author_list_pp">
                                        <NavLink to={"/"}>                                  
                                            <img className="lazy pp-author" src="images/author/author-11.jpg" alt="" />
                                            <i className="fa fa-check"></i>
                                        </NavLink>
                                    </div>
                                    <div className="author_list_info">
                                    <NavLink to={"/"}>Ida Chapman</NavLink>
                                        <span>0.6 ETH</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="author_list_pp">
                                        <NavLink to={"/"}>                                   
                                            <img className="lazy pp-author" src="images/author/author-12.jpg" alt="" />
                                            <i className="fa fa-check"></i>
                                        </NavLink>
                                    </div>
                                    <div className="author_list_info">
                                        <NavLink to={"/"}>Fred Ryan</NavLink>
                                        <span>0.5 eth</span>
                                    </div>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>        
            <section id="section-category" className="no-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="text-center">
                                <h2>Browse by category</h2>
                                <div className="small-border bg-color-2"></div>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-4 col-6 mb-sm-30 wow fadeInRight" data-wow-delay=".1s">
                            <NavLink to={"/"} className="icon-box style-2 rounded">
                                <i className="fa fa-image"></i>
                                <span>Art</span>
                            </NavLink>
                        </div>
                        <div className="col-md-2 col-sm-4 col-6 mb-sm-30 wow fadeInRight" data-wow-delay=".2s">
                            <NavLink to={"/"} className="icon-box style-2 rounded">
                                <i className="fa fa-music"></i>
                                <span>Music</span>
                            </NavLink>
                        </div>
                        <div className="col-md-2 col-sm-4 col-6 mb-sm-30 wow fadeInRight" data-wow-delay=".3s">
                            <NavLink to={"/"} className="icon-box style-2 rounded">
                                <i className="fa fa-search"></i>
                                <span>Domain Names</span>
                            </NavLink>
                        </div>
                        <div className="col-md-2 col-sm-4 col-6 mb-sm-30 wow fadeInRight" data-wow-delay=".4s">
                            <NavLink to={"/"} className="icon-box style-2 rounded">
                                <i className="fa fa-globe"></i>
                                <span>Virtual Worlds</span>
                            </NavLink>
                        </div>
                        <div className="col-md-2 col-sm-4 col-6 mb-sm-30 wow fadeInRight" data-wow-delay=".5s">
                            <NavLink to={"/"} className="icon-box style-2 rounded">
                                <i className="fa fa-vcard"></i>
                                <span>Trading Cards</span>
                            </NavLink>
                        </div>
                        <div className="col-md-2 col-sm-4 col-6 mb-sm-30 wow fadeInRight" data-wow-delay=".6s">
                            <NavLink to={"/"} className="icon-box style-2 rounded">
                                <i className="fa fa-th"></i>
                                <span>Collectibles</span>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </section>     
        </div>
        <NavLink to="#" id="back-to-top"></NavLink>
      </div>
    );
};

export default Home;