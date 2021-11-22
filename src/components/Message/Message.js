import React from "react";
import "./Message.css";

export const MessageBasic = ({text}) => {
  return (
    <div className="message__basic">
      <p>{text}</p>
    </div>
  );
};

export const MessageSuccesful = ({text}) => {
  return (
    <div className="message__successful">
      <p>{text}</p>
    </div>
  );
};

export const MessageError = ({text}) => {
  return (
    <div className="message__error">
      <p>{text}</p>
    </div>
  );
};
