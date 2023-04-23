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
  const { orderToys, setOrderToys } = useContext(AContext);
  const { likeToys, setLikeToys } = useContext(LikeContext);

  
  useEffect(() => {
    const axiosGet = async () => {
      const response = await axios.get(
        "https://api.dev.therepublicoftoys.uz/api/v1/offers"
      );
      setrest(response.data);
    };
    axiosGet();
  }, []);
  let { id } = useParams();
  const activeIds = [Number(id)];
  const result = rest.filter(({ id }) => activeIds.includes(id));
  const offer = result[0];

  const addCardClick = () => {
    const findToys = rest.find((pro) => pro?.id === offer?.id);
    findToys.count = findToys?.count ? findToys?.count + 1 : 1;
    const uniqueArr = [...new Set([...likeToys, findToys])];
    setOrderToys(uniqueArr);
  };

  const likeCardClick = () => {
    const findToys = rest.find((pro) => pro?.id === offer?.id);
    findToys.count = findToys?.count ? findToys?.count + 1 : 1;
    const uniqueArr = [...new Set([...orderToys, findToys])];
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
            <div className="slide-holder">
              <img
                className={"img__one"}
                src={"https://api.dev.therepublicoftoys.uz" + offer?.img1}
              />
            </div>
            <div className="slide-holder">
              <img
                className={"img__one"}
                src={"https://api.dev.therepublicoftoys.uz" + offer?.img2}
              />
            </div>
            <div className="slide-holder">
              <img
                className={"img__one"}
                src={"https://api.dev.therepublicoftoys.uz" + offer?.img3}
              />
            </div>
          </Carousel>
        </div>
        <div className="item__offer sp__around">
          <h1>
            {context.locale === "uz"
              ? offer?.title_uz
              : context.locale === "ru"
              ? offer?.title_ru
              : offer?.title_en}
          </h1>

          <table className="table table-striped">
            <tbody>
              <tr>
                <td className="color-grey">
                  <FormattedMessage id="prod.1" />
                  <ReactTooltip id="test">
                    <FormattedMessage id="prod.1" />
                  </ReactTooltip>
                </td>
                <td>{offer?.articul}</td>
              </tr>
              <tr>
                <td className="color-grey">
                  <FormattedMessage id="prod.3" />

                  <ReactTooltip id="test2">
                    <FormattedMessage id="prod.3" />
                  </ReactTooltip>
                </td>
                <td>{offer?.size_toy}</td>
              </tr>
              <tr>
                <td className="color-grey">
                  <FormattedMessage id="prod.4" />{" "}
                  <ReactTooltip id="test3">
                    {" "}
                    <FormattedMessage id="prod.4" />
                  </ReactTooltip>
                </td>
                <td>
                  {context.locale === "uz"
                    ? offer?.case_uz
                    : context.locale === "ru"
                    ? offer?.case_ru
                    : offer?.case_en}{" "}
                </td>
              </tr>
              <tr>
                <td className="color-grey">
                  <FormattedMessage id="prod.5" />{" "}
                  <ReactTooltip id="test4">
                    {" "}
                    <FormattedMessage id="prod.5" />
                  </ReactTooltip>
                </td>
                <td>{offer?.size_case}</td>
              </tr>
              <tr>
                <td className="color-grey">
                  <FormattedMessage id="prod.6" />{" "}
                  <ReactTooltip id="test6">
                    {" "}
                    <FormattedMessage id="prod.6" />
                  </ReactTooltip>
                </td>
                <td>
                  {context.locale === "uz"
                    ? offer?.casegroup_uz
                    : context.locale === "ru"
                    ? offer?.casegroup_ru
                    : offer?.casegroup_en}{" "}
                </td>
              </tr>
              <tr>
                <td className="color-grey">
                  <FormattedMessage id="prod.7" />{" "}
                  <ReactTooltip id="test7">
                    {" "}
                    <FormattedMessage id="prod.7" />
                  </ReactTooltip>
                </td>
                <td>{offer?.weight}</td>
              </tr>
              <tr>
                <td className="color-grey">
                  <FormattedMessage id="prod.8" />
                  <ReactTooltip id="test8">
                    <FormattedMessage id="prod.8" />
                  </ReactTooltip>
                </td>
                <td>
                  {offer?.count}{" "}
                  {context.locale === "uz"
                    ? "ta"
                    : context.locale === "ru"
                    ? "шт"
                    : ""}
                </td>
              </tr>

              <tr>
                <td>
                  <button onClick={addCardClick}>
                    {context.locale === "uz"
                      ? "Buyurtma"
                      : context.locale === "ru"
                      ? "Заказать"
                      : "Order"}
                  </button>
                </td>
                <td>
                  <button onClick={likeCardClick}>
                    {context.locale === "uz"
                      ? "Like"
                      : context.locale === "ru"
                      ? "Like"
                      : "Like"}
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
