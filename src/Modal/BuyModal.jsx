import React from "react";
import { useContext } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { Context } from "../components/Wrapper";
import { Context as AContext } from "../context/AddCard";
import Bscard from "../img/BsCard";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  height: 420,
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
          {orderToys.map((evt) => (
            <div className="like-list">
              <img
                className="like-img"
                src={`https://api.dev.therepublicoftoys.uz${evt?.img1}`}
              />
              <h4>
                {context.locale === "uz"
                  ? evt?.title_uz
                  : context.locale === "ru"
                  ? evt?.title_ru
                  : evt?.title_en}
              </h4>
            </div>
          ))}
        </Box>
      </Modal>
    </div>
  );
}

export default BuyModal;
