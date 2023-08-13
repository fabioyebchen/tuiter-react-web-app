import React, { useState } from "react";
import { AiOutlinePicture, AiOutlineSmile } from "react-icons/ai";
import { BsFileEarmarkImage, BsBarChartLine } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { createTuitThunk } from "../services/tuits-thunks";
import { useDispatch } from "react-redux";

const WhatsHappening = () => {
  const currentUser = {
    userName: "NASA",
    handle: "@nasa",
    image: "nasa.png",
  };
  
  const templateTuit = {
    ...currentUser,
    topic: "Space",
    time: "2h",
    liked: false,
    replies: 0,
    retuits: 0,
    likes: 0,
    dislikes:0,
  };
  let [whatsHappening, setWhatsHappening] = useState("");
  const dispatch = useDispatch();
  const tuitClickHandler = () => {
    
    const newTuit = {
      tuit: whatsHappening,
      title: "NASA is sending humans to an asteroid: SpaceX will get them there",
      ...templateTuit,
    };

    console.log(newTuit);
    dispatch(createTuitThunk(newTuit));
    setWhatsHappening("");
  };
  return (
    <div className="row">
      <div className="col-auto">
        <img src="/images/nasa.png" width={60} alt="" />
      </div>
      <div className="col-10">
        <textarea
          value={whatsHappening}
          placeholder="What's happening?"
          className="form-control border-0"
          onChange={(event) => setWhatsHappening(event.target.value)}
        ></textarea>
        <div>
          <button
            className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
            onClick={tuitClickHandler}
          >
            Tuit
          </button>
          <div className="text-primary fs-2">
            <AiOutlinePicture className="me-3" />
            <BsFileEarmarkImage className="me-3" />
            <BsBarChartLine className="me-3" />
            <AiOutlineSmile className="me-3" />
            <SlLocationPin className="me-3" />
          </div>
        </div>
      </div>
      <div className="col-12">
        <hr />
      </div>
    </div>
  );
};
export default WhatsHappening;
