import React from "react";
import { LikeContext } from "../context/LikeCard";
import { FcLike } from "react-icons/fc";
import { useContext } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { Context } from "../components/Wrapper";

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

function LikeModal() {
  const context = useContext(Context);
  const { likeToys, setLikeToys } = useContext(LikeContext);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  console.log(likeToys);
  return (
    <div>
      <button onClick={handleOpen} className="header-like">
        <FcLike fontSize="25px" color="white" />
        {likeToys.length > 0 && (
          <p className="basket__box">
            <span style={{ fontSize: "18px" }} className="counts">
              {likeToys.length}
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
          {likeToys.length > 0 ? (
            <>
              {likeToys.map((evt) => (
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
            </>
          ) : (
            <>Siz hali yoqtirgan o'yinchoqlariz ro'yhatiga qo'shmadingiz</>
          )}
        </Box>
      </Modal>
    </div>
  );
}

export default LikeModal;
