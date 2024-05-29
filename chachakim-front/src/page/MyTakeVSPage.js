import React from "react";
import Menu from "../base/BaseMenu.js";
import Header from "../base/BaseHeader.js";
import { MY_TAKE_VS_LIST } from "./ListDummy.js";

const MyTakeVSPage = () => {
  const list = MY_TAKE_VS_LIST;

  const createList = (item) => {
    const list = [];
    for (let i = 0; i < item.length; i++) {
      const listItem = item[i];
      list.push(
        <div
          style={{
            width: "85vw",
            bottom: "100px",
            left: "250px",
            display: "flex",
          }}
        >
          <div
            style={{
              width: " 10vw",
              textAlign: "center",
              borderBottom: "1px solid",
              margin: "0 2px ",
            }}
          >
            <label>{i}</label>
          </div>
          <div
            style={{
              width: " 25vw",
              textAlign: "center",
              borderBottom: "1px solid",
              margin: "0 2px ",
            }}
          >
            <label>{listItem["제목"]}</label>
          </div>
          <div
            style={{
              width: " 10vw",
              textAlign: "center",
              borderBottom: "1px solid",
              margin: "0 2px ",
            }}
          >
            <label>{listItem["작성자"]}</label>
          </div>
          <div
            style={{
              width: " 10vw",
              textAlign: "center",
              borderBottom: "1px solid",
              margin: "0 2px ",
            }}
          >
            <label>{listItem["게시일"]}</label>
          </div>
          <div
            style={{
              width: " 10vw",
              textAlign: "center",
              borderBottom: "1px solid",
              margin: "0 2px ",
            }}
          >
            <label>{listItem["조회수"]}</label>
          </div>
          <div
            style={{
              width: " 10vw",
              textAlign: "center",
              borderBottom: "1px solid",
              margin: "0 2px ",
            }}
          >
            <label>{listItem["참가수"]}</label>
          </div>
        </div>,
      );
    }
    return list;
  };

  const renderBody = () => {
    return (
      <div style={{ fontSize: "25px", marginRight: "100px" }}>
        <div
          style={{
            position: "absolute",
            marginTop: "100px",
            top: "0px",
            width: "85vw",
            left: "250px",
          }}
        >
          <div style={{ display: "flex" }}>
            <div
              style={{
                width: " 10vw",
                textAlign: "center",
                borderBottom: "1px solid",
                margin: "0 2px ",
              }}
            >
              <label>NO</label>
            </div>
            <div
              style={{
                width: "25vw",
                textAlign: "center",
                borderBottom: "1px solid",
                margin: "0 2px ",
              }}
            >
              <label>제목</label>
            </div>
            <div
              style={{
                width: "10vw",
                textAlign: "center",
                borderBottom: "1px solid",
                margin: "0 2px ",
              }}
            >
              <label>작성자</label>
            </div>
            <div
              style={{
                width: "10vw",
                textAlign: "center",
                borderBottom: "1px solid",
                margin: "0 2px ",
              }}
            >
              <label>게시일</label>
            </div>
            <div
              style={{
                width: "10vw",
                textAlign: "center",
                borderBottom: "1px solid",
                margin: "0 2px ",
              }}
            >
              <label>조회수</label>
            </div>
            <div
              style={{
                width: "10vw",
                textAlign: "center",
                borderBottom: "1px solid",
                margin: "0 2px ",
              }}
            >
              <label>참가수</label>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      {renderBody()}
      <div
        style={{
          position: "absolute",
          left: "250px",
          fontSize: "20px",
          top: "140px",
        }}
      >
        {createList(list)}
      </div>
      <Menu />
      <Header />
    </>
  );
};

export default MyTakeVSPage;
