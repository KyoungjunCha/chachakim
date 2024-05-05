import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import "./BaseHeader.css";

const Header = () => {
  const navigate = useNavigate();

  const renderBody = () => {
    return (
      <div className="BaseHeader-container">
        <label
          className="BaseHeader-Title"
          onClick={() => {
            navigate("/main");
          }}
        >
          설문조사 사이트
        </label>
        <div className="BaseHeader-search-container">
          <input placeholder="검색" className="BaseHeader-search-input"></input>
          <button className="BaseHeader-search-button">검색</button>
        </div>
        <label className="BaseHeader-username">name</label>
      </div>
    );
  };

  return renderBody();
};

export default Header;
