import React, { useState, useEffect, useContext } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useParams } from "react-router";
import axios from "axios";
import { Context } from "../components/Wrapper";
import ReactTooltip from "react-tooltip";
import { FormattedMessage } from "react-intl";
import { Context as AContext } from "../context/AddCard";
import { LikeContext } from "../context/LikeCard";

function Offer() {
  const context = useContext(Context);
  const [rest, setrest] = useState([]);
  let { id } = useParams();
  const { orderToys, setOrderToys } = useContext(AContext);
  const { likeToys, setLikeToys } = useContext(LikeContext);

  useEffect(() => {
    const axiosGet = async () => {
      const response = await axios.get(
        "https://admin.dipsag.uz/api/products"
      );
      setrest(response?.data?.data?.find((evt) => evt?.id === id));
    };
    axiosGet();
  }, []);

  const addCardClick = () => {
    rest.count = rest?.count ? rest?.count + 1 : 1;
    const uniqueArr = [...new Set([...likeToys, rest])];
    setOrderToys(uniqueArr);
  };

  const likeCardClick = () => {
    rest.count = rest?.count ? rest?.count + 1 : 1;
    const uniqueArr = [...new Set([...orderToys, rest])];
    setLikeToys(uniqueArr);
  };

  return (
    <>
      <div className="container offer__page">
        <div className="item__offer">
          <Carousel
            showThumbs={true}
            showStatus={false}
            infiniteLoop
            useKeyboardArrows
            transitionTime={300}
            width="600px">
            {rest?.product_images?.map((evt) => (
              <div className="slide-holder">
                <img
                  className={"img__one"}
                  src={
                    "https://admin.dipsag.uz/api/uploads/images/" +
                    evt.images_src
                  }
                />
              </div>
            ))}
          </Carousel>
        </div>
        <div className="item__offer sp__around">
          <h1>{context.locale === "ru" ? rest?.title_ru : rest?.title_en}</h1>
          <table className="table table-striped">
            <tbody>
              <tr>
                <td className="color-grey">
                  <FormattedMessage id="prod.1" />
                  <ReactTooltip id="test">
                    <FormattedMessage id="prod.1" />
                  </ReactTooltip>
                </td>
                <td>{rest?.articul}</td>
              </tr>
              <tr>
                <td className="color-grey">
                  <FormattedMessage id="prod.3" />

                  <ReactTooltip id="test2">
                    <FormattedMessage id="prod.3" />
                  </ReactTooltip>
                </td>
                <td>{rest?.package_size}</td>
              </tr>
              <tr>
                <td className="color-grey">
                  <FormattedMessage id="prod.4" />{" "}
                  <ReactTooltip id="test3">
                    {" "}
                    <FormattedMessage id="prod.4" />
                  </ReactTooltip>
                </td>
                <td>{rest.toy_size}</td>
              </tr>
              <tr>
                <td className="color-grey">
                  <FormattedMessage id="prod.5" />{" "}
                  <ReactTooltip id="test4">
                    {" "}
                    <FormattedMessage id="prod.5" />
                  </ReactTooltip>
                </td>
                <td>{rest?.package_quantity}</td>
              </tr>
              <tr>
                <td className="color-grey">
                  <FormattedMessage id="prod.6" />{" "}
                  <ReactTooltip id="test6">
                    {" "}
                    <FormattedMessage id="prod.6" />
                  </ReactTooltip>
                </td>
                <td>{rest.type_of_packaging}</td>
              </tr>
              <tr>
                <td className="color-grey">
                  <FormattedMessage id="prod.7" />{" "}
                  <ReactTooltip id="test7">
                    {" "}
                    <FormattedMessage id="prod.7" />
                  </ReactTooltip>
                </td>
                <td>{rest?.multipack_type}</td>
              </tr>
              <tr>
                <td>
                  <button onClick={addCardClick}>
                    {context.locale === "ru" ? "Заказать" : "Order"}
                  </button>
                </td>
                <td>
                  <button onClick={likeCardClick}>
                    {context.locale === "ru" ? "Like" : "Like"}
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Offer;
