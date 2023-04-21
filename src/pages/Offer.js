import React, { useState, useEffect, useContext } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useParams } from "react-router";
import axios from "axios";
import { Context } from "../components/Wrapper";
import ReactTooltip from "react-tooltip";
import { FormattedMessage } from "react-intl";
import Barcode from "react-barcode";

function Offer() {

  const context = useContext(Context);
  const [rest, setrest] = useState([]);
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
            width="600px"
          >
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
                src={"https://api.dev.therepublicoftoys.uz" + offer?.img3  }
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
                  <img
                    data-tip="test"
                    data-for="test"
                    src="https://www.polesie-toys.com/static/img/icons/question.svg"
                    alt="ques"
                  />
                  <ReactTooltip id="test">
                    {" "}
                    <FormattedMessage id="prod.1" />
                  </ReactTooltip>
                </td>
                <td>{offer?.articul}</td>
              </tr>
              <tr>
                <td className="color-grey">
                  <FormattedMessage id="prod.2" />
                  <img
                    data-tip="test1"
                    data-for="test1"
                    src="https://www.polesie-toys.com/static/img/icons/question.svg"
                    alt="ques"
                  />
                  <ReactTooltip id="test1">
                    {" "}
                    <FormattedMessage id="prod.2" />
                  </ReactTooltip>
                </td>
                <td style={{ padding: "0px" }}>
                  <Barcode
                    height="20"
                    width="1"
                    fontSize="10px"
                    value={offer?.qr}
                  />
                </td>
              </tr>
              <tr>
                <td className="color-grey">
                  <FormattedMessage id="prod.3" />
                  <img
                    data-tip="test2"
                    data-for="test2"
                    src="https://www.polesie-toys.com/static/img/icons/question.svg"
                    alt="ques"
                  />
                  <ReactTooltip id="test2">
                    {" "}
                    <FormattedMessage id="prod.3" />
                  </ReactTooltip>
                </td>
                <td>{offer?.size_toy}</td>
              </tr>
              <tr>
                <td className="color-grey">
                  <FormattedMessage id="prod.4" />{" "}
                  <img
                    data-tip="test3"
                    data-for="test3"
                    src="https://www.polesie-toys.com/static/img/icons/question.svg"
                    alt="ques"
                  />
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
                  <img
                    data-tip="test4"
                    data-for="test4"
                    src="https://www.polesie-toys.com/static/img/icons/question.svg"
                    alt="ques"
                  />
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
                  <img
                    data-tip="test6"
                    data-for="test6"
                    src="https://www.polesie-toys.com/static/img/icons/question.svg"
                    alt="ques"
                  />
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
                  <img
                    data-tip="test7"
                    data-for="test7"
                    src="https://www.polesie-toys.com/static/img/icons/question.svg"
                    alt="ques"
                  />
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
                  <img
                    data-tip="test8"
                    data-for="test8"
                    src="https://www.polesie-toys.com/static/img/icons/question.svg"
                    alt="ques"
                  />
                  <ReactTooltip id="test8">
                    {" "}
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
                <td className="color-grey">
                  {" "}
                  <FormattedMessage id="prod.9" />
                </td>
                <td>
                  {offer?.file ? (
                    <a
                      className="btn btn-primary"
                      href={"https://api.dev.therepublicoftoys.uz//" + offer?.file}
                      download
                      target="_blank"
                    >
                      <FormattedMessage id="prod.10" />
                    </a>
                  ) : (
                    <a className="btn btn-primary" aria-disabled>
                      <FormattedMessage id="prod.10" />
                    </a>
                  )}
                </td>
              </tr>
              <tr>
                <td>
                  <button>
                    {context.locale === "uz"
                      ? "Buyurtma"
                      : context.locale === "ru"
                      ? "Заказать"
                      : "Order"}
                  </button>
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Offer;
