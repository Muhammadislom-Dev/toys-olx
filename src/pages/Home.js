import React, { useEffect } from "react";
import Slider from "react-slick";
import { FormattedMessage } from "react-intl";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import axios from "axios";
import Product from "./Product";
import { Context } from "../components/Wrapper";
import { useContext } from "react";
import { useState } from "react";

function Home() {
  const [Partner, setPartner] = React.useState([]);
  const [logo, setLogo] = useState([]);
  let context = useContext(Context);
  useEffect(() => {
    const axiosGet = async () => {
      const partner = await axios.get(
        "https://admin.dipsag.uz/api/sliders"
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

  useEffect(() => {
    axios
      .get("https://admin.dipsag.uz/api/clients")
      .then((res) => setLogo(res.data.data))
      .catch((err) => console.log(err));
  }, []);


  return (
    <div className="home">
      <div>
        <div className="slide__menu">
          <Slider {...settings}>
            {Partner.map((evt) => (
              <div>
                <div className="slide__target">
                  <div className="item__one">
                    <h1>
                      {context.locale === "ru" ? evt?.title_ru : evt?.title_en}
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
                      src={
                        "https://admin.dipsag.uz/api/uploads/images/" +
                        evt?.src
                      }
                      alt="toys"
                      className={"slide__img"}
                    />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <Product />

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
                    {logo.map((item) => (
                      // <div className="card" data-aos="flip-left">
                      <img
                        src={
                          "https://admin.dipsag.uz/api/uploads/images/" +
                          item?.image_src
                        }
                        className="logo-img"
                        alt="toys"
                      />
                      // </div>
                    ))}
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
