import React from "react";
import Menu from "../base/BaseMenu.js";
import Header from "../base/BaseHeader.js";
import { VS_LIST, BOARD_NAME } from "./ListDummy.js";
import { useNavigate } from "react-router-dom";

const VsPage = () => {
  const list = VS_LIST;
  const [page, setPage] = React.useState(BOARD_NAME["VS"])
  const navigate = useNavigate();

  console.log(page)

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
            <label>{listItem["vs이름"]}</label>
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
            top: "50px",
            width: "85vw",
            left: "250px",
          }}
        >
          <div style={{width : "80px",fontSize : "10px", marginLeft : "71vw", marginBottom : "10px"}}>
          <button style={{
            border : "1px solid", 
            borderRadius : ".5rem"
            }}
            onClick={()=>{
              navigate(`/${page}/registration`, {state : {pageName : page}})
            }}>게시글 작성</button>
          </div>
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
              <label>VS이름</label>
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
            {createList(list)}
        </div>
      </div>
    );
  };
  return (
    <>
      {renderBody()}
      <Menu />
      <Header />
    </>
  );
};

export default VsPage;
