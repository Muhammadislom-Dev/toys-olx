import React, { useEffect } from "react";
import Slider from "react-slick";
import { FormattedMessage } from "react-intl";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import axios from "axios";

function Home() {

  const [Partner, setPartner] = React.useState([]);
  useEffect(() => {
    const axiosGet = async () => {
      const partner = await axios.get(
        "https://api.dev.therepublicoftoys.uz/api/v1/partner"
      );
      setPartner(partner?.data?.data);
    };
    axiosGet();
  }, []);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const settings3 = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <div className="home">
      <div>
        <div className="slide__menu">
          <Slider {...settings}>
            <div>
              <div className="slide__target">
                <div className="item__one">
                  <h1>
                    <FormattedMessage id="car.1" />
                  </h1>
                  <p></p>
                  <Link to="/product" style={{ padding: "0" }}>
                    <button>
                      <FormattedMessage id="home.more" />{" "}
                      <img src="./img/home/btnarrow.svg" alt="toys" />
                    </button>
                  </Link>
                </div>
                <div className="item__two">
                  <img
                    src="./img/home/kamaz.png"
                    alt="toys"
                    className={"slide__img"}
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="slide__target">
                <div className="item__one">
                  <h1>
                    <FormattedMessage id="car.2" />
                  </h1>
                  <p></p>
                  <Link to="/product" style={{ padding: "0" }}>
                    <button>
                      <FormattedMessage id="home.more" />{" "}
                      <img src="./img/home/btnarrow.svg" alt="toys" />
                    </button>
                  </Link>
                </div>
                <div className="item__two">
                  <img
                    src="./img/home/kamaz2.png"
                    alt="toys"
                    className={"slide__img"}
                  />
                </div>
              </div>
            </div>

            <div>
              <div className="slide__target">
                <div className="item__one">
                  <h1>
                    <FormattedMessage id="car.3" />
                  </h1>
                  <p></p>
                  <Link to="/product" style={{ padding: "0" }}>
                    <button>
                      <FormattedMessage id="home.more" />{" "}
                      <img src="./img/home/btnarrow.svg" alt="toys" />
                    </button>
                  </Link>
                </div>
                <div className="item__two">
                  <img
                    src="./img/home/kamaz3.png"
                    alt="toys"
                    className={"slide__img"}
                  />
                </div>
              </div>
            </div>
          </Slider>
        </div>

        <div id="showroom">
          <div className="farm">
            <div className="container">
              <div id="partner">
                <div className="product partner">
                  <div className="title">
                    <span>
                      <FormattedMessage id="home.prtitle" />
                    </span>
                    <h1>
                      <FormattedMessage id="nav.partner" />
                    </h1>
                    <hr />
                  </div>
                  <div className="product__body">
                    <Slider {...settings3}>
                      {Partner.map((item) => (
                        <div className={"card__slide"}>
                          <div className="card" data-aos="flip-left">
                            <img
                              src={
                                "https://api.dev.therepublicoftoys.uz//" +
                                item.img
                              }
                              alt="toys"
                            />
                          </div>
                        </div>
                      ))}
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
