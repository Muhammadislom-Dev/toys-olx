import React from "react";
import { useContext } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { Context } from "../components/Wrapper";
import { Context as AContext } from "../context/AddCard";
import Bscard from "../img/BsCard";
import { RiDeleteBinLine } from "react-icons/ri";
import "./style.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  maxHeight: 420,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  overflowY: "scroll",
};

function BuyModal() {
  const context = useContext(Context);
  const { orderToys, setOrderToys } = useContext(AContext);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  let [count, setCount] = useState(1);

  function incrementCount() {
    count = count - 0 + 1;
    setCount(count);
  }
  function decrementCount() {
    if (count <= 0) {
      count = 1;
    }
    count = count - 1;
    setCount(count);
  }

  console.log(orderToys);

  return (
    <div>
      <button onClick={handleOpen} className="header--open">
        <Bscard />
        {orderToys.length > 0 && (
          <p className="basket__box">
            <span style={{ fontSize: "18px" }} className="counts">
              {orderToys.length}
            </span>
          </p>
        )}
      </button>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description">
        <Box sx={style}>
          {orderToys.length > 0 ? (
            <>
              {orderToys.map((evt) => (
                <div className="like-list">
                  {evt?.product_images?.map((item) => (
                    <img
                      className="like-img"
                      src={
                        "http://206.189.128.106:4444/api/uploads/images/" +
                        item.images_src
                      }
                    />
                  ))}
                  <h4>
                    {context.locale === "uz"
                      ? evt?.title_uz
                      : context.locale === "ru"
                      ? evt?.title_ru
                      : evt?.title_en}
                  </h4>
                  <div className="modal-blok">
                    <button className="modal-plus" onClick={decrementCount}>
                      -
                    </button>
                    <span className="modal-count">{count}</span>
                    <button className="modal-plus" onClick={incrementCount}>
                      +
                    </button>
                  </div>
                  <p className="modal-price">
                    {(evt.price * count).toFixed(1)} сум
                  </p>
                  <button
                    className="modal-btn"
                    onClick={() => {
                      setOrderToys(
                        orderToys.filter((toys) => toys.id !== evt.id)
                      );
                    }}>
                    <RiDeleteBinLine />
                  </button>
                </div>
              ))}
            </>
          ) : (
            <p>Siz hali o'yinchoq buyurtma qilmadingiz!</p>
          )}
        </Box>
      </Modal>
    </div>
  );
}

export default BuyModal;
