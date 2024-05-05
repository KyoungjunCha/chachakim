import React from "react";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();

  // 메뉴 항목과 해당 항목의 동작을 정의하는 배열
  const menuItems = [
    { id: "VS", label: "VS", action: () => navigate("/vsPage") },
    { id: "설문", label: "설문", action: () => navigate("/surveyPage") },
    { id: "Shop", label: "Shop", action: () => navigate("/shopPage") },
    { id: "공지사항", label: "공지사항", action: () => navigate("/notices") },
    { id: "Event", label: "Event", action: () => navigate("/events") },
  ];

  // 메뉴 항목을 바탕으로 버튼을 동적으로 생성하는 함수
  const renderMenuButtons = () => {
    return menuItems.map((item) => (
      <div key={item.id}>
        <label
          onClick={item.action}
          style={{ cursor: "pointer" }}
        >
          {item.label}
        </label>
      </div>
    ));
  };

  return (
    <div
      style={{
        position: "absolute",
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
      <div>{renderMenuButtons()}</div>
    </div>
  );
};

export default Menu;
