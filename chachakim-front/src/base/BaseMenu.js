import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const Menu = (props) => {
  const navigate = useNavigate();

  const onMenuClick = (id) => {
    if (id === "VS") {
      navigate("/vsPage");
    } else if (id === "설문") {
      navigate("/surveyPage");
    } else if (id === "공지사항"){
      navigate("/noticePage")
    }
  };

  const renderBody = () => {
    const addMenuButton = () => {
      const list = ["VS", "설문", "Shop", "공지사항", "Event"];
      const MenuList = [];
      for (let i = 0; i < list.length; i++) {
        MenuList.push(
          <div>
            <label
              onClick={() => {
                onMenuClick(list[i]);
              }}
              style={{ cursor: "pointer" }}
            >
              {list[i]}
            </label>
          </div>,
        );
      }
      return MenuList;
    };
    return (
      <div
        style={{
          position: "fixed",
          border: "1px solid",
          padding: "50px 10px 10px 10px",
          top: "0px",
          width: "100px",
          height: "100vh",
          boxSizing: "border-box",
          overflow: "hidden",
          backgroundColor: "white",
        }}
      >
        <div>{addMenuButton()}</div>
      </div>
    );
  };

  return renderBody();
};

export default Menu;
