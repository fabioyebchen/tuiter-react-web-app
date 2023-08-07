import React from "react";
import { FaCheckCircle, FaComment, FaHeart, FaThumbsDown  } from "react-icons/fa";
import { IoMdText } from "react-icons/io";
import { IoCloudUpload } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { deleteTuitThunk, updateTuitThunk } from "../services/tuits-thunks";
import "./index.css";

const TuitItem = ({ tuit }) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuitThunk(id));
  };

  const handleLikeClick = () => {
    if (tuit.liked) {
      dispatch(updateTuitThunk({ ...tuit, likes: tuit.likes - 1, liked: false }));
    } else {
      dispatch(updateTuitThunk({ ...tuit, likes: tuit.likes + 1, liked: true }));
    }
  };

  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-2">
          <img
            width={70}
            className="float-end rounded-3"
            src={`/images/${tuit.image}`}
            alt=""
          />
        </div>
        <div className="col-10">
          <div>
            <i
              className="bi bi-x-lg float-end x-icon"
              onClick={() => deleteTuitHandler(tuit._id)}
            >
              x
            </i>
            <b>{tuit.userName}</b> <FaCheckCircle size={15} color="#1DA1F2" />{" "}
            {tuit.handle} . {tuit.time}
          </div>
          <div>{tuit.tuit}</div>
          <br />

          <div className="row">
            <div className="col-2">
              <FaComment
                size={15}
                style={{
                  strokeWidth: 50,
                  fill: "transparent",
                  stroke: "black",
                }}
              />
              <span> {tuit.replies}</span>
            </div>

            <div className="col-2">
              <IoMdText
                size={15}
                style={{
                  strokeWidth: 50,
                  fill: "transparent",
                  stroke: "black",
                }}
              />
              <span> {tuit.retuits}</span>
            </div>

            <div className="col-2">
              <FaHeart
                onClick={handleLikeClick}
                size={15}
                style={{
                  strokeWidth: tuit.liked ? 5 : 50,
                  fill: tuit.liked ? "red" : "transparent",
                  stroke: "black",
                }}
              />
              <span> {tuit.likes}</span>
            </div>

            <div className="col-2">
              <FaThumbsDown
                onClick={() =>
                  dispatch(updateTuitThunk({ ...tuit, dislikes: tuit.dislikes + 1 }))
                }
                size={15}
                style={{
                  strokeWidth: 50,
                  fill: "transparent",
                  stroke: "black",
                }}
              />
              <span> {tuit.dislikes}</span>
            </div>

            <div className="col-2">
              <IoCloudUpload
                size={15}
                style={{
                  strokeWidth: 30,
                  fill: "transparent",
                  stroke: "black",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
export default TuitItem;
