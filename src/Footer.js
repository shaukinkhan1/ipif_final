import React from 'react';

class Footer extends React.Component {
    render(){
        return(
            <div>
            <div className="back-to-top">
                <div className="container">
                   <p>Back To Top</p>
                </div>
            </div>

            <footer>
                <div className="container flexible">
                    <div className="footer-box1">
                        <h3>About Us</h3>
                        <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</p>
                        <a className="readmore" href="#">Read More</a>
                        <p><i className="fa fa-phone"></i>+321 XX0-000-XXX</p>
                        <p><i className="fa fa-envelope"></i>admin@admin.com</p>
                        <p><i className="fa fa-map-marker"></i>123, Block XYZ 1100235</p>
                    </div>
                    <div className="footer-box2">
                        <h3>Quick Links</h3>
                         <ul>
                             <li><a href="#">Frequently Asked Questions</a></li>
                             <li><a href="#">Offer & Discount</a></li>
                             <li><a href="#">Privacy Policy</a></li>
                             <li><a href="#">Terms & Conditions</a></li>
                             <li><a href="#">Help & Support</a></li>
                         </ul>
                    </div>
                    <div className="footer-box3">
                        <h3>Contact Us</h3>
                        <form>
                            <input type="text" className="myinput" placeholder="Enter Email" />
                            <textarea className="myinput" placeholder="Type Message..."></textarea>
                            <button className="submitbtn">SUBMIT</button>
                        </form>
                    </div>
                </div>

            <div className="footer-bottom">
                <div className="container flexible">
                    <div className="box1">
                        <p>Experience IPIF Gift App On Mobile</p>
                        <div className="wrap-img">
                        <img src={process.env.PUBLIC_URL + "/images/android.png"} alt="init-img" />
                        <img src={process.env.PUBLIC_URL + "/images/ios.png"} alt="init-img" />
                        </div>
                    </div>
                    <div className="box2">
                        <p>Copyright © 2020 IPIF. All Rights Reserved.</p>
                    </div>
                    <div className="box3">
                        <p>Keep In Touch</p>
                        <i className="fa fa-facebook"></i>
                        <i className="fa fa-twitter"></i>
                        <i className="fa fa-linkedin"></i>
                    </div>
                </div>
            </div>
            </footer>
            </div>
        )

    }
}

export default Footer;