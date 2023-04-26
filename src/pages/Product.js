import React, { useState, useEffect, useContext } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link } from "react-router-dom";
import "react-tabs/style/react-tabs.css";
import axios from "axios";
import { Context } from "../components/Wrapper";
import { FormattedMessage } from "react-intl";
function Product() {
  const [rest, setrest] = useState([]);
  const [category, setCategory] = useState([]);
  const [clickId, setClickId] = useState("");
  useEffect(() => {
    const axiosGet = async () => {
      const response = await axios.get(
        "http://206.189.128.106:4444/api/products"
      );
      setrest(response?.data?.data);
    };
    axiosGet();
  }, []);
  let context = useContext(Context);
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };

  useEffect(() => {
    const axiosCategory = async () => {
      const response = await axios.get(
        "http://206.189.128.106:4444/api/categories"
      );
      setCategory(response?.data?.data);
    };
    axiosCategory();
  }, []);

  console.log(rest);


  return (
    <Tabs defaultIndex={localStorage.getItem("activetoy")}>
      <div className="container products">
        <div className="tabs__grid">
          <h2>
            <FormattedMessage id="home.cotegory" />
          </h2>

          <h1>
            <button onClick={toggleClass}>
              <FormattedMessage id="home.cotegory" />
            </button>
            <FormattedMessage id="nav.products" />
          </h1>
          <TabList className="tabs">
            {category.map((evt) => (
              <Tab>
                <button
                  onClick={() => {
                    toggleClass();
                    setClickId(evt?.id);
                  }}>
                  {context.locale === "ru" ? evt?.name_ru : evt?.name_en}
                </button>
              </Tab>
            ))}
            <div onClick={toggleClass} className="tab-closer"></div>
          </TabList>
          <TabPanel>
            <div className="offers">
              {rest?.map((item) => (
                <Link to={"/product/" + item.id}>
                  <div className="offer">
                    <img
                      src={
                        "http://206.189.128.106:4444/api/uploads/images/" +
                        item?.product_images[0].images_src
                      }
                      alt=""
                    />
                    <p>
                      {context.locale === "ru"
                        ? item?.title_ru
                        : item?.title_en}
                    </p>
                    <span>
                      <FormattedMessage id="sums" />
                    </span>
                    <div className="hover__offer">
                      <span>Подробнее</span>
                      <img src={"./img/home/cardar.svg"} alt="" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </TabPanel>
        </div>
      </div>
    </Tabs>
  );
}

export default Product;
