import React from 'react';

class Home extends React.Component {

    render(){
      return (
            <div>
                    <div className="banner-sec">
                      <div className="banner-img">
                        <img src={process.env.PUBLIC_URL + "/images/banner.jpg"} alt="banner" width="100%" />
                      </div>
                      <div className="banner-cont">
                      <div className="container flexible">
                        <div className="div1">
                        <p><img src={process.env.PUBLIC_URL + "/images/send.png"} alt="banner" width="100%" /></p>
                        </div>
                        <div className="div2">
                          <h1>GIFTS<br /> FOR EVERYONE</h1>
                        </div>
                        <div className="div3">
                        <p><img src={process.env.PUBLIC_URL + "/images/redeem.png"} alt="banner" width="100%" /></p>
                        </div>
                      </div>
                      </div>
                    </div>
            
                  <section className="mysection mt">
                    <div className="container">
                        <div className="row">
                          <div className="col-lg-4 init order-lg-1 order-sm-2 order-md-2">
                            <p><img src={process.env.PUBLIC_URL + "/images/init-img.png"} alt="init-img" width="100%" /></p>

                            <img className="image1 wow zoomIn" data-wow-duration="1.3s" data-wow-delay="1s" src={process.env.PUBLIC_URL + "/images/popup-img.png"} alt="popup-img" />

                            <img className="image2 wow slideInRight" data-wow-duration="1s" data-wow-delay=".5s" src={process.env.PUBLIC_URL + "/images/8.png"} alt="popup-img" />

                          </div>
                          <div className="col-lg-8 order-lg-2 order-sm-1 order-md-1 order-first order-sm-last">
                            <div className="contt">
                            <h3>SELECT GIFTS</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                          </div>
                          </div>
                        </div>
                    </div>
                  </section>

                  <section className="mysection2">
                    <div className="container">
                        <div className="row">
                        <div className="col-lg-8">
                            <div className="contt">
                            <h3>SELECT GIFTS</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                          </div>
                          </div>
                          <div className="col-lg-4 init">
                            <p><img src={process.env.PUBLIC_URL + "/images/3.jpg"} alt="init-img" width="100%" /></p>

                            <img className="image2 wow slideInLeft" data-wow-duration="1s" data-wow-delay=".5s" src={process.env.PUBLIC_URL + "/images/7.png"} alt="popup-img" />

                          </div>
                        </div>
                    </div>
                  </section>


                  <section className="mysection purple-bg">
                    <div className="container">
                        <div className="row">
                          <div className="col-lg-4 init order-lg-1 order-sm-2 order-md-2">
                            <p><img src={process.env.PUBLIC_URL + "/images/2.jpg"} alt="init-img" width="100%" /></p>

                            <img className="image2 wow slideInRight" data-wow-duration="1s" data-wow-delay=".5s" src={process.env.PUBLIC_URL + "/images/6.png"} alt="popup-img" />

                          </div>
                          <div className="col-lg-8 order-lg-2 order-sm-1 order-md-1 order-first order-sm-last">
                            <div className="contt">
                            <h3>SELECT GIFTS</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                          </div>
                          </div>
                        </div>
                    </div>
                  </section>


                  <section className="mysection2 blue-bg">
                    <div className="container">
                        <div className="row">
                        <div className="col-lg-8">
                            <div className="contt">
                            <h3>SELECT GIFTS</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                          </div>
                          </div>
                          <div className="col-lg-4 init">
                            <p><img src={process.env.PUBLIC_URL + "/images/1.png"} alt="init-img" width="100%" /></p>

                            <img className="image2 wow slideInRight" data-wow-duration="1s" data-wow-delay=".5s" src={process.env.PUBLIC_URL + "/images/5.png"} alt="popup-img" />

                          </div>
                        </div>
                    </div>
                  </section>


                  <section className="alt-sec last-sec">
                    <div className="container flexible">
                      <div className="img-side order-lg-1 order-sm-2 order-md-2">
                        <p><img src={process.env.PUBLIC_URL + "/images/10.png"} alt="init-img" /></p>
                      </div>
                      <div className="cont-side order-lg-2 order-sm-1 order-md-1 order-first order-sm-last">
                      <p><img src={process.env.PUBLIC_URL + "/images/9.png"} alt="init-img" /></p>
                        <h2>DOWNLOAD THE APP</h2>
                        <div className="img-wrap">
                        <img src={process.env.PUBLIC_URL + "/images/android.png"} alt="init-img" /> 
                        <img src={process.env.PUBLIC_URL + "/images/ios.png"} alt="init-img" />
                      </div>
                      </div>
                    </div>
                  </section>

            </div>
              );
    }
}

export default Home;