import React from "react";
import Menu from "../base/BaseMenu.js";
import Header from "../base/BaseHeader.js";
import { useNavigate } from "react-router-dom";
import { VS_LIST, SURVEY_LIST } from "./ListDummy.js";

const MainPage = () => {
  const navigate = useNavigate();

  const listDisplay = (board, listName) => {
    const list = [];
    for (let i = 0; i < board.length; i++) {
      const listItem = board[i];
      list.push(
        <div>
          <li
            onClick={() => {
              if(listName === "vs이름"){
                navigate(`/vsPage/${i}`, {state : {id : i}});
              }
              else if(listName === "설문"){
                navigate(`/surveyPage/${i}`, {state : {id : i}});
              }
            }}
          >
            {listItem[listName]}
          </li>
        </div>,
      );
    }
    return list;
  };

  const render = () => {
    return (
      <div style={{ fontSize: "25px" }}>
        <div
          style={{
            position: "relative",
            bottom: "50px",
            width: "80vw",
            left: "200px",
          }}
        >
          {/* 전체 div컨포넌트 */}
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              margin: "20px 0 40px 0",
            }}
          >
            {/* 첫 번째줄 div */}
            <div
              style={{
                width: "49%",
              }}
            >
              <div style={{}}>
                <div
                  style={{
                    border: "1px solid",
                    padding: "5px 0 5px 10px",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    navigate("/vsPage");
                  }}
                >
                  VS
                </div>
                <div style={{ border: "1px solid", padding: "5px 0 5px 10px" }}>
                  {listDisplay(VS_LIST, "vs이름")}
                </div>
              </div>
            </div>
            <div style={{ width: "49%" }}>
              <div style={{}}>
                <div
                  style={{
                    border: "1px solid",
                    padding: "5px 0 5px 10px",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    navigate("/surveyPage");
                  }}
                >
                  설문
                </div>
                <div style={{ border: "1px solid", padding: "5px 0 5px 10px" }}>
                  {listDisplay(SURVEY_LIST, "설문")}
                </div>
              </div>
            </div>
          </div>
          <div>
            <div style={{}}>
              <div style={{ border: "1px solid", padding: "5px 0 5px 10px" }}>
                <label>Hot한 주제</label>
              </div>
              <div style={{ border: "1px solid", padding: "5px 0 5px 10px" }}>
                <li>name</li>
                <li>name</li>
                <li>name</li>
                <li>name</li>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      {render()}
      <Menu />
      <Header />
    </div>
  );
};

export default MainPage;
