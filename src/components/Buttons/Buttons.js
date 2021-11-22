import React from "react";
import "./Buttons.css";

// componentes
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import {animateScroll as scroll} from "react-scroll";

const onClickUp = () => {
  scroll.scrollToTop();
};

export const EnlaceButtonLg = ({url, text, css}) => {
  return (
    <Link onClick={onClickUp} to={url} className="enlace-lg">
      {text}
    </Link>
  );
};

export const EnlaceButtonLgDifferent = ({url, text}) => {
  return (
    <Link
      onClick={onClickUp}
      to={url}
      className="enlace-lg enlace-lg-different"
    >
      {text}
    </Link>
  );
};

export const EnlaceButtonIconSm = ({url, text, icon}) => {
  return (
    <Link onClick={onClickUp} to={url} className="button-icon-sm">
      <FontAwesomeIcon icon={icon} /> {text}
    </Link>
  );
};

export const ButtonIconSm = ({type, text, icon, event, value}) => {
  return (
    <button
      type={type}
      className="button-icon-sm"
      onClick={event}
      value={value}
    >
      <FontAwesomeIcon icon={icon} /> {text}
    </button>
  );
};

export const ButtonIconSmDifferent = ({type, text, icon, event, value}) => {
  return (
    <button
      type={type}
      className="button-icon-sm button-icon-different"
      onClick={event}
      value={value}
    >
      <FontAwesomeIcon icon={icon} /> {text}
    </button>
  );
};

export const ButtonControl = ({type, event, icon}) => {
  return (
    <button type={type} className="controls" onClick={event}>
      <FontAwesomeIcon icon={icon} />
    </button>
  );
};

export const ButtonEdit = ({type, event, icon, text}) => {
  return (
    <button type={type} className="button-edit" onClick={event}>
      <FontAwesomeIcon icon={icon} /> {text}
    </button>
  );
};

export const ButtonDelete = ({type, event, icon, text}) => {
  return (
    <button type={type} className="button-delete" onClick={event}>
      <FontAwesomeIcon icon={icon} /> {text}
    </button>
  );
};
