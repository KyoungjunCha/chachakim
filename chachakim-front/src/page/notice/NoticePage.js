import React from "react";
import Menu from "../../base/BaseMenu.js";
import Header from "../../base/BaseHeader.js";
<<<<<<< HEAD
import { NOTICE_LIST, BOARD_NAME } from "../ListDummy.js";
=======
import { NOTICE_LIST } from "../ListDummy.js";
>>>>>>> gwanho
import { useNavigate } from "react-router-dom";

const NoticePage = () => {
  const list = NOTICE_LIST;
<<<<<<< HEAD
  const [page, setPage] = React.useState(BOARD_NAME["NOTICE"])
=======
>>>>>>> gwanho
  const navigate = useNavigate();

  const createList = (item) => {
    // const list = [];
    // for (let i = 0; i < item.length; i++) {
    //   const listItem = item[i];
    //   list.push(
    //     <div
    //       style={{
    //         width: "85vw",
    //         bottom: "100px",
    //         left: "250px",
    //         display: "flex",
    //       }}
    //     >
    //       <div
    //         style={{
    //           width: " 10vw",
    //           textAlign: "center",
    //           borderBottom: "1px solid",
    //           margin: "0 2px ",
    //         }}
    //       >
    //         <label>{i}</label>
    //       </div>
    //       <div
    //         style={{
    //           width: " 25vw",
    //           textAlign: "center",
    //           borderBottom: "1px solid",
    //           margin: "0 2px ",
    //         }}
    //       >
    //         <label>{listItem["title"]}</label>
    //       </div>
    //       <div
    //         style={{
    //           width: " 10vw",
    //           textAlign: "center",
    //           borderBottom: "1px solid",
    //           margin: "0 2px ",
    //         }}
    //       >
    //         <label>{listItem["write_datetime"]}</label>
    //       </div>
    //       <div
    //         style={{
    //           width: " 10vw",
    //           textAlign: "center",
    //           borderBottom: "1px solid",
    //           margin: "0 2px ",
    //         }}
    //       >
    //         <label>{listItem["view_count"]}</label>
    //       </div>
    //     </div>,
    //   );
    // }
    // return list;
    return item.map((listItem, index) => (
        <div
          key={index}
          style={{
            width: "85vw",
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            bottom:"100px"
          }}
<<<<<<< HEAD
          onClick={() => navigate(`/noticeDetail/${listItem.notice_id}`)}  // 클릭 이벤트 핸들러로 navigate 함수 사용
=======
          onClick={() => navigate(`/notice/${listItem.notice_id}`)}  // 클릭 이벤트 핸들러로 navigate 함수 사용
>>>>>>> gwanho
        >
          <div style={{
             width: " 10vw",
              textAlign: "center",
              borderBottom: "1px solid",
              margin: "0 2px ", 
              }}>
            <label>{index}</label>
          </div>
          <div style={{
              width: " 25vw",
              textAlign: "center",
              borderBottom: "1px solid",
              margin: "0 2px ",
            }}>
            <label>{listItem.title}</label>
          </div>
          <div style={{
              width: " 10vw",
              textAlign: "center",
              borderBottom: "1px solid",
              margin: "0 2px ",
            }}>
            <label>{listItem.write_datetime}</label>
          </div>
          <div style={{
              width: " 10vw",
              textAlign: "center",
              borderBottom: "1px solid",
              margin: "0 2px ",
            }}>
            <label>{listItem.view_count}</label>
          </div>
        </div>
      ));
  };

  const renderBody = () => {
    return (
      <div style={{ fontSize: "25px", marginRight: "100px" }}>
        <div
          style={{
              position: "absolute",
              marginTop: "30px",
<<<<<<< HEAD
              top: "50px",
=======
              top: "0px",
>>>>>>> gwanho
              width: "85vw",
              left: "400px",
            }}
            >
<<<<<<< HEAD
            {/* <div style={{
=======
            <div style={{
>>>>>>> gwanho
                // display:"flex",
                width:"85vw",
                marginTop:"30px",
                justifyContent:"flex-end"
            }}>
                <button style={{
                    margin:"auto 0",
                    padding:"5px",
                    border: "1px solid",
                    fontSize:"20px"
                }}>
                    글작성</button>
<<<<<<< HEAD
            </div> */}
            <div style={{width : "80px",fontSize : "10px", marginLeft : "50vw", marginBottom : "10px"}}>
          <button style={{
            border : "1px solid", 
            borderRadius : ".5rem"
            }}
            onClick={()=>{
              navigate(`/${page}/registration`, {state : {pageName : page}})
            }}>게시글 작성</button>
          </div>
=======
            </div>
>>>>>>> gwanho
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
              <label>공지이름</label>
            </div>
            <div
              style={{
                width: "10vw",
                textAlign: "center",
                borderBottom: "1px solid",
                margin: "0 2px ",
              }}
            >
              <label>작성일</label>
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
          </div>
<<<<<<< HEAD
          {createList(list)}
=======
>>>>>>> gwanho
        </div>
      </div>
    );
  };
  return (
    <>
      {renderBody()}
<<<<<<< HEAD
=======
      <div
        style={{
          position: "absolute",
          left: "400px",
          fontSize: "20px",
          top: "140px",
        }}
      >
        {createList(list)}
      </div>
>>>>>>> gwanho
      <Menu />
      <Header />
    </>
  );
};

export default NoticePage;
