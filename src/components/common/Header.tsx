import { FC } from 'react'

interface HeaderProps {
  
}

const Header: FC<HeaderProps> = ({}) => {
    return (
      <header>
        <div className="main_header">
          {/* <!--header top start--> */}
          <div className="header_top">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-6">
                  <div className="support_info">
                    <p>
                      Email: <a href="mailto:">support@drophunt.com</a>
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="top_right text-right">
                    <ul>
                      <li>
                        <a href="my-account.html">Account</a>
                      </li>
                      <li>
                        <a href="checkout.html">Checkout</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!--header top start--> */}
          {/* <!--header middel start--> */}
          <div className="header_middle">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-3 col-md-6">
                  <div className="logo">
                    <a href="index-2.html">
                      <img src="assets/img/logo/logo.png" alt="" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-9 col-md-6">
                  <div className="middel_right">
                    <div className="search_container">
                      <form action="#">
                        <div className="search_box">
                          <input placeholder="Search product..." type="text" />
                          <button type="submit">Search</button>
                        </div>
                      </form>
                    </div>
                    {/* <div className="middel_right_info">
                                    <div className="header_wishlist">
                                        <a href="#"><img src="assets/img/user.png" alt=""/></a>
                                    </div>
                                    <div className="mini_cart_wrapper">
                                        <a href="javascript:void(0)"><img src="assets/img/shopping-bag.png" alt=""/></a>
                                        <span className="cart_quantity">2</span>
                                        
                                         <div className="mini_cart">
                                            <div className="cart_item">
                                               <div className="cart_img">
                                                   <a href="#"><img src="assets/img/s-product/product.jpg" alt=""/></a>
                                               </div>
                                                <div className="cart_info">
                                                    <a href="#">Sit voluptatem rhoncus sem lectus</a>
                                                    <p>Qty: 1 X <span> $60.00 </span></p>    
                                                </div>
                                                <div className="cart_remove">
                                                    <a href="#"><i className="ion-android-close"></i></a>
                                                </div>
                                            </div>
                                            <div className="cart_item">
                                               <div className="cart_img">
                                                   <a href="#"><img src="assets/img/s-product/product2.jpg" alt=""/></a>
                                               </div>
                                                <div className="cart_info">
                                                    <a href="#">Natus erro at congue massa commodo</a>
                                                    <p>Qty: 1 X <span> $60.00 </span></p>   
                                                </div>
                                                <div className="cart_remove">
                                                    <a href="#"><i className="ion-android-close"></i></a>
                                                </div>
                                            </div>
                                            <div className="mini_cart_table">
                                                <div className="cart_total">
                                                    <span>Sub total:</span>
                                                    <span className="price">$138.00</span>
                                                </div>
                                                <div className="cart_total mt-10">
                                                    <span>total:</span>
                                                    <span className="price">$138.00</span>
                                                </div>
                                            </div>

                                            <div className="mini_cart_footer">
                                               <div className="cart_button">
                                                    <a href="cart.html">View cart</a>
                                                </div>
                                                <div className="cart_button">
                                                    <a href="checkout.html">Checkout</a>
                                                </div>

                                            </div>

                                        </div>
                                      
                                    </div>
                                </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!--header middel end--> */}
          {/* <!--header bottom satrt--> */}
          <div className="main_menu_area">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-12 col-md-12">
                  <div className="main_menu menu_position">
                    <nav>
                      <ul>
                        <li>
                          <a href="index-2.html">home</a>
                        </li>
                        <li>
                          <a href="product-details.html">Product</a>
                        </li>

                        <li>
                          <a className="active" href="#">
                            pages <i className="fa fa-angle-down"></i>
                          </a>
                          <ul className="sub_menu pages">
                            <li>
                              <a href="about.html">About Us</a>
                            </li>
                            <li>
                              <a href="contact.html">contact</a>
                            </li>
                            <li>
                              <a href="privacy-policy.html">privacy policy</a>
                            </li>
                            <li>
                              <a href="faq.html">Frequently Questions</a>
                            </li>
                            <li>
                              <a href="login.html">login</a>
                            </li>
                            <li>
                              <a href="register.html">register</a>
                            </li>
                            <li>
                              <a href="forget-password.html">Forget Password</a>
                            </li>
                            <li>
                              <a href="404.html">Error 404</a>
                            </li>
                            <li>
                              <a href="cart.html">cart</a>
                            </li>
                            <li>
                              <a href="tracking.html">tracking</a>
                            </li>
                            <li>
                              <a href="checkout.html">checkout</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="blog.html">
                            blog<i className="fa fa-angle-down"></i>
                          </a>
                          <ul className="sub_menu pages">
                            <li>
                              <a href="blog.html">blog</a>
                            </li>
                            <li>
                              <a href="blog-details.html">blog details</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="contact.html"> Contact Us</a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!--header bottom end--> */}
        </div>
      </header>
    );
}

export default Header